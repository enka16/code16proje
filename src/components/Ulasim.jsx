import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function App() {
  const [excelData, setExcelData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      setExcelData(data);
      console.log(data); 
    };

    reader.readAsBinaryString(file);
  };

  const handleSearch = () => {
    const results = excelData.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm.toLowerCase())));
    setSearchResults(results);
  };

  return (
    <div className='bg-gray-200 m-5'>
      <input className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-200 file:text-violet-700
      hover:file:bg-violet-100 m-3" type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <div className='flex items-center border p-3 rounded-full bg-gray-200 gap-8'>
        <input className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Arama Yapınız...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleSearch}>Ara</button>
      </div>
      <div className='flex justify-center'>
        {excelData && (
          <table className='text-center justify-center border-separate border-spacing-2 border border-slate-500 ... table-auto'>
            <thead>
              <tr>
                {excelData[0].map((cell, index) => (
                  <th className='border border-slate-600 ...' key={index}>Sütun {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(searchResults.length > 0 ? searchResults : excelData).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td className='border border-slate-700 ...' key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='h-[500px] w-screen'></div>
    </div>
  );
}

export default App;
