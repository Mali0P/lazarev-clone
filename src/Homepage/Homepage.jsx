import React, { useEffect, useState } from 'react'
import LandingHeading from '../landingHeading/LandingHeading'
import NavBar from '../landingHeading/NavBar'
import LocomotiveScroll from 'locomotive-scroll';
import SecondPage from '../SecondPage/SecondPage';
import ThirdContainer from '../ThirdPage/ThirdContainer';
import FourthPage from '../FourthPage/FourthPage';
import Fifthpage from '../FifthPage/Fifthpage';
import './main.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const locomotiveScroll = new LocomotiveScroll();
export default function Homepage() {
const[localState,localFun] = useState(false)
useEffect(()=>{
setTimeout(()=>{
  localFun(!localState)
},600)

},[])  


  return (
    <div className='main'>
     
      <NavBar state={localState}/>
  <LandingHeading state={localState}/>
  <SecondPage/>
<ThirdContainer />
<FourthPage />
<Fifthpage />

    </div>
  )
}
