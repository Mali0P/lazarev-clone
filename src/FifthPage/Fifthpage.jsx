import React from 'react'
import './fifthcss.css'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);
export default function Fifthpage() {

    useGSAP(()=>{

     



        gsap.to('.same',{
            borderLeft:'1px solid #dcdcdc',
            height:'100%',
            scrollTrigger:{
                scroller:'body',
                trigger:'.same',
                start:'top 90%',
                end:'bottom 40%',
                scrub:2
            }
            

        })
        gsap.to('.s' ,{
      
      x:50,
            scrollTrigger:{
                scroller:'body',
             
                trigger:'.f',
                start:'top 120%',
                end:'bottom 20%',
                scrub:2
            }
            

        })
    
        gsap.to('.t' ,{
      
      x:100,
            scrollTrigger:{
                scroller:'body',
               
                trigger:'.f',
                start:'top 120%',
                end:'bottom 20%',
                scrub:2
            }
            

        })
        gsap.to('.f' ,{
      
      x:150,
            scrollTrigger:{
                scroller:'body',
               
                trigger:'.f',
                start:'top 120%',
                end:'bottom 20%',
                scrub:2
            }
            

        })
        gsap.to('.fiv' ,{
      
      x:200,
            scrollTrigger:{
                scroller:'body',
              
                trigger:'.f',
                start:'top 120%',
                end:'bottom 20%',
                scrub:2
            }
            

        })
        gsap.to('.six' ,{
      
      x:250,
            scrollTrigger:{
                scroller:'body',
             
                trigger:'.f',
                start:'top 120%',
                end:'bottom 20%',
                scrub:2
            }
            

        })



        

    })

let buttonMouse = ()=>{
    gsap.to('.belowButton',{
        width:'19.3vw',
        height:'4.3vw'
        
          })
    gsap.to('.firstP span',{
        transform:'translate3d(50%,-50%,0px) rotateX(-75deg)',
        ease: "power1.out",
       
        opacity:0,
        duration:0.3,
        stagger:{
         amount:0.2
        }
     
       })

       gsap.to('.secondP span',{
        transform:'translate3d(0px,0px,0px) rotateX(0deg)',
        ease: "power1.out",
        opacity:1,
        duration:0.3,
        stagger:{
         amount:0.2
        } })
}
let mouseLeaveButton = ()=>{
    gsap.to('.belowButton',{
        width:'18vw',
        height:'4vw'
        
          })
    gsap.to('.firstP span',{
        transform:'translate3d(0px,0px,0px) rotateX(0deg) ',
        opacity:1, 
        duration:0.3,
        ease: "power1.out",
        stagger:{
         amount:0.2
        }
       })
       gsap.to('.secondP span',{
        transform:'translate3d(0px,100%,10px) rotateX(75deg) ',
     
        opacity:0,
        duration:0.3,
        ease: "power1.out",
        stagger:{
         amount:0.2
        }})
}
  return (
    <div className='w-[100vw] h-[80vw] py-[4.5vw] belowData'>
        <div className="headingDiv flex  pl-[2.2vw] justify-center text-[5.5vw] font-[600]">
      <h2>
Digital Product <br />
Design Process</h2>
        </div>
        <div className="belowData flex h-[30vw] py-[5vw]  mb-[1.3vw]">
            <div className="relative leftButton basis-[27%] text-[white]">
<div  onMouseOver={buttonMouse} onMouseLeave={mouseLeaveButton} className="cursor-pointer belowButton text-[1vw] leftButton bg-[#4f5aff] w-[18vw] h-[4vw] m-auto rounded-[2vw] text-center flex justify-center items-center font-[540] uppercase">
<p className='firstP text-[0.9vw] font-[600]'> 
<span>Disc</span><span>over</span> &nbsp;  <span>Our</span>&nbsp;  <span>Proc </span><span> ess</span>&nbsp;  <span className='ml-[1vw] text-[1.2vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>
<p className='secondP text-[0.9vw] font-[600]'> 
<span>Disc</span><span>over</span> &nbsp;  <span>Our</span>&nbsp;  <span>Proc </span><span> ess</span> &nbsp; <span className='ml-[1vw] text-[1.2vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>

</div>
         
            </div>
            <div className="rightPara basis-[70%] pl-[4vw] pr-[23vw] text-[1.6vw]">
<p className='mb-[4vw]'>
We do not take on projects that involve blind conformity or designing out of context. We won't settle for a user interface design that is misaligned with your product and digital strategy. Neither will we launch web development ventures without user testing to validate our design solutions.</p>
         <p>Instead, we create scalable digital products that meet the ever-evolving demands of our customers, ensuring long-term sustainability.</p>
            </div>
        </div>
        <div className="floatingData border-t w-[87%]  h-[25vw] m-auto flex justify-end">
<div className="first h-[0%] same basis-[30%]  py-[1.5vw] pl-[0.7vw] text-[0.9vw]">
<p>Product Strategy</p>
<div className="collection mt-[2.5vw]">
    <ul className='gap-[0.2vw] flex flex-col'>
        <li className='bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>1</span>Strategy Workshops</li>
        <li className='s bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>2</span>Idea Validation</li>
        <li className='t bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>3</span>Market Research</li>
        <li className='f bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>4</span>Product Positioning</li>
        <li className='fiv bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>5</span>UX Research</li>
        <li className='six bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[60%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>6</span>Functional Decomposition</li>
    </ul>
</div>
</div>
<div className="second same h-[0%] basis-[14%]  py-[1.3vw] pl-[0.7vw] text-[0.9vw] ">
<p>UX Design</p>
<div className="collection mt-[2.5vw]">
    <ul className='gap-[0.2vw] flex flex-col'>
        <li className='bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[93%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>7</span>User Flows</li>
        <li className='s bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[93%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>8</span>Prototyping</li>
      
    </ul>
</div>
</div>
<div className="third same basis-[14%] h-[0%]  py-[1.3vw] pl-[0.7vw] text-[0.9vw]">
<p>UI Design</p>
<div className="collection mt-[2.5vw]">
    <ul className='gap-[0.2vw] flex flex-col'>
        <li className='bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[93%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>9</span>Moodboards</li>
        <li className='s bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[93%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>10</span>Visual Design</li>
        <li className='t bg-[black] rounded-[2vw] text-[white] pl-[0.5vw] py-[0.7vw] w-[93%] text-[0.9vw]'><span className='bg-[#3d3d3d] rounded-[100vw] py-[0.4vw] px-[0.6vw] mr-[1vw]'>11</span>Hand-off</li>
      
    </ul>
</div>
</div>
<div className="forth same basis-[14%] h-[0%] py-[1.3vw] pl-[0.7vw] text-[0.9vw]">
<p>Delivery</p>
</div>
        </div>
    </div>
  )
}
