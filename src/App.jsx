import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Egitim from './components/Egitim';
import { Route, Routes } from 'react-router-dom';
import Ulasim from './components/Ulasim';
import Saglik from './components/Saglik';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' m-auto'>
    <div>
   <Navbar/>
    </div>
    <div className='m-5'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/egitim' element={<Egitim />} />
        <Route path='/ulasim' element={<Ulasim />} />
        <Route path='/saglik' element={<Saglik />} />
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App


//Enes Kaya