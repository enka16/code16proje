import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import FayLink from './FayLink';
import Duyuru from './Duyuru';


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-5'>
    <div>
    <SliderComp />
    </div>
    <div className='flex items-center justify-between my-5'>
    <div className='dark:bg-neutral-900 rounded-md h-1/3 w-1/3'>
      <FayLink/>
    </div>
    <div className='dark:bg-neutral-900 rounded-md h-1/3 w-1/3 flex items-center gap-8'>
      <Duyuru/>
    </div>
    </div>
    </div>
  )
}

export default Home


