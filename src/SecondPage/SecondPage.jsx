import React from 'react'
import './secondPage.css'
import icon from './image/iconImage.webp'
export default function SecondPage() {
  return (
    <div className='secondPage w-[100vw] h-[143vh] bg-[#111111] text-[white] py-[8vw] px-[6.2vw]'>
        <div className="detailsContainer w-[100%] h-[100%] grid grid-cols-6 gap-[0.4vw]">
            <div className="gridComponent sm:col-span-6 md:col-span-3 lg:col-span-2 col-span-6">
                <div className="topNumber">
                  <p>/ 01</p>
                </div>
                <div className="bottomContent">
                    <h1>$500M+</h1>
                    <p>in funding secured<br/>for our clients</p>
                </div>
            </div>
            <div className="gridComponent sm:col-span-6 md:col-span-3 lg:col-span-2 col-span-6">
            <div className="topNumber">
                  <p>/ 02</p>
                </div>
                <div className="bottomContent">
                    <h1>120+</h1>
                    <p>Awards backing<br/>Our excellence</p>
                </div>
                <div className="awarImage lg:px-[0] md:px-[0]   sm:px-[7vw] "><img className='sm:relative sm:top-[-9vw] sm:left-[9vw] lg:top-[0vw] md:top-[0vw] lg:left-[0vw] md:left-[0vw]' src={icon} alt="" /></div>
            </div>
            <div className="gridComponent col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <div className="topNumber">
                  <p>/ 03</p>
                </div>
                <div className="bottomContent">
                    <h1>2015</h1>
                    <p>Founded, 9 years<br/>of experience</p>
                </div>
            </div>
         
<div className="gridComponent md:col-span-3 col-span-6 sm:col-span-6 lg:col-span-3">
<div className="topNumber">
                  <p>/ 04</p>
                </div>
                <div className="bottomContent">
                    <h1>San Francisco</h1>
                    <p>Based in heart of AI</p>
                </div>
</div>
<div className="gridComponent col-span-6 md:col-span-6 sm:col-span-6 lg:col-span-3">
<div className="topNumber">
                  <p>/ 05</p>
                </div>
                <div className="bottomContent">
                    <h1>All-in-One-Solution</h1>
                    <p>Formed user-research to scalable design systems<br/>we've got you covered</p>
                </div>
</div>
        
         

        </div>
    </div>
  )
}
