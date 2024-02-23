import React, { useEffect, useState } from 'react'

const Egitim = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        'veri/data.json'
      );
      const data = await response.json();
      setTodos(data);
    };
    getTodos();
  }, []);
  console.log(todos);
  return (
    <>
    <div className='text-center justify-center bg-gray-200 m-5'>
    <h1 className='text-3xl text-red-700 font-bold my-5 mx-5 text-center'>ANA KUCAĞI MERKEZLERİ</h1>
    <span className='justify-center text-lg font-bold text-green-800'>İLÇE</span> - <span className='justify-center text-lg font-bold text-blue-800'> MAHALLE </span> - <span className='justify-center text-lg font-bold text-black-800'> MERKEZİN ADI</span>
    </div>
    <div className='bg-gray-200 m-5'>
    
    <ul className='space-y-4 text-gray-500 list-disc list-inside dark:text-black'>
      
      {todos?.map(veri =><li className='ps-5 mt-2 space-y-1 list-decimal list-inside' key={veri.id}><span className='justify-center text-lg font-bold text-green-800'> {veri.ilce}  </span>
        -  <span className='justify-center text-lg font-bold  text-blue-800'>  {veri.mahalle}</span>  -  
        <span className='justify-center text-lg font-bold text-black-800'>  {veri.adi}</span>
            </li>,
      )}
    </ul>
    </div>
    </>
  )
}

export default Egitim