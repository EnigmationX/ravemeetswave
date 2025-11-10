import React,{useRef} from 'react'
import bgurl from '../assets/images/hero-bg.png'
import '../font.css'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
export default function hero() {
useGSAP(()=>{
  const herotl = gsap.timeline({
    scrollTrigger:{
      trigger:".hero-container",
      start:"1% top",
      bottom:"bottom top",
      scrub:true,
    }
  })
  herotl.to(".hero-container",{
    rotate:7,
    scale:0.9,
    yPercent:30,
    ease:"power1.inOut"
  })
  const headerTl = SplitText.create(".bubble",{type:"words"});
   gsap.from(headerTl.words,{
    scale:0,
    opacity:0,
    y:30,
    duration:1,
    ease:"back.out(1.7)",
    stagger:0.15
  })
})
   return (
    <section className='overflow-hidden'>
    <div className='hero-container w-screen  bg-amber-200 h-dvh relative'>
         <img src={bgurl} alt="RaveMeetWave Hero Background" className="w-full  sm:scale-100  
         scale-150 z-10 transistion-transform duration-300 absolute -bottom-0 object-cover"/>
         <span  className ="bubble hero-title absolute text-center  top-1/4 
         translate-y-1/4 right-1/2 text-5xl text-black scale-100 sm:scale-200   translate-x-1/2"
         style={{fontFamily:"baby gemoy", fontWeight:"regular"}}>The Just Vibez Edition</span>
      </div>
    </section>
    )
}
