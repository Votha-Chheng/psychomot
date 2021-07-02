import { useEffect, useRef, useState } from "react";
import {InView } from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import RotationCard from "./rotationcard";
import Trait from "./trait";
import { useRouter } from "next/router";
import {gsap} from "gsap"



const HomePresentationSection = ({sectionInView}) => {


  //const [sectionInView, setSectionInView] = useState(false)
  const [firstSubSectionInView, setFirstSubSectionInView] = useState(false)
  const [introTextHeight, setIntroTextHeight] = useState(0)
  const [baliseEnd, setBaliseEnd] = useState(false)
  const [buttonInView, setButtonInview] = useState(false)
  const [firstTextInView, setFirstTextInView] = useState(false)
  const [thirdTextInView, setThirdTextInView] = useState(false)
  const [underlineTitle1, setUnderlineTitle1] = useState(0)
  const [underlineTitle2, setUnderlineTitle2] = useState(0)
  
  const paragraphe1 = useRef(null)

  const quiSuisJe = useRef(null)
  const specificity = useRef(null)

  const history = useRouter()

  const size = useWindowSize()


  useEffect(() => {
    setIntroTextHeight(paragraphe1.current.offsetHeight)
  }, [size, introTextHeight])

  useEffect(() => {
    setUnderlineTitle1(quiSuisJe.current.offsetWidth)
  },[size, underlineTitle1, firstTextInView])

  useEffect(() => {
    setUnderlineTitle2(specificity.current.offsetWidth)
  },[size, underlineTitle2, firstSubSectionInView])

  console.log(underlineTitle1)

  useEffect(() => {
    if(buttonInView){
      gsap.to(".parcours-container .button", {
        delay:0.9,
        duration: 0.6,
        opacity: 1,
        y: 0,
      })
    }
    
  }, [buttonInView])

  useEffect(() => {
    if(sectionInView){
      gsap.to(".title-h2-side", {
        delay : 0.2,
        duration : 1.5,
        y : 0,
      })

      gsap.to(".title-h2", {
        delay : 0.5,
        duration : 1,
        opacity: 1,
        y:0
      }) 

      gsap.to(".conteneur-trait-1", {
        x : 0,
        duration : 1,
        delay : 0.9
      })

      gsap.to(".texte-1", {
        delay : 1,
        opacity : 1,
        y : 0,
        duration : 1.5,
      }) 

      gsap.to(".side-id-container", {
        duration : 1,
        maxWidth : 175,
        ease : "Power4.easeOut"
      })

      gsap.to(".side-id-container", {
        delay : 1.2,
        duration : 2,
        maxHeight : 150,
        ease : "Power4.easeOut"
      })
      
    }
  }, [sectionInView])

  useEffect(() => {
    //const tl = new TimelineMax()
    if(firstSubSectionInView){
      gsap.to(".title-parcours", {
        y : -100,
        duration : 1.3,
        autoAlpha : 1,
        delay : 0.5,
        ease : "Power4.easeOut"
      })

      gsap.to(".conteneur-trait-2", {
        x : 0,
        duration : 1.4,
        delay : 0.6
      })
        
        
      gsap.from(".parcours-texte", {
        opacity : 0,
        y : 100,
        delay : 0.7,
        duration : 1.5
      })

      gsap.from(".container-barkley", {
        opacity : 0,
        delay : 1.4,
        duration : 1,
        x: 100
      })

      
    }
  }, [firstSubSectionInView])


  const listSideTitle = ["Quelques mots sur moi...", "Mes spécificités", "Expériences pro et formations"]

  return (
    <SectionWrapper style={{backgroundColor:`${baliseEnd ? "#9f7f92" : sectionInView ? "#28536b" : "white"}`}}>
      <div id='box' style={{height:"auto", paddingBottom:"25vh"}}>
        <div data-scroll data-scroll-sticky data-scroll-target="#box" style={{position:"absolute"}}>
          <h2 className="title-h2-side" style={{display : `${size.width>960 ? "block" : "none"}`, opacity:`${baliseEnd ? "0" : firstTextInView ? "1":firstSubSectionInView ? "0" : "0"}`}}>{listSideTitle[0]}</h2>
          <h2 className="title-h2-side" style={{display : `${size.width>960 ? "block" : "none"}`, opacity:`${baliseEnd ? "0" : thirdTextInView ? "0": (firstTextInView && firstSubSectionInView)? "0" : firstSubSectionInView ? "1":  "0"}`}}>{listSideTitle[1]}</h2>
          <h2 className="title-h2-side" style={{display : `${size.width>960 ? "block" : "none"}`, opacity:`${baliseEnd ? "0" : thirdTextInView ? "1":"0"}`}}>{listSideTitle[2]}</h2>
        </div>
        <InView  id="qui-suis-je" as='div'style={{height:`${introTextHeight+250}px`}} onChange={(inView, entry)=>setFirstTextInView(inView)}>
          <div className="main-container">
            <h2 className="title-h2">
              <span ref={quiSuisJe}>Qui suis-je ?</span>
              <div className="conteneur-trait-1">
                <Trait width={`${underlineTitle1}px`} bgColor="#9f7f92" height="8px"/>
              </div>
            </h2>
            <div id='container-relative' style={{height:`${introTextHeight+250}px`}} >
              <div className="side-id-container" style={{overflow:"hidden", float:`${size.width>490 ? "left" : "none"}`, backgroundColor:"white"}}>
                <img src="/images/IMG_20210422_0017.jpg" width="175px" height="150" style={{objectFit:"cover"}} className="side-id"/>   
              </div>
              <div ref={paragraphe1} className="texte-1 no-indent">
                De nature curieuse, j’ai&shy;me obser&shy;ver, com&shy;pren&shy;dre, en&shy;quêter et ac&shy;quérir de nou&shy;velles con&shy;nais&shy;san&shy;ces. Je m’in&shy;té&shy;res&shy;se parti&shy;culière&shy;ment au dé&shy;velop&shy;pement per&shy;son&shy;nel, au champ des é&shy;mo&shy;tions, à la com&shy;munication ver&shy;bale et non verbale ainsi qu’aux mé&shy;thodes d’ap&shy;prentis&shy;sage. Ma pra&shy;tique s’en&shy;richit de tous ces centres d’inté&shy;rêt, pour la mettre au service de votre santé, celle de votre enfant, celle de votre bébé. Selon moi, une prise en soin qui a du sens est celle qui per&shy;met, grâce à une relation de confi&shy;ance, de vous faire comprendre votre fonc&shy;tion&shy;ne&shy;ment global pour que <b><em>vous puissiez vous épanouir</em></b> en retrouvant <b><em>un équilibre entre corps, esprit, émotions et fonctions cognitives</em></b>.
              </div>
            </div>  
          </div>
        </InView>
        
        <h3 className="bandeau" style={{marginBottom:"0", marginTop:"50vh"}} data-scroll data-scroll-direction="horizontal" data-scroll-speed="15">
          épanouissement - relations aux autres - connaissance de soi - équilibre - gestion des émotions - relaxation - méditation - potentialité - déleveloppement personnel
          épanouissement - relations aux autres - connaissance de soi - équilibre - gestion des émotions - relaxation - méditation - potentialité - déleveloppement personnel
        </h3>
        <h3 className="bandeau" style={{marginTop:"0", marginBottom:"350px"}} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-15">
          relations aux autres - équilibre - potentialité - méditation - relaxation - épanouissement - gestion des émotions - déleveloppement personnel - connaissance de soi
          relations aux autres - équilibre - potentialité - méditation - relaxation - épanouissement - gestion des émotions - déleveloppement personnel - connaissance de soi
        </h3>
        <InView as="div" rootMargin="-200px 0px 200px 0px" onChange={(inView, entry)=>setFirstSubSectionInView(inView)} triggerOnce="true">
          <div className="parcours-container">
            <h2 className="title-parcours">
              <span ref={specificity}>Mes spécificités</span>
              <div className="conteneur-trait-2">
                <Trait width={`${underlineTitle2}px`} bgColor="#9f7f92" height="8px"/>
              </div>
            </h2>
            <div className="container-parcours-texte">
              <div className="container-barkley">
                <img src="/images/barkley.png" />
              </div>
              <div className='parcours-texte'>
                Psychomotricienne depuis plus de 10 ans, mon ex&shy;périence et mes re&shy;cher&shy;ches me pous&shy;sent de plus en plus à m’intéres&shy;ser et à me spécialiser dans le <b><em>TDA/H</em></b>, les <b><em>par&shy;ticu&shy;lari&shy;tés émo&shy;tion&shy;nelles du HPI</em></b> et les <b><em>troubles DYS</em></b>. J’ai eu dif&shy;féren&shy;tes expé&shy;riences qui ont étoffé ma pra&shy;tique avant d’ou&shy;vrir mon cabinet.
              </div>
              <div className='parcours-texte'>
                Dans la continuité de ma spé&shy;ciali&shy;sa&shy;tion dans le TDA/H, je co-anime en plus avec ma con&shy;soeur neuro-psy&shy;cho&shy;logue des ateliers consa&shy;crés à la <b><em>guidance parentale</em></b> réser&shy;vés aux pa&shy;rents d’enfants souf&shy;frant de trouble de l’at&shy;tention, d’hyper&shy;activité (TDA/H) et/ou de trou&shy;bles du com&shy;porte&shy;ment. Ces ateliers s'ar&shy;ticu&shy;lent autour du <em><a href="https://www.tdah-france.fr/Programme-d-entrainement-aux-habiletes-parentales-de-Barkley.html" target="_blank">Programme d’en&shy;traîne&shy;ment aux habi&shy;letés paren&shy;tales de Barkley</a></em>.
              </div>
            </div>
            <InView as='div' className="button" onChange={(inView, entry)=>setButtonInview(inView)} triggerOnce="true" onClick={()=>history.push("/ateliers")}>
              <div className="button-text">
                En savoir plus sur les stages d'entraînement aux habilités parentales (programme de Barkley)
              </div>
              <div className="button-icon">
                <i className="fas fa-arrow-circle-right fa-2x"/>
              </div>
            </InView>
          </div>
        </InView>

        <InView as="div" className="rotation-card-container" threshold="0.15" onChange={(inView, entry)=>setThirdTextInView(inView)}>
          <div style={{transform:"translateY(-10%)"}}>
            <RotationCard dataCard titleSideWidth />
          </div>
          
        </InView>

      </div>
      <InView as='div' threshold="1" onChange={(inView, entry)=>setBaliseEnd(inView)}>
        <div className='balise-fin' style={{position : "absolute", bottom:"-15px", width :"100%", height:"5px", backgroundColor:'transparent'}} />  
      </InView>     
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  height: 100%;
  transition : background-color 0.5s ease-out;
  transform-style: preserve-3d;
  padding : 5px 20px 120px;
  position: relative;
  margin : 0 auto;

  .conteneur-trait-1, .conteneur-trait-2{
    transform: translateX(-100%);
    margin-top: 10px;
  }
  .stress{
    color: #f9f8f8;
    font-weight: bolder;
    font-style: italic;
  }

  a{
    color: #d4b0c4;
    text-decoration: underline;
  }
  a:hover{
    filter: brightness(120%);
  }

  h2{   
    letter-spacing: 1.5px;
    text-align: center;
    font-family: 'Oxygen', serif;
    
  }
  h2.title-parcours-pro{
    text-shadow : 0px 3px 2px black;
  }

  h2.title-h2 {
    font-size : clamp(4em, 12vw, 11em);
    -webkit-text-stroke : 4px white;
    color : transparent;
    overflow: hidden;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(100%)
  }
  h2.title-h2-side{
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
  }
  .main-container{
    width: 85%; 
    margin-bottom: 25vh;
    margin-left: 150px;
  }

  .bandeau{
    margin-left:-60%; 
    text-transform:uppercase;
    -webkit-text-stroke : 1px white;
    color: transparent;
    font-size : clamp(1.8em, 4vw, 5em);
    width:900%;
    letter-spacing: 6px;
    //font-family: 'Oxygen', serif;
    letter-spacing: 1.5px;
    //font-size:clamp(2rem, 2vw, 2.8rem);
    text-shadow: none;
  }

  #container-relative{  
    margin-top : 100px;
    overflow-y: hidden;
    height: auto;
    
    .texte-1.no-indent{
      text-indent: 0px;
      opacity: 1;
      text-align: justify;
      font-size: clamp(1.2em, 2vw, 1.8em) ;
      line-height: 1.8em;
      color: white;
      font-family: "Oswald", "cursive";
      opacity: 0;
      letter-spacing: 1.2px;
      transform: translateY(100px);

    }

    .side-id-container{
      max-width: 0px;
      max-height : 0px; 
      overflow: hidden;
      margin : 15px 15px 0px 0px;
    }
    .side-id{ 
      border:5px solid whitesmoke;
    }
  }

  .parcours-container{
    margin-top: 40vh;
    margin-bottom: 80vh;
    width: 85%; 
    height: 100vh;
    margin-left: 150px;

    .button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      border: 2px solid whitesmoke;
      height:auto;
      padding: 10px;
      background-color : #806073;
      color : white;
      margin : 120px auto;
      border-radius : 10px;
      cursor :pointer;
      opacity: 0;
      transition : all 0.4s ease-out;
      transform : translateY(50%);
      
      &:hover{
        transform : scale(1.2);
        filter: brightness(125%);
      }
      .button-text{
        font-weight: 600;
        font-family: "Oxygen", sans-serif;
        line-height: 1.5em;
        text-align: center;
        font-size: 1.1em;
      }
      .button-icon{
        margin-top: 0px;
        margin-left: 20px;
      }
    }
    
    .container-parcours-texte{
      margin-bottom: 100px;

      .parcours-texte{
        height:auto;
        letter-spacing: 1.2px;
        text-indent: 30px;
        text-align: justify;
        font-size: clamp(0.8em, 2vw, 1.7em) ;
        line-height: 1.8em;
        color: white;
        font-family: "Oswald", "cursive";
        overflow: hidden;
        padding-right: 20px;
      }
      
      .container-barkley{
        //margin-top: 10px;
        width: 300px;
        height: 380px;
        overflow: hidden;
        text-align: center;
        border: 5px solid whitesmoke;
        float: right;

        img{
          object-fit: cover;
          width: 290px;
          height: 380px;
        }
      }
    }

    h2.title-parcours{
      transform: translate(0, 150%);
      opacity:0;
      font-family: 'Oxygen', serif;
      text-transform: uppercase;
      -webkit-text-stroke : 4px white;
      color : transparent;
      font-size :clamp(4em, 9vw, 8em);
      text-shadow : none;
    }

  }

  .rotation-card-container{
    margin-left: 150px;
    margin-top: 150px;
  }

@media screen and (max-width:1060px){
  h2.title-h2, h2.title-parcours, h2.title-parcours-pro{
    color: white !important;
    -webkit-text-stroke: unset !important;
  }
}

@media screen and (max-width: 960px){
  .bandeau{
    width: 5000%;
  }
  .main-container{
    width: 85%; 
    margin-bottom: 25vh;
    margin-left: 15px;
  }
  h2.title-h2{
    font-size: calc(2rem + 2.2vw) !important;
  }
  h2.title-parcours{
    font-size: calc(2.1rem + 2.2vw) !important;
  }
  .parcours-container{
    margin: 0 auto 800px;
  }
  .parcours-texte{
    font-size: 1.5rem !important;
  }
  .container-barkley{
    margin-top: 20px;
  }
  .rotation-card-container{
    margin-left: 0px;

  }
}
@media screen and (max-width: 750px){
  .container-barkley{
    float : none !important;
    margin:0px auto;
  }
  .button{
    margin-top: -50px !important;
  }
  .parcours-texte{
    font-size: calc(1rem + 0.5vw) !important;
    width: 110% !important;
  }
  .button{
    min-width: 100%;
  }
}




//Height
@media screen and (max-height:700px){
  div.parcours-container{
    height: 840px;
  }
}
` 

export default HomePresentationSection;