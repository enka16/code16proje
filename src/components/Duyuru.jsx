import React from 'react'

const Duyuru = () => {
  return (
    <div className=''>
        <h2 className='text-3xl text-green-700 m-2'>DUYURULAR </h2>
        <ul className='text-white'>
             <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.buski.gov.tr/ArizaBakim/Calismalar" target='_blank'>
                    BUSKİ Arıza Bakım Çalışmaları
                </a>
            </li>
            <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.bursa.bel.tr/hal_fiyatlari" target='_blank'>
                    Bursa Hikmet Şahin Kent Hali Hal Fiyatları
                </a>
            </li>
            <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.bursa.bel.tr/etkinlik" target='_blank'>
                    Etkinlikler
                </a>
            </li>
            <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.bursa.bel.tr/projeler" target='_blank'>
                    Projeler
                </a>
            </li>
            <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.ilan.gov.tr/ilan/tum-ilanlar?aci=30" target='_blank'>
                    Bursa Resmi İlan Portalı
                </a>
            </li>
            <li>
                <a className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" 
                href="https://www.bursa.bel.tr/ihale" target='_blank'>
                    Bursa İhale İlanları
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Duyuru