import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function NavBar({state}) {
  const[showNav,navFun] = useState(false)

const[borderStatus,borderFun] = useState()

let windowEventHandler = ()=>{window.addEventListener('wheel',(e)=>{
navFun(e.pageY)
})}
useEffect(()=>{
windowEventHandler()
showNav>430?
gsap.to('.borderDiv',{
backgroundColor:' rgba(255, 255, 255, 0.445)',
transform:'translateY(0)'
})
:gsap.to('.borderDiv',{
  backgroundColor:' rgba(255, 255, 255, 0)',
  transform:'translateY(1vw)'
  })

},[showNav])

useEffect(()=>{
if(state){
  gsap.to('.navbar',{
    opacity:'1',
    duration:1,
    delay:0.6
  })
}

},[state])


  return (
 
    <nav className='navbar w-[100vw] flex justify-between opacity-0' >
        <div className="logo">
            <h1>LAZAREV.</h1>
        </div>
        <ul className='homeDivUl flex gap-[1.8vw] '>
        <li className='navHome'>
      <p className='pp'>What we do <FontAwesomeIcon className='iconFont' icon={faChevronDown} /></p>
        <ul className='hideDiv'>
          <li>AI & ML</li>
          <li>FinTech</li>
          <li>Real Estate</li>
          <li>E-commerce</li>
          <li>Web3</li>
          <li>MVP</li>
          <li>Relaunch</li>
        </ul>
       
        </li>
        <li className='hoverGreen'>Cases</li>
        <li className='hoverGreen'>Outcomes</li>
        <li className='hoverGreen'>News</li>
        <li className='greenBtn'><button>Let's Talk</button>  </li>
        </ul>
        <div className="borderDiv w-[87.5%] absolute"></div>
        </nav>

    
  )
}
