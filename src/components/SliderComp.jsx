import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='my-14'>
        <Slider {...settings}>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>Bursa Ulu Camii</div>
            <div className='text-lg my-4'>Bursa Ulu Camii, Türkiye'nin Bursa şehrinde bulunan ve Osmanlı İmparatorluğu'nun ilk başkenti olan tarihi bir camidir. Yapımına 1396 yılında başlanan cami, 20 yıl süren bir inşaat sürecinin ardından 1417 yılında tamamlanmıştır.
            <a href='http://www.bursa.gov.tr/ulucami' target='_blank' className='border rounded-full cursor-pointer hover:bg-green-500 text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</a>
            </div>
        </div>
      <img className='h-[400px] w-[800px]' src="src\resim\bursa-ulu-camii-fotograf.jpg" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>Cumalıkızık Köyü</div>
            <div className='text-lg my-4'>Cumalıkızık, Bursa'nın doğusunda, Bursa-Ankara karayolunun 12. km'sinde Uludağ’ın kuzeyinde yer alan erken dönem Osmanlı Vakıf köyüdür.
            <a href='https://www.bursa.com.tr/tr/mekan/cumalikizik-koyu-103/' target='_blank' className='border rounded-full cursor-pointer hover:bg-green-500 text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</a>
            </div>
        </div>
      <img className='h-[400px] w-[800px]' src="src\resim\cumalıkızık.jpg" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>Teleferik İle Uludağ</div>
            <div className='text-lg my-4'>Türkiye’nin ilk teleferiği olan Bursa Teleferik; açıldığı günden (29 Ekim 1963) 2012 yılına kadar aynı teknoloji ile hizmet vermiştir. 7 Haziran 2014 tarihinde teknolojisi, altyapısı ve istasyonları tamamen yenilenerek bambaşka bir yolculuk sunmak üzere yola koyulmuştur.
            <a href='https://www.gotobursa.com.tr/tr/mekan/teleferik-ile-uludag-531/' target='_blank' className='border rounded-full cursor-pointer hover:bg-green-500 text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</a>
            </div>
        </div>
      <img className='h-[400px] w-[800px]' src="src\resim\uludag.jpg" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>Panorama 1326 Bursa Fetih Müzesi</div>
            <div className='text-lg my-4'>Panorama 1326 Bursa Fetih Müzesi, Bursa'nın Osmangazi ilçesinde yer alan, 1 Kasım 2018'de ziyarete açılmış tam panoramik bir müzedir. Temeli 15 Eylül 2015’te atılan müze, ana tema canlandırma salonu, sergi salonları, toplantı salonları, kütüphane, kafeterya ve idari bölümlerden oluşmaktadır.
            <a href='https://panorama1326.com.tr' target='_blank' className='border rounded-full cursor-pointer hover:bg-green-500 text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</a>
            </div>
        </div>
      <img className='h-[400px] w-[800px]' src="src\resim\fetihmuze2_.jpg" alt="" />
    </div>
    <div className='!flex items-center bg-gray-100 px-6'>
        <div>
            <div className='text-6xl font-bold'>Emir Sultan Camii ve Külliyesi</div>
            <div className='text-lg my-4'>Emir Sultan Camii ve Külliyesi; 15.yüzyılda, Sultan Mehmed Çelebi’nin hükümdarlığı sırasında, Yıldırım Bayezid’in kızı Hundi Fatma Hatun tarafından kocası Emir Sultan adına yaptırılmıştır. Günümüzde Türkiye’de en çok ziyaret edilen cami ve türbeler arasında Eyüp Sultan Türbesi’nden sonra ikinci sırada gelmektedir.
            <a href='http://www.yildirim.gov.tr/emir-sultan-camii' target='_blank' className='border rounded-full cursor-pointer hover:bg-green-500 text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</a>
            </div>
        </div>
      <img className='h-[400px] w-[800px]' src="src\resim\emirsultan.jpg" alt="" />
    </div>
    </Slider>
    </div>
  )
}

export default SliderComp