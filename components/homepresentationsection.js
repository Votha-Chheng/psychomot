import { useEffect, useRef, useState } from "react";
import {InView } from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import RotationCard from "./rotationcard";
import { useRouter } from "next/router";
import Presentation1 from "./presentation1";
import Presentation2 from "./presentation2";
import {gsap} from "gsap";


const HomePresentationSection = ({sectionInView}) => {

  const [quiSuisJeInView, setQuiSuisJeInView] = useState(false)
  const [specificityInView, setSpecificityInView] = useState(false)
  const [parcoursInView, setParcoursInView] = useState(false)
  const [baliseEnd, setBaliseEnd] = useState(false)
  const [boxWidth, setBoxWidth] = useState(0)

  const box = useRef(null)

  const size = useWindowSize()

  useEffect(() => {
    setBoxWidth(box.current.offsetWidth)
  }, [size, boxWidth])

  useEffect(() => {
    if(quiSuisJeInView && boxWidth>1024){
      gsap.to("h2.title-h2-side",{
        y:0,
        duration:1.5,
        delay:0.5
      })
    }
  }, [quiSuisJeInView])

  const listSideTitle = ["Quelques mots sur moi...", "Mes spécificités", "Expériences professionnelles"]


  return (
    <SectionWrapper style={{backgroundColor:`${baliseEnd ? "#9f7f92" : sectionInView ? "#28536b" : "white"}`}}>
      <div id='box' ref={box}>
        <div data-scroll data-scroll-sticky data-scroll-target="#box" style={{position:"absolute"}}>
          <h2 
            className="title-h2-side title-first hidden-width-960" 
            style={{ opacity:`${ baliseEnd ? "0" : quiSuisJeInView ? "1":specificityInView ? "0" : "0"}`}}>
            {listSideTitle[0]}
          </h2>
          <h2 
            className="title-h2-side title-second hidden-width-960" 
            style={{opacity:`${baliseEnd ? "0" : (boxWidth<985) ? "1" : parcoursInView ? "0": (quiSuisJeInView && specificityInView)? "0" : specificityInView ? "1":  "0"}`}}>{listSideTitle[1]}
          </h2>
          <h2 
            className="title-h2-side title-third hidden-width-960" 
            style={{opacity:`${baliseEnd ? "0" : (boxWidth<985) || parcoursInView ? "1":"0"}`}}>
              {listSideTitle[2]}
            </h2>
        </div>

        <InView as='div' onChange={(inView)=>setQuiSuisJeInView(inView)}>
          <Presentation1/>
        </InView>
        
        <h3 className="bandeau up" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15">
          épanouissement - relations aux autres - connaissance de soi - équilibre - gestion des émotions - relaxation - méditation - potentialité - développement personnel - 
          épanouissement - relations aux autres - connaissance de soi - équilibre - gestion des émotions - relaxation - méditation - potentialité - développement personnel
        </h3>
        <h3 className="bandeau down" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-15">
          relations aux autres - équilibre - potentialité - méditation - relaxation - épanouissement - gestion des émotions - développement personnel - connaissance de soi - 
          relations aux autres - équilibre - potentialité - méditation - relaxation - épanouissement - gestion des émotions - développement personnel - connaissance de soi
        </h3>

        <InView as='div' onChange={(inView)=>setSpecificityInView(inView)}>
          <Presentation2/>
        </InView>

        <InView as="div" className="rotation-card-container" threshold="0.15" onChange={(inView, entry)=>setParcoursInView(inView)}>
          <RotationCard dataCard titleSideWidth />
        </InView>

      </div>
      <InView 
        className='balise-fin' 
        as='div' 
        threshold="1" 
        onChange={(inView, entry)=>setBaliseEnd(inView)} 
        style={{position : "absolute", bottom:"-25px", width :"10vh", height:"10px", backgroundColor:'transparent'}}>  
      </InView>     
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  height: 100%;
  transition : background-color 0.5s ease-out;
  transform-style: preserve-3d;
  padding : 5px 20px 0px;
  position: relative;
  margin : 0 auto;
  padding-bottom: 30vh;

  h2.title-h2-side{
    letter-spacing: 1.5px;
    text-align: center;
    font-family: 'Marck Script', cursive;
    position: absolute;
    writing-mode: vertical-rl;
    font-size:clamp(1.8em, 5vh, 3.5em);
    color: white;
    transform: translateY(-100%);
    padding-top: 50px;
    width: 75px;
    height: 720px;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-out;
    margin: 0px;
  }

  .bandeau{
    margin-left:-60%; 
    text-transform:uppercase;
    -webkit-text-stroke : 1px white;
    color: transparent;
    font-size : clamp(1.8em, 4vw, 5em);
    width:900%;
    letter-spacing: 6px;
    letter-spacing: 1.5px;
    text-shadow: none;
  }
  .bandeau.up, .bandeau.down{
    margin:0px;
  }

  .rotation-card-container{
    width: 80%;
    margin-left: 150px;
    margin-top: 30vh;
  }  
 

//Sticky element for mobile view
@media (max-width:1024px){
  .title-h2-side{
    position: static !important;
  }
  .title-h2-side.title-first{
    transform: translateY(0px);
    opacity: 1;
  }
  .title-h2-side.title-second{
    transform: translateY(400px);
    opacity: 1;
  }
  .title-h2-side.title-third{
    transform: translateY(1200px);
    opacity: 1;
  }
}

@media (max-width:1000px){
  h2.title-h2-side{
    display: none;
  }
  .rotation-card-container{
    margin: 300px auto 0px!important;
  }
  .bandeau.up, .bandeau.down{
    margin-right: 500vw !important;
    animation: slideToLeft 60s infinite linear;
  }
  .bandeau.up{
    margin-top:250px;
  }
  .bandeau.down{
    animation: slideToRight 60s infinite linear;
    margin-bottom:250px;
  }
}


@media (max-width:769px){
  .bandeau{
    width: 800vh !important;
  }
  .bandeau.up{
    margin-top:250px;
    margin-right: 200vw !important;
    animation: slideToLeft 60s infinite linear;
  }
  .bandeau.down{
    margin-bottom:250px;
    margin-left: -200vw;
    animation: slideToRight 60s infinite linear;
  }
}

@media (max-width:520px){
  .rotation-card-container{
    margin-top: 150px !important;
    height: 1550px;
  }
  
}

@keyframes slideToLeft{
    from {
      transform: translateX(15%)
    }
    to{
      transform: translateX(-100%)
    }
  }
  @keyframes slideToRight{
    from {
      transform: translateX(-35%)
    }
    to{
      transform: translateX(100%)
    }
  }
` 

export default HomePresentationSection;