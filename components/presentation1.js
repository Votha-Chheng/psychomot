import {gsap} from 'gsap'
import { useEffect, useRef, useState } from 'react'
import {InView} from 'react-intersection-observer'
import styled from 'styled-components'
import useWindowSize from '../hooks/useWindowSize'
import Trait from "./trait"

const presentation1 = () => {
  const [underlineTitle1, setUnderlineTitle1] = useState(0)
  const [sectionInView, setSectionInView] = useState(false)

  const size = useWindowSize()

  const quiSuisJe = useRef(null)

  useEffect(() => {
    setUnderlineTitle1(quiSuisJe.current.offsetWidth)
  },[size, underlineTitle1])

  useEffect(()=>{
    if(sectionInView){
      gsap.to(".title-h2-qui-suis-je", {
        y : 0,
        autoAlpha : 1,
        duration : 1
      })
      gsap.to(".conteneur-trait-1", {
        x : 0,
        duration : 1.2,
        delay:0.5
      })
      gsap.to(".side-id-container", {
        maxWidth : 175,
        duration : 0.5,
        delay:1
      })
      gsap.to(".side-id-container", {
        maxHeight : 150,
        duration : 0.5,
        delay:1.5
      })
      gsap.to(".texte-qui-suis-je", {
        autoAlpha:1,
        duration : 0.9,
        y:0,
        delay:1.9,
        ease:"Power2.easeOut"
      })
      
    }
  }, [sectionInView])

  return (
    <ArticleWrapper>
      <InView  id="qui-suis-je" threshold="0.1" as='div' onChange={(inView, entry)=>setSectionInView(inView)}>
        <div className="main-container">
          <h2 ref={quiSuisJe} className="title-h2-qui-suis-je">
            Qui suis-je ?
          </h2>
          <div className="conteneur-trait-1">
            <Trait width={`${underlineTitle1}px`} bgColor="#9f7f92" height="8px"/>
          </div>
          <div className='container-texte-qui-suis-je' >
            <div className="side-id-container" alt="Estelle Bétry, psychomotricienne">
              <img src="/images/IMG_20210422_0017.jpg" width="175px" height="150" className="side-id"/>   
            </div>
            <div className="texte-qui-suis-je">
              De nature curieuse, j’ai&shy;me obser&shy;ver, com&shy;pren&shy;dre, en&shy;quêter et ac&shy;quérir de nou&shy;velles con&shy;nais&shy;san&shy;ces. Je m’in&shy;té&shy;res&shy;se parti&shy;culière&shy;ment au dé&shy;velop&shy;pement per&shy;son&shy;nel, au champ des é&shy;mo&shy;tions, à la com&shy;munication ver&shy;bale et non verbale ainsi qu’aux mé&shy;thodes d’ap&shy;prentis&shy;sage. Ma pra&shy;tique s’en&shy;richit de tous ces centres d’inté&shy;rêt, pour la mettre au service de votre santé, celle de votre enfant, celle de votre bébé. Selon moi, une prise en soin qui a du sens est celle qui per&shy;met, grâce à une relation de confi&shy;ance, de vous faire compren&shy;dre votre fonc&shy;tion&shy;ne&shy;ment global pour que <b><em>vous puissiez vous épa&shy;nouir</em></b> en retrouvant <b><em>un équilibre entre corps, esprit, émotions et fonctions cognitives</em></b>.
            </div>
          </div>  
        </div>
      </InView>
    </ArticleWrapper>
    
  );
}

const ArticleWrapper = styled.article`
  height: 100%;

  .title-h2-qui-suis-je{
    font-size : clamp(4rem, 10vw, 9rem);
    -webkit-text-stroke : 4px white;
    color : transparent;
    overflow: hidden;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(100%);
    margin : 0;
    letter-spacing: 1.5px;
    text-align: center;
    font-family: 'Oxygen', serif;
  }
  .conteneur-trait-1{
    transform: translateX(-150%);
    margin-top: 0px;
  }
  .container-texte-qui-suis-je{
    margin-top : 100px;
    overflow-y: hidden;
    height: auto;
  }
  .side-id-container{
    max-width: 0px;
    max-height : 0px; 
    overflow: hidden;
    margin : 10px 15px 0px 0px;
    background-color:white;
    float: left;

    img{
      object-fit: cover;
      border:5px solid whitesmoke;
    }
  }
  .texte-qui-suis-je{
    text-align: justify;
    font-size: clamp(1.2em, 2vw, 1.8em) ;
    line-height: 1.8em;
    color: white;
    font-family: "Oswald", "cursive";
    opacity: 0;
    letter-spacing: 1.2px;
    transform: translateY(50%)
  }
  .main-container{
    width: 80%; 
    margin-bottom: 25vh;
    margin-left: 175px;
  }

@media (max-width:1024px){
.main-container{
  margin-bottom: 0px;
  padding-bottom: 250px;
}
}

  //Valable pour toute la section
@media (max-width:1000px){
  .main-container{
    margin: 0px auto;
    padding-bottom: 10px;

  }
}
//Valable pour toute la section
@media (max-width:560px){
  //Ici
  .main-container{
    width: 90%;
    padding-bottom: 0px;
  }
  //Ici
  .title-h2-qui-suis-je{
    font-size: calc(1.8rem + 2.5vw) !important;
    -webkit-text-stroke: unset;
    color: whitesmoke;
  }
  .side-id-container{
    float: none;
    margin: 0px auto 20px;
  }
  
}

`

export default presentation1;