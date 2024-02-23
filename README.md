# code16 Temel Yazılım Akademisi Final Projesi

Lütfen aşağıdaki paketleri yükleyiniz...

npm create vite@latest

npm install -D tailwindcss
npx tailwindcss init

Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


npm install react-router-dom localforage match-sorter sort-by


npm install react-slick --save
npm install slick-carousel --save


npm i xlsx


Site Ana Sayfa, Eğitim, Sağlık ve Ulaşım olmak üzere 4 sayfadan oluşmakta olup bu bölümlere navbar aracılığıyla ulaşabiilirsiniz. Sayfanın alt kısmında ise footer bulunmaktadır. 
- Ana sayfada slider, faydalı bağlantılar ve duyurular bölümlerinden oluşmaktadır.
- Eğitim bölümünde veri klasöründe bulunan data.json dan alınan ana kucağı merkezlerine ait bilgiler bulunmakta.
- Sağlık bölümünde veri klasöründe bulunan eczane.json dan alınan nöbetçi eczane bilgileri yer almaktadır. Bu sayfada bulunan arama bölümünde istenilen ilçe büyük harfle yazılarak arama yapılabilir.
- Ulaşım bölümü excel dosyalarını okumak için tasarlanmıştır. Veri klasöründe bulunan excel dosyalarını kullanınız. Yüklediğiniz excel dosyasından istediğiniz bilgiyi arama bölümünden bulabilirsiniz.

Projenin tamamı için:  https://drive.google.com/file/d/1k3bl7J6OldgxPFwNbP0cJ36hHBRhS4LD/view?usp=drive_link
