import React, { useRef, useState } from 'react';
import './FourthPage.css';
import img2 from './VIdeoIMage/img1.webp';
import img1 from './VIdeoIMage/img2.webp';
import img3 from './VIdeoIMage/img3.webp';
import img4 from './VIdeoIMage/img4.webp';

import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function FourthPage() {
  const[xVal,xValueFun] = useState()
  const[yVal,yValueFun] = useState()
  const videoRef = useRef([]);
  const cursorRef = useRef([]);
  const curButton = useRef([])


  let playVideo = (index) => {
    videoRef.current[index].play();
    videoRef.current[index].style.opacity = '1';
  };

  let stopVideo = (index) => {
    videoRef.current[index].load();
    videoRef.current[index].style.opacity = '0';
  };


  let enterMouse = (e,index) => {
    const rect = e.target.getBoundingClientRect(); 
    const xValue = e.clientX - rect.left; 
    const yValue = e.clientY - rect.top;
    xValueFun(xValue);
    yValueFun(yValue);
   
    gsap.to(cursorRef.current[index],{
        x:xVal,
        y:yVal,
        width:'13vw',
        height:'13vw',
        fontSize:'1vw',
        duration:0.3,
        display:'content',
        ease:'none'
            })
    gsap.to('.divCircle2 p',{
       fontSize:'1vw',
        ease:'none'
            })
  };

  let mouseLeave =(id)=>{
    stopVideo(id)
    gsap.to('.divCircle2',{
      x:xVal,
      y:yVal,
        width:0,
        height:0,
        duration:0.4,
        ease:'none'
            })
            gsap.to('.divCircle p',{
                fontSize:'0vw',
                 ease:'none'
                     })
  
}


let buttonMouse = (index)=>{
  gsap.to(curButton.current[index],{
      width:'105%',
      height:'4.2vw'
      
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
let mouseLeaveButton = (index)=>{
  gsap.to(curButton.current[index],{
      width:'100%',
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
    <div className='videoDiv bg-[#111111] w-[100vw]  h-[208vw] text-[white] pt-[6.7vw] '>
      <div className="fourthPageDes pl-[32vw] pr-[4.2vw] mb-[2vw] flex">
        <p><span className='text-[#a3a3a3]'>Featured digital <br />
          design projects</span>Our portfolio encompasses a wide range of digital designs essential for the growth of modern businesses. From B2B SaaS and B2C mobile apps to marketing design for promotions, we display our work created for early-stage startups and enterprises at various stages of their growth.
        </p>
      </div>


      <div className="firstSticky flex">
        <div className="leftData">
          <div className="data">
            <h2>AI</h2>
            <p>Using advanced AI, we'll design intuitive solutions that streamline operations and elevate user experiences, tailored to your unique business needs.</p>
            <div  ref={(e)=>curButton.current[0]=e} onMouseOver={()=>{buttonMouse(0)}} onMouseLeave={()=>{mouseLeaveButton(0)}} className="cursor-pointer belowButtonP text-[1vw] leftButton bg-[#4f5aff] w-[18vw] h-[4vw] mt-[2vw] m-auto rounded-[2vw] text-center flex justify-center items-center font-[540] uppercase">
<p className='firstP text-[0.9vw] font-[600]'> 
<span>See</span>&nbsp; <span>ALl</span> &nbsp;  <span>Case</span>&nbsp;  <span>Studi</span><span> es</span>&nbsp;  <span className='ml-[1vw] text-[1.5vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>
<p className='secondP text-[0.9vw] font-[600]'> 
<span>See</span>&nbsp; <span>ALl</span> &nbsp;  <span>Case</span>&nbsp;  <span>Studi</span><span> es</span>&nbsp;  <span className='ml-[1vw] text-[1.5vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>

</div>
          </div>
        </div>

        <div className="rightData">
          <div className="firstVideoPlayer"   onMouseEnter={() => playVideo(0)} >
            
            <div className="transparentDivContainer absolute w-[100%]" onMouseMove={(e)=>{enterMouse(e,0)}} onMouseLeave={()=>{mouseLeave(0)}}>

            </div>
          <div className="divCircle2 text-[white]" ref={(e)=>(cursorRef.current[0]=e)} >
      <div className='circle2'><p>View<br/>Case Study</p><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></div></div>
            
            <div className="topContent flex">
              <div className="leftHeading"><h2>Pika AI</h2></div>
              <div className="rightInfo">
                <p>Pika AI is a new and better search engine that harnesses AI technology and helps people find the most relevant and interesting information from across the web.</p>
                <div className="topRightButtons">
                  <button>UI design</button>
                  <button>Product design</button>
                  <button>Experience Strategy</button>
                  <button>UX research</button>
                </div>
              </div>
              <div className="rightArrow">
                <svg fill='white'><path d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            
            <div className="firstVideo h-[70vh]">
              <video
                ref={(el) => (videoRef.current[0] = el)}
                src="https://lazarev.kiev.ua/cases/la24/pika-cover-big-s.mp4"
                muted
              />
              <img src={img1} alt="Pika AI thumbnail" />
            </div>
          </div>

          <div className="firstVideoPlayer second"  onMouseEnter={() => playVideo(1)} >
          <div className="transparentDivContainer  absolute w-[100%] " onMouseMove={(e)=>{enterMouse(e,1)}} onMouseLeave={()=>{mouseLeave(1)}}>

</div>
          <div className="divCircle2 text-[white]" ref={(e)=>(cursorRef.current[1]=e)} >
      <div className='circle2'><p>View<br/>Case Study</p><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></div></div>
            <div className="topContent flex">
              <div className="leftHeading"><h2>Accern. Rhea</h2></div>
              <div className="rightInfo">
                <p>Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.</p>
                <div className="topRightButtons">
                  <button>Prototyping</button>
                  <button>UX strategy</button>
                  <button>UI UX Design</button>
                  <button>Product Design</button>
                </div>
              </div>
              <div className="rightArrow">
                <svg fill='white'><path d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            
            <div className="firstVideo h-[75vh]">
              <video
                ref={(el) => (videoRef.current[1]=el)}
                src="https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-big.mp4"
                muted
              />
              <img src={img2} alt="Accern Rhea thumbnail" />
            </div>
          </div>
          
       


        </div>
      </div>
      
      <div className="firstSticky flex">
        <div className="leftData">
          <div className="data">
            <h2>Fintech</h2>
            <p>
            For fintech, we'll craft secure, user-friendly platforms that enhance financial operations, improve data management, and drive user engagement.
              </p>
              <div  ref={(e)=>curButton.current[1]=e} onMouseOver={()=>{buttonMouse(1)}} onMouseLeave={()=>{mouseLeaveButton(1)}} className="cursor-pointer belowButtonP text-[1vw] leftButton bg-[#4f5aff] w-[18vw] h-[4vw] mt-[2vw] m-auto rounded-[2vw] text-center flex justify-center items-center font-[540] uppercase">
<p className='firstP text-[0.9vw] font-[600]'> 
<span>See</span>&nbsp; <span>ALl</span> &nbsp;  <span>Case</span>&nbsp;  <span>Studi</span><span> es</span>&nbsp;  <span className='ml-[1vw] text-[1.5vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>
<p className='secondP text-[0.9vw] font-[600]'> 
<span>See</span>&nbsp; <span>ALl</span> &nbsp;  <span>Case</span>&nbsp;  <span>Studi</span><span> es</span>&nbsp;  <span className='ml-[1vw] text-[1.5vw]'><FontAwesomeIcon icon={faArrowUp} className='rotate-[40deg]'/></span>
          </p>

</div>
          </div>
        </div>

        <div className="rightData">
          <div className="firstVideoPlayer"  onMouseEnter={() => playVideo(2)} >
          <div className="transparentDivContainer absolute w-[100%]" onMouseMove={(e)=>{enterMouse(e,2)}} onMouseLeave={()=>{mouseLeave(2)}}>

</div>
          <div className="divCircle2 text-[white]" ref={(e)=>(cursorRef.current[2]=e)} >
      <div className='circle2'><p>View<br/>Case Study</p><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></div></div>
            <div className="topContent flex">
              <div className="leftHeading"><h2>Pika AI</h2></div>
              <div className="rightInfo">
                <p>Pika AI is a new and better search engine that harnesses AI technology and helps people find the most relevant and interesting information from across the web.</p>
                <div className="topRightButtons">
                  <button>UI design</button>
                  <button>Product design</button>
                  <button>Experience Strategy</button>
                  <button>UX research</button>
                </div>
              </div>
              <div className="rightArrow">
                <svg fill='white'><path d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            
            <div className="firstVideo h-[75vh]">
              <video
                ref={(el) => (videoRef.current[2] = el)}
                src="https://lazarev.kiev.ua/cases/la24/boel-it-cover-big-s.mp4"
                muted
              />
              <img src={img3}/>
            </div>
          </div>

          <div className="firstVideoPlayer second" onMouseEnter={() => playVideo(3)}>
          <div className="transparentDivContainer  absolute w-[100%] " onMouseMove={(e)=>{enterMouse(e,3)}} onMouseLeave={()=>{mouseLeave(3)}}>

</div>
          <div className="divCircle2 text-[white]" ref={(e)=>(cursorRef.current[3]=e)} >
      <div className='circle2'><p>View<br/>Case Study</p><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></div></div>
            <div className="topContent flex">
              <div className="leftHeading"><h2>Accern. Rhea</h2></div>
              <div className="rightInfo">
                <p>Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.</p>
                <div className="topRightButtons">
                  <button>Prototyping</button>
                  <button>UX strategy</button>
                  <button>UI UX Design</button>
                  <button>Product Design</button>
                </div>
              </div>
              <div className="rightArrow">
                <svg fill='white'><path d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            
            <div className="firstVideo h-[75vh]">
              <video
                ref={(el) => (videoRef.current[3]=el)}
                src="https://lazarev.kiev.ua/cases/la24/tratta-cover-big-s.mp4"
                muted
              />
              <img src={img4}/>
            </div>
          </div>
          
       


        </div>


        
      </div>


      
    </div>
  );
}
