import React from 'react'
import vdurl from '../assets/videos/thriller.mp4'
 import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function vsection() {
    useGSAP(()=>{
        const vdtl = gsap.timeline({
            scrollTrigger:{
                trigger: ".vd-pin",
                start: "-15% top",
                end: "200% top", // or "top+=500 top"
                scrub: 1.5,
                pin: true,
              }
        })

        vdtl.to('.vbox',{
            clipPath:"circle(100% at 50% 50%)",
            ease:"power1.inOut"

        })
    })
  return (
    <div className='relative vd-pin  bg-amber-300 h-dvh overflow-hidden'>
             <div style={{clipPath:'circle(10% at 50% 50%)'}} className='size-full vbox '>
                <video src={vdurl} playsInline muted loop autoPlay 
                className="absolute inset-0 w-full h-full"
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2  animate-spin [animation-duration:25s] -translate-y-1/2'>
                    <img src="./pv.png" className='h-15 md:h-25'/>
                </div>
                 <div className='absolute top-1/2 left-1/2 -translate-x-1/2 border rounded-full  p-1 md:p-3 backdrop-blur-lg border-b border-white/20 -translate-y-1/2'>
                    <img src='./play.svg' className='h-5 md:h-10'/>
                </div>
            </div>
     </div>
  )
}
