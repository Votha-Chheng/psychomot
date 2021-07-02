import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {useInView} from 'react-intersection-observer'
import useWindowSize from "../hooks/useWindowSize";
import {gsap} from "gsap";

const HomeSectionFirst = ({backgroundColor}) => {

  const [stepOnePosition, setStepOnePosition] = useState({top:0, left :0})
  const [stepTwoPosition, setStepTwoPosition] = useState({top:0, left :0})
  const [stepThreePosition, setStepThreePosition] = useState({top:0, left :0})
  const [stepFourPosition, setStepFourPosition] = useState({top:0, left :0})

  const H2=useRef(null)

  const {ref, inView, entry} = useInView({
    rootMargin : "-300px 0px 0px 0px",
    threshold : 0,
    triggerOnce : true
  })

  const losangeOne = useRef(null)
  const losangeTwo = useRef(null)
  const losangeThree = useRef(null)
  const losangeFour = useRef(null)

  const size = useWindowSize()


  useEffect(() => {
    setStepOnePosition({top : losangeOne.current.offsetTop, left : losangeOne.current.getBoundingClientRect().left})
  },[stepOnePosition.top, stepOnePosition.left, size.width])

  useEffect(() => {
    setStepTwoPosition({top : losangeTwo.current.offsetTop, left : losangeTwo.current.getBoundingClientRect().left})
  },[stepTwoPosition.top, stepTwoPosition.left, size.width])

  useEffect(() => {
    setStepThreePosition({top : losangeThree.current.offsetTop, left : losangeThree.current.getBoundingClientRect().left})
  },[stepThreePosition.top, stepThreePosition.left, size.width])

  useEffect(() => {
    setStepFourPosition({top : losangeFour.current.offsetTop, left : losangeFour.current.getBoundingClientRect().left})
  },[stepFourPosition.top, stepFourPosition.left, size.width])

  useEffect(()=>{
    if(inView){
      gsap.to(".h3First", {
        rotationX:0,
        duration : 0.5,
        delay : 0.8
      })
      gsap.to(".texte-1", {
        x:0,
        autoAlpha: 1,
        duration : 1.5,
        delay : 0.9,
        ease : "Power4.easeOut"
      })
      gsap.to(".h3Second", {
        rotationX:0,
        duration : 0.5,
        delay : 3
      })
      gsap.to(".texte-2", {
        x:0,
        autoAlpha: 1,
        duration : 1.5,
        delay : 3.1,
        ease : "Power4.easeOut"
      })
      gsap.to(".h3Three", {
        rotationX:0,
        duration : 0.5,
        delay : 4.8
      })
      gsap.to(".texte-3", {
        x:0,
        autoAlpha: 1,
        duration : 1.5,
        delay : 4.9,
        ease : "Power4.easeOut"
      })
      gsap.to(".h3Four", {
        rotationX:0,
        duration : 0.5,
        delay : 6.6
      })
      gsap.to(".texte-4", {
        x:0,
        autoAlpha: 1,
        duration : 1.5,
        delay : 6.7,
        ease : "Power4.easeOut"
      })
    } 
  })


  return (
    <SectionWrap ref={ref} data-scroll-class='trigger' style={{backgroundColor}}>
      <h2 className="H2" data-scroll data-scroll-class='in-view'>Faire appel à une psychomotricienne, comment ça se passe ?</h2>
      <h3 className="h3First" style={{position:'absolute', width:'300px', top : `${stepOnePosition.top-20}px`, left : `${stepOnePosition.left-300}px`}}>
        Le premier contact téléphonique
      </h3>
      <div id='losange-container-1' ref={losangeOne}> 
        <div className="losange-blanc">
          <div className={`step ${inView? "step-in-view-1" : ""}`}>1</div>
        </div>
        <div className={`losange-violet-1 ${inView ? "losange-in-view-1" : ""}`}/>
        <div className={`losange-violet-2 ${inView ? "losange-in-view-2" : ""}`}/>
        <div className={`losange-violet-3 ${inView ? "losange-in-view-3" : ""}`}/>
        <div className={`losange-violet-4 ${inView ? "losange-in-view-4" : ""}`} />
      </div> 
      <div className="text-step texte-1" style={{top : `${stepOnePosition.top - 15}px`, left : `${stepOnePosition.left+190}px`}}>
        <b>Durant ce 1er contact téléphonique,</b> vous me préciserez vos demandes (qui est le patient concerné, si un(e) enseignant(e) vous a orienté vers une consultation psychomoteur, le trouble concerné, etc.). Nous pourrons dès lors fixer un 1er rendez-vous. 
      </div>
      <h3 className="h3Second" style={{position:'absolute', width:'300px', top : `${stepTwoPosition.top-20}px`, left : `${stepTwoPosition.left-300}px`}}>
        Le premier entretien au cabinet de psychomotricité
      </h3>
      <div className="line-container">
        <div className={`line ${inView ? 'line-in-view' : ""}`} /> 
      </div>
      <div id='losange-container-2' ref={losangeTwo}> 
        <div className="losange-blanc">
          <div className={`step ${inView? "step-in-view-2" : ""}`}>2</div>
        </div>
        <div className={`losange-violet-1 ${inView ? "losange-in-view-1-2" : ""}`} />
        <div className={`losange-violet-2 ${inView ? "losange-in-view-2-2" : ""}`} />
        <div className={`losange-violet-3 ${inView ? "losange-in-view-3-2" : ""}`} />
        <div className={`losange-violet-4 ${inView ? "losange-in-view-4-2" : ""}`}/>
      </div>
      <div className="text-step texte-2" style={{top : `${stepTwoPosition.top-15}px`, left : `${stepTwoPosition.left+190}px`}}>
        <b>Un entretien préliminaire,</b> à l’aide de questionnaires si besoin, permettra de retracer l’histoire de vie de la personne et de mieux comprendre son fonction&shy;nement dans son environnement. Il permettra aussi, le cas échéant, de choisir les tests pertinents qui seront utilisés pour le <b>bilan psychomoteur</b>.
      </div>
      <h3 className="h3Three" style={{position:'absolute', width:'300px', top : `${stepThreePosition.top-20}px`, left : `${stepThreePosition.left-300}px`}}>
        Le bilan psychomoteur
      </h3>
      <div className="line-container">
        <div className={`line ${inView ? 'line-in-view-2' : ""}`} /> 
      </div> 
      <div id='losange-container-3' ref={losangeThree}> 
        <div className="losange-blanc">
          <div className={`step ${inView? "step-in-view-3" : ""}`}>3</div>
        </div>
        <div className={`losange-violet-1 ${inView ? 'losange-in-view-1-3':""}`}/>
        <div className={`losange-violet-2 ${inView ? 'losange-in-view-2-3':""}`}/>
        <div className={`losange-violet-3 ${inView ? 'losange-in-view-3-3':""}`}/>
        <div className={`losange-violet-4 ${inView ? 'losange-in-view-4-3':""}`}/>
      </div>
      <div className="text-step texte-3" style={{top : `${stepThreePosition.top-15}px`, left : `${stepThreePosition.left+190}px`}}>
        <b>Le bilan psychomoteur</b> se fait <b><u>sur prescription médicale</u></b>. Il consiste en une série de tests standardisés couplés à une observation clinique qui permettront d’orienter le diagnostic psychomoteur, d’évaluer la relation à l’autre, les fonctions psychomotrices performantes et celles perturbées.
      </div>

      <h3 className="h3Four" style={{position:'absolute', width:'300px', top : `${stepFourPosition.top-20}px`, left : `${stepFourPosition.left-300}px`}}>
        Restitution du bilan, suivi et rééducation
      </h3>
      <div className="line-container">
        <div className={`line ${inView ? 'line-in-view-3' : ""}`} /> 
      </div> 
      <div id='losange-container-4' ref={losangeFour}> 
        <div className="losange-blanc">
          <div className={`step ${inView? "step-in-view-4" : ""}`}>4</div>
        </div>
        <div className={`losange-violet-1 ${inView ? 'losange-in-view-1-4':""}`}/>
        <div className={`losange-violet-2 ${inView ? 'losange-in-view-2-4':""}`}/>
        <div className={`losange-violet-3 ${inView ? 'losange-in-view-3-4':""}`}/>
        <div className={`losange-violet-4 ${inView ? 'losange-in-view-4-4':""}`}/>
      </div>
      <div className="text-step texte-4" style={{top : `${stepFourPosition.top-15}px`, left : `${stepFourPosition.left+190}px`}}>
        <b>La durée d'un suivi ou d'une rééducation peut fortement varier d'une personne à l'autre</b> et dépendra du type de trouble à soigner, de l'investissement du patient ainsi que de la régularité dans les séances du suivi et de rééducation. Les objectifs de ce suivi dépendront quant à eux des conclusions du bilan psychomoteur.
      </div>

    </SectionWrap>
  );
}

const SectionWrap = styled.section`

  margin :0px auto;
  height : 150%;
  width : 100%;
  position : relative;
  padding :20px 10px 40vh;
  background-color : white;
  transition: background-color 0.5s ease-out;

  &::before {
    height : 10vh;
    width: 150%;
    left : -80px;
    top : -9vh;
    content : '';
    position : absolute;
    background-color : white;
    box-shadow : 0px -20px 80px 5px rgba(255,255, 255);
    z-index: 2;
    filter : blur(2px);  
  }

  h3{
    font-size : 1.75em;
    transform : rotateX(90deg);
  }

  h2{
    text-align: center;
    font-size : clamp(1.8em, 4vw, 3.8em);
    letter-spacing: 0.2px;
    //font-family: 'Marck Script', cursive;
    font-family: 'Oxygen', serif;
    margin-top : 0px;
    margin-bottom : 150px;
    font-weight : bold;
    opacity : 0;
    transform : translateY(100%);
    transition : transform 2s ease-out, opacity 0.5s ease-out ;
    color : #745869;
    text-shadow : 0px 3px 5px #cccccc;
  }
  .in-view{
    transform : translateY(0%);
    opacity : 1; 
  }
  h3{
    color : #28536b;
    font-family: 'Oswald', sans-serif;
  }
  .text-step{ 
    position:absolute;
    width:375px; 
    font-size : 1.1em;
    font-family: 'Oswald', sans-serif;
    border-top : 3px solid #28536b ;
    border-right : 3px solid #28536b ;
    border-bottom :3px solid #28536b ;
    border-left: 10px solid #28536b ;
    padding : 10px;
    opacity : 0;
    transform : translateX(50%);
    color : #28536b;

    a{
      color : blue;

      &:hover{
        color : rgba(180, 100, 200);
      }
    }
  }
  
  /* .text-step.in-view-text{ 
    opacity : 1; 
    transform:translateX(0%);
    transition-property : transform, opacity;
  } */

  .line-container{
    width : 10px;
    height : 25vh;
    margin : 0 auto;
    border-radius :5px;
    overflow: hidden;
    z-index :5;

    .line{
      width : 100%;
      height : 100%;
      background-color : #806073;
      transform : translateY(-100%);
      border-radius :5px;
      opacity : 0;
      transition : transform 1s ease-in-out, opacity 0.5s ease-in;
      
    }
    .line-in-view{
      transform : translateY(0%);
      opacity : 1;
      transition-delay : 1.2s, 0.2s;
      transition-property : transform, opacity;
    }
    .line-in-view-2{
      transform : translateY(0%);
      opacity : 1;
      transition-delay : 3s, 0.2s;
      transition-property : transform, opacity;
    }
    .line-in-view-3{
      transform : translateY(0%);
      opacity : 1;
      transition-delay : 4.7s, 0.2s;
      transition-property : transform, opacity;
    }
  }
  .step{
    color:#745869;
    text-align :center;
    font-size : 2.5em;
    font-weight : bold;
    font-family: 'Oswald', sans-serif;
    height:80px;
    width:80px;
    transform:rotateZ(-45deg);
    padding-top :10px;
    opacity : 0;
    transition : 0.5s ease-in-out;
  }
  .step.step-in-view-1{
    opacity : 1;
    transition-delay : 1.4s;
    transition-property : opacity;
  }
  .step.step-in-view-2{
    opacity : 1;
    transition-delay : 2.9s;
    transition-property : opacity;
  }
  .step.step-in-view-3{
    opacity : 1;
    transition-delay : 4.7s;
    transition-property : opacity;
  }
  .step.step-in-view-4{
    opacity : 1;
    transition-delay : 6.2s;
    transition-property : opacity;
  }

  #losange-container-1, #losange-container-2, #losange-container-3, #losange-container-4{
    width : 100px;
    height : 100px;
    overflow : hidden;
    margin : 12px auto 13px;
    background-color : white;
    border-radius :5px;
    transform : rotate(45deg);
    position: relative;

    .losange-violet-1, .losange-violet-3{
      position : absolute;
      width : 10px;
      height : 100px;
      border-radius :5px;
      background-color : #806073;
    }
    .losange-violet-1{
      top : 0;
      left : 0;
      transform : translateY(-100%);
      transition : transform 0.4s ease-out;
    }
    .losange-violet-3{
      border-radius :5px;
      bottom : 0;
      right : 0;
      transform : translateY(100%);
      transition : transform 0.4s ease-out;
    }
    .losange-violet-2, .losange-violet-4{
      border-radius :5px;
      position : absolute;
      width : 100px;
      height : 10px;
      background-color : #806073;
      
    }
    .losange-violet-2{
      bottom : 0;
      left : 0;
      transform : translateX(-100%);
      transition : transform 0.4s ease-out;
    }
    .losange-violet-4{
      transform : translateX(100%);
      transition : transform 0.4s ease-out;
    }
    
    .losange-violet-1.losange-in-view-1{
      transform : translateY(0%);
      transition : transform 0.4s ease-out;
    }
    .losange-violet-2.losange-in-view-2{
      transform : translateX(0%);
      transition-delay : 0.3s;
      transition-property : transform;
      
    }
    .losange-violet-3.losange-in-view-3{
      transform : translateY(0%);
      transition-delay : 0.6s;
      transition-property : transform;
    }
    .losange-violet-4.losange-in-view-4{
      transform : translateX(0%);
      transition-delay : 0.9s;
      transition-property : transform;
    }

//Deuxième vague de losange
    .losange-violet-1.losange-in-view-1-2 {
      transform : translateY(0%);
      transition-delay : 2s;
      transition-property : transform;
    } 
    .losange-violet-2.losange-in-view-2-2 {
      transform : translateX(0%);
      transition-delay : 2.3s;
      transition-property : transform;
    } 
    .losange-violet-3.losange-in-view-3-2 {
      transform : translateX(0%);
      transition-delay : 2.6s;
      transition-property : transform;
    } 
    .losange-violet-4.losange-in-view-4-2 {
      transform : translateY(0%);
      transition-delay : 2.9s;
      transition-property : transform;
    }
//Troisième vague de losange
    .losange-violet-1.losange-in-view-1-3 {
      transform : translateY(0%);
      transition-delay : 3.8s;
      transition-property : transform;
    } 
    .losange-violet-2.losange-in-view-2-3 {
      transform : translateX(0%);
      transition-delay : 4.1s;
      transition-property : transform;
    } 
    .losange-violet-3.losange-in-view-3-3 {
      transform : translateX(0%);
      transition-delay : 4.4s;
      transition-property : transform;
    } 
    .losange-violet-4.losange-in-view-4-3 {
      transform : translateY(0%);
      transition-delay : 4.7s;
      transition-property : transform;
    }
//Quatrième vague de losange
  .losange-violet-1.losange-in-view-1-4 {
      transform : translateY(0%);
      transition-delay : 5.4s;
      transition-property : transform;
    } 
    .losange-violet-2.losange-in-view-2-4 {
      transform : translateX(0%);
      transition-delay : 5.7s;
      transition-property : transform;
    } 
    .losange-violet-3.losange-in-view-3-4 {
      transform : translateX(0%);
      transition-delay : 6s;
      transition-property : transform;
    } 
    .losange-violet-4.losange-in-view-4-4 {
      transform : translateY(0%);
      transition-delay : 6.3s;
      transition-property : transform;
    }

    .losange-blanc{
      position : absolute;
      width : 80px;
      height : 80px;
      background-color : white;
      border-radius :5px;
      margin : 10px;
      z-index: 2;
    }
  }

  @media screen and (max-width:1010px){
    h3{
      display: none;
    }
    #losange-container-1, #losange-container-2, #losange-container-3, #losange-container-4{
      margin-left : 150px;
    }
    .line-container{
      margin-left: 195px ;
    }
  }
  @media screen and (max-width:720px){
    #losange-container-1, #losange-container-2, #losange-container-3, #losange-container-4{
      margin-left : 20px;
    }
    .line-container{
      margin-left: 65px ;
    }
    .text-step{
      margin-left: -45px;
      height: 210px;
      margin-top: -20px;
    }
  }
  @media screen and (max-width:530px){
    #losange-container-1, #losange-container-2, #losange-container-3, #losange-container-4{
      margin-left : 0px;
    }
    .line-container{
      margin-left: 45px ;
    }
    .text-step{
      margin-left: -45px;
      height: 265px;
      margin-top: -30px;
      width: 62vw ;
      font-size :0.97rem;
      padding: 5px;
    }
  }

`

export default HomeSectionFirst;