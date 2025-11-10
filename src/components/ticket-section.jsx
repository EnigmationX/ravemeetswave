import React,{useRef} from 'react'
 import TicketCard from './ticket-card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import one from '../assets/images/1.webp'
import two from '../assets/images/2.webp'
import three from '../assets/images/3.webp'
import four from '../assets/images/4.webp'
import five from '../assets/images/5.webp'
  export default function Tsection() {
const sliderRef = useRef()
useGSAP(()=>{
         gsap.set('.tsection',{
            marginTop:"-100vh"
        })

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".tsection",
                start:"top center",
                end:"center center",
                  scrub:true,
              }
        })
        tl.to(".theadline-1",{xPercent:70},)
         tl.to(".theadline-2",{xPercent:25},"<")
          tl.to(".theadline-3",{xPercent:-50},"<")

    })
    const tickets = [one, two, three, four, five];
  return (
        <section ref={sliderRef} className='tsection pb-[5vw]  bg-amber-200 relative'>
                <div className='aboslute size-full flex flex-col items-center pt-[10vw] overflow-x-hidden'>
                    <h1 style={{fontFamily:'anton', fontWeight:'bold'}} className='anton text-black theadline-1 text-4xl md:text-9xl uppercase'>wanna flex</h1>
                  <h1 style={{fontFamily:'anton', fontWeight:'bold'}} className='anton text-white theadline-2 text-4xl md:text-9xl uppercase'>like a legend ?</h1>
                    <h1 style={{fontFamily:'anton', fontWeight:'bold'}} className='anton text-black theadline-3 text-4xl md:text-9xl uppercase'>pick one!</h1>
                </div>
                <div className='pin-point pt-6 w-full flex-center flex-col gap-5 '>
                    {tickets.map((img, index) => ( 
                        <a className='flex justify-center' href={`https://links.myvendy.com/ravemeetswave`} key={index}>
                            <TicketCard img={img}/>
                        </a>
                        ))}
                    
                </div>
        </section>
  )
}
