import gsap from "gsap";
import { useGSAP} from "@gsap/react";
import React from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {

    useGSAP(()=>{
        gsap.from(".img",{
            opacity:0,
            y:50,
            duration:0.3,
            scrollTrigger:".img"
        })

        gsap.from(".imgg",{
            opacity:0,
            y:150,
            duration:0.7,
        })

        gsap.from(".mainn",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn"
        })

        gsap.from(".mainn-1",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn-1"
        })

        gsap.from(".mainn-2",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn-2"
        })

        gsap.from(".mainn-3",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn-3"
        })

        gsap.from(".mainn-4",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn-4"
        })

        gsap.from(".mainn-5",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".mainn-5"
        })

        gsap.from(".con",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".con"
        })

        gsap.from(".moving",{
          opacity:0,
          y:150,
          duration:0.7,
          scrollTrigger:".moving"
        })
    })

  return (
    <div>
      
    </div>
  )
}

export default Animation

