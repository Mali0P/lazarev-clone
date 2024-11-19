import React from 'react'
import './ThirdContainer.css'
import imgFirst from './Images/img1.webp'
import imgSecond from './Images/img2.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

 

export default function ThirdContainer() {
  gsap.registerPlugin( ScrollTrigger);
  useGSAP(()=>{
 
    gsap.to('.imgSecond',{
      y:'-30%',
      duration:10,
      scrollTrigger:{
        scroller:'body',
        trigger:'.imgSecond',

        start:'top 50%',
        end:'bottom -20%',
        scrub:2
      }

    })
    gsap.to('.imgFirst',{
      y:'7%',
      duration:10,
      scrollTrigger:{
        scroller:'body',
        trigger:'.imgSecond',
        start:'top 50%',
        end:'bottom -30%',
        scrub:2
      }

    })
  })

let animateText = ()=>{
  gsap.to('.firstH5 span',{
   transform:'translate3d(0px,-100%,0px) rotateX(-75deg)',
   ease: "power1.out",
  
   opacity:0,
   duration:0.3,
   stagger:{
    amount:0.2
   }

  })

  gsap.to('.firstH5 .icc',{
    transform:'translate3d(0px,-100%,0px) rotate(-50deg)',
    opacity:0, 
    duration:0.4,
    ease: "power1.out",
    stagger:{
     amount:0.3
    }
 
   })
  gsap.to('.secondH5 span',{
   transform:'translate3d(0px,0px,0px) rotateX(0deg)',
   ease: "power1.out",
   opacity:1,
   duration:0.3,
   stagger:{
    amount:0.2
   }

  })
  gsap.to('.secondH5 .icc',{
   transform:'translate3d(0px,0px,0px) rotate(-40deg)',
   ease: "power1.out",
   opacity:1,
   duration:0.8,

  })
  gsap.to('.animateBtn',{
width:'26.4vw',
height:'4.1vw',
duration:0.2,
ease:'none'

  })

}
let mouseLeaveText = ()=>{
  gsap.to('.animateBtn',{
    width:'25vw',
    height:'3vw'
    
      })
  gsap.to('.firstH5 span',{
   transform:'translate3d(0px,0px,0px) rotateX(0deg)',
   opacity:1, 
   duration:0.3,
   ease: "power1.out",
   stagger:{
    amount:0.2
   }

  })
  gsap.to('.firstH5 .icc',{
   transform:'translate3d(0px,0px,0px) rotate(-400deg)',
   opacity:1, 
   duration:0.8,
   ease: "power1.out"
  })

  gsap.to('.secondH5 span',{
    transform:'translate3d(0px,100%,0px) rotateX(75deg)',
 
    opacity:0,
    duration:0.3,
    ease: "power1.out",
    stagger:{
     amount:0.2
    }})
  gsap.to('.secondH5 .icc',{
    transform:'translate3d(0px,100%,0px) rotate(-40deg)',
 
    opacity:0,
    duration:0.4,
    ease: "power1.out",})

}


  return (
    <div className='ThirdContainer w-[100vw] h-[45vw] flex justify-center items-center text-center text-[white]'>
      <div className="innerContents">
        <h2 className='text-[5.7vw] font-[600]' style={{textWrap:'nowrap'}}>Golden Standard In UX + AI</h2>
        <p className='text-[1.52vw] mt-[1.5vw] mb-[4.5vw]'>Look, we’ve been designing AI experiences since 2017, and we’re not just dabbling in it;<br />
        we’re dominating. We’ve tackled Adtech, Salestech, Fintech, Legaltech, Media — you name it. 
        <br /><br />
        <br />
        Want to see how we do it? </p>
      <div className="animateBtn" onMouseEnter={animateText} onMouseLeave={mouseLeaveText}>  
        <h5 className='firstH5'>
        <span>CHECK</span>&nbsp; <span>Our&nbsp;</span><span>UX&nbsp;</span><span>+</span>&nbsp;<span>AIINNOVATIONS</span>&nbsp; <span>HERE</span>&nbsp;&nbsp;&nbsp;
        
     <FontAwesomeIcon icon={faArrowRight} className='icc' /></h5>
        <h5 className='secondH5'>
        <span>CHECK</span>&nbsp; <span>Our&nbsp;</span><span>UX&nbsp;</span><span>+&nbsp;</span><span>AIINNOVATIONS</span>&nbsp; <span>HERE</span>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} className='icc' />
        </h5>

      </div>
      </div>
      <div className="imgFirst">
        <img src={imgFirst}/>
      </div>
      <div className="imgSecond">
        <img src={imgSecond} alt="" />
      </div>
    </div>
  )
}
