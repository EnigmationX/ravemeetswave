import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
export default function timeline() {
    useGSAP(()=>{
    const msgone = SplitText.create(".first-msg",{
        type:'words'
    })
    const paragraphSplit = SplitText.create(".third-msg p",{
        type:'words, lines'
    })
    gsap.to(msgone.words,{
        color:" #fff",
        ease:"power1.in",
        stagger:1,
        scrollTrigger:{
            trigger:".timeline-container",
            start:"top center",
            end:"20% center",
            scrub:true,
         }
    })
    const revealTl = gsap.timeline({
         scrollTrigger:{
            trigger:".clipping-section",
            start:'top 50%',
            end:"bottom 30%",
           scrub:true
        }
    })
     revealTl.to('.clipping-section',{
        duration:1,
        clipPath:"polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
        ease:'circ.inOut',
     })

     const pargraphTl = gsap.timeline({
        delay:1,
        scrollTrigger:{
            trigger:".third-msg p",
            start:'top 50%',
            end:"bottom center",
             scrub:true,
          }
     })

     pargraphTl.from(paragraphSplit.words,{
         yPercent:300,
        rotate:3,
        ease:"power1.inOut",
        duration:1,
        stagger:0.01,
        opacity:0
     })

    })
  return (
    <div className='timeline-container
    relative overflow-hidden z-10 bg-amber-300
      sm:h-fit sm:py-20 pt-20'>

        <div className='container mx-auto flex-center'>
            <div className='w-full h-full'>
                <div style={{fontFamily:'anton', fontWeight:'bold'}} className='msg-wrapper text-amber-200 px-3'>
                    <h1 className='first-msg'>Rave meets wave 4.0 is bigger than ever</h1>
                    {/* clipp section */}
                    <div 
                    style={{clipPath:"polygon(0 0, 0 0,0 100%,0% 100%)"}}
                    className='clipping-section rotate-[3deg]'>
                        <div className='bg-gray-950 p-5'>
                            <h2 className='second-msg text-white'>we aren't playin</h2>
                        </div>
                    </div>

                </div>
                <div className='third-msg flex-center md:mt-20 mt-10'>
                    <p className='font-semibold md:text-xl lg:text-2xl text-center p-2.5 sm:p-0  text-gray-700 text-xs m-0'>
                       This year, we’re going beyond sound 🔊💥
Expect mad stage energy ⚡, crazy visuals 🤯, and VIP zones built for the real ones 😎.
It’s not just a rave — it’s a multi-sensory takeover!
Come ready to dance, scream, and maybe lose a shoe 👟😂
#RaveMode #BeyondSound #NoSleepTillAfterParty
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}
