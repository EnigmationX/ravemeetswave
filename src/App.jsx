import Navbar from './components/nav.jsx'
import HeroSection from './components/hero.jsx'
import ElectricBanner from './components/banner.jsx'
import Timeline from './components/timeline.jsx'
import Vsection from './components/v-section.jsx'
import Tsection from './components/ticket-section.jsx'
import Footer from "./components/footer.jsx" ;
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
 gsap.registerPlugin(ScrollTrigger)
export default function _app() {
  return (
   <>
    <Navbar />
     <HeroSection/>
     <div className='bg-amber-300'>
     <Timeline/>
      <ElectricBanner/>
     <Vsection/> 
     </div>
      <Tsection/>
      <ElectricBanner/>
      <Footer/>
   </>
  )
}
