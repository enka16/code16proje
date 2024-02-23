import React, { useEffect, useState } from 'react';

const Egitim = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('veri/eczane.json');
      const data = await response.json();
      setTodos(data);
    };
    getTodos();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter((veri) =>
    veri.ilce.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='text-center justify-center bg-gray-200 m-5'>
        <h1 className='text-3xl text-red-700 font-bold my-5 mx-5 text-center'>
          NÖBETÇİ ECZANELER
        </h1>
      <span className='justify-center text-lg font-bold text-green-800'>İLÇE</span> - 
      <span className='justify-center text-lg font-bold text-blue-800'> ECZANE </span> - 
      <span className='justify-center text-lg font-bold text-green-800'> ADRES  </span>   -   
      <span className='justify-center text-lg font-bold text-blue-800'> ADRES TARİFİ </span>   -   
      <span className='justify-center text-lg font-bold text-green-800'> BASLANGIÇ TARİHİ </span>   -   
      <span className='justify-center text-lg font-bold text-blue-800'> BİTİŞ TARİHİ </span>
        <input
        className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='text'
          placeholder='İlçe Ara...(Büyük harf kullanınız!)'
          value={searchTerm}
          onChange={handleSearch}
          
        />
      </div>

      <div className='bg-gray-200 m-5'>
        <ul className='space-y-4 text-gray-500 list-disc list-inside dark:text-black'>
          {filteredTodos.map((veri) => (
            <li className='ps-5 mt-2 space-y-1 list-decimal list-inside' key={veri.id}>
              <span className='justify-center text-lg font-bold text-green-800'>
                {' '}
                {veri.ilce}{' '}
              </span>{' '}
              -{' '}
              <span className='justify-center text-lg font-bold text-blue-800'> {veri.eczane}</span>{' '}
              -{' '}
              <span className='justify-center text-lg font-bold text-green-800'> {veri.adres}</span>{' '}
              -{' '}
              <span className='justify-center text-lg font-bold text-blue-800'> {veri.adres_tarifi}</span>{' '}
              -{' '}
              <span className='justify-center text-lg font-bold text-green-800'> {veri.baslangic}</span>{' '}
              -{' '}
              <span className='justify-center text-lg font-bold text-blue-800'> {veri.bitis}</span>{' '}
              -{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Egitim;
