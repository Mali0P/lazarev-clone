import React, { useEffect, useState } from 'react'
import homeVideo from './homeVideo/homeVideo.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Homepage.css'

export default function LandingHeading({state}) {
    const [xValue,xValueFun] = useState()
    const [YValue,YValueFun] = useState()
    const[insideDiv,divFun] = useState(false)
    const tl = gsap.timeline()
useEffect(()=>{
if(state){

tl.to('.headerFirst',{
    opacity:1
})

    tl.to('.mainHeader .firstHeader h2 span',{
        transform:'scaleX(1) scaleY(1) translateY(0%)',
        duration:0.7,
      
        stagger:{
            amount:0.3
        },
        ease:'expo.out'
           })
           tl.to('.mainHeader .secondHeader h2 span',{
        transform:'scaleX(1) scaleY(1) translateY(0%)',
        duration:0.7,
        stagger:{
            amount:0.2
        },
        ease:'expo.out'
           })
           tl.to('.bottomHeading p',{
            opacity:1,
        transform:'scaleX(1) scaleY(1) translateY(0%)',
        duration:0.5,
        ease:'expo.out'
           })
           tl.to('.firstVdeo',{
            opacity:1
           })
}


})



let calValue = (e) => {
    const rect = e.target.getBoundingClientRect(); 
    const xValue = e.clientX - rect.left; 
    const yValue = e.clientY - rect.top;
    xValueFun(xValue);
    YValueFun(yValue);
    divFun(!insideDiv)
    gsap.to('.circle',{
        x:xValue,
        y:YValue,
        width:'12vw',
        height:'12vw',
        fontSize:'1vw',
        duration:0.3,
        display:'content',
        ease:'none'
            })
    gsap.to('.circle p',{
       fontSize:'1vw',
        ease:'none'
            })
  };
  
let mouseLeave =()=>{
    gsap.to('.circle',{
        x:xValue,
        y:YValue,
        width:0,
        height:0,
        duration:0.4,
        ease:'none'
            })
            gsap.to('.circle p',{
                fontSize:'0vw',
                 ease:'none'
                     })
  
}


  return (
   <>
         <div className="homeDiv lg:h-[190vh] md:h-[150vh] w-[100vw] bg-[#111111] text-[white] ">
<div className="headerFirst font-[500] opacity-0">
    <h1>AI + Product Design Agency  /<span>/</span><span>/</span> &nbsp;San Francisco</h1>
</div>
<div className="mainHeader">
    <div className='firstHeader'>
    <h2 className='font-[700] text-[5.7vw]'><span>UX</span><span>-</span><span>First</span>  
    <span >&nbsp;Design</span>
    <span>&nbsp;Agency</span>
    </h2>
    </div>
   <div className='secondHeader'>
    <h2 className='font-[700] text-[5.7vw]'>
    <span>&nbsp;for</span>
    <span>&nbsp;B2B</span>
    <span>&nbsp;+ AI</span>
    <span>&nbsp;Companies</span>
    </h2>
    </div>
</div>
<div className="bottomHeading mt-[1.4vw] mb-[6.5vw]">
    <p>
        We launch <span>MVPs</span> redefine <span>existing products</span> &continuously dive into <span>customer development</span>
    </p>
</div>
<div className="homeVideo">
<video  style={{opacity:'0'}} className='firstVdeo' autoPlay muted loop onMouseMove={(e)=>{calValue(e)}} onMouseLeave={mouseLeave}>
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="transparent" onMouseMove={(e)=>{calValue(e)}} onMouseLeave={mouseLeave}></div>
    <div className="divCircle">
      <div className='circle'><p>Watch Our<br/>Show Reels</p><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></div></div>
</div>


        </div>
   </>
  )
}
