import {gsap} from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import Trait from "./trait";

const presentation2 = () => {

  const [sectionInView,setSectionInView] = useState(false);
  const [traitWidth, setTraitWidth] = useState(0);

  const trait2 = useRef(null)

  const size = useWindowSize()
  const history = useRouter()

  useEffect(() => {
    setTraitWidth(trait2.current.offsetWidth)
  },[size, traitWidth])

  useEffect(()=>{
    if(sectionInView){
      gsap.to(".title-parcours", {
        y : 0,
        autoAlpha : 1,
        duration : 1
      })
      gsap.to(".conteneur-trait-2", {
        x : 0,
        duration : 1.2
      })
      gsap.to(".container-full-text", {
        autoAlpha:1,
        duration : 0.9,
        y:0,
        delay:1.2,
        ease:"Power2.easeOut"
      })
      gsap.to(".container-barkley", {
        autoAlpha : 1,
        x:0,
        duration : 0.5,
        delay:1.5
      })
      gsap.to(".button-barkley", {
        autoAlpha : 1,
        y:0,
        duration : 0.9,
        delay:1.7
      })
    
    }
  }, [sectionInView])


  return (
    <ArticleWrap>
      <InView className="specificity-container" threshold='0.2' as="div" onChange={(inView, entry)=>setSectionInView(inView)} triggerOnce="true">
        <h2 ref={trait2} className="title-parcours">
          Mes spécificités
        </h2>
        <div className="conteneur-trait-2">
          <Trait width={`${traitWidth}px`} bgColor="#9f7f92" height="8px"/>
        </div>
        <div className="container-parcours-texte">
          <div className="container-barkley">
            <img src="/images/barkley.png" alt="flyer sur les ateliers de d'entraînement aux habiltés parentales"/>
          </div>
          <div className="container-full-text">
            <div className='parcours-texte'>
              Psychomotricienne depuis plus de 10 ans, mon ex&shy;périence et mes re&shy;cher&shy;ches me pous&shy;sent de plus en plus à m’intéres&shy;ser et à me spécialiser dans le <b><em>TDA/H</em></b>, les <b><em>par&shy;ticu&shy;lari&shy;tés émo&shy;tion&shy;nelles du HPI</em></b> et les <b><em>troubles DYS</em></b>. J’ai eu dif&shy;féren&shy;tes expé&shy;riences qui ont étoffé ma pra&shy;tique avant d’ou&shy;vrir mon cabinet.
            </div>
            <div className='parcours-texte'>
              Dans la continuité de ma spé&shy;ciali&shy;sa&shy;tion dans le TDA/H, je co-anime en plus avec ma con&shy;soeur neuro-psy&shy;cho&shy;logue des ateliers consa&shy;crés à la <b><em>guidance paren&shy;tale</em></b> réser&shy;vés aux pa&shy;rents d’en&shy;fants souf&shy;frant de trouble de l’at&shy;tention, d’hyper&shy;activité (TDA/H) et/ou de trou&shy;bles du com&shy;porte&shy;ment. Ces ateliers s'ar&shy;ticu&shy;lent autour du <em><a href="https://www.tdah-france.fr/Programme-d-entrainement-aux-habiletes-parentales-de-Barkley.html" target="_blank">Programme d’en&shy;traîne&shy;ment aux habi&shy;letés paren&shy;tales de Barkley</a></em>.
            </div>
          </div>
        </div>
        <div className="button-barkley" onClick={()=>history.push("/ateliers")}>
          <div className="button-text">
            En savoir plus sur les ateliers d'entraînement aux habilités parentales (programme de Barkley)
          </div>
          <div className="button-icon">
            <i className="fas fa-arrow-circle-right fa-2x"/>
          </div>
        </div>
      </InView>
    </ArticleWrap>
    
  );
}

const ArticleWrap = styled.article`
  .specificity-container{
    width: 80%; 
    margin: 0px auto;
    margin-bottom: 25vh;
    margin-left: 175px;
  }
  .title-parcours{
    font-size : clamp(4rem, 7vw, 7.5rem);
    -webkit-text-stroke : 4px white;
    color : transparent;
    overflow: hidden;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(100%);
    margin: 0px;
    width: 100%;
    text-align: center;
    margin: 0px auto; 
    letter-spacing: 1.5px;
  }
  .conteneur-trait-2{
    transform: translateX(-100%);
    margin-top: 10px;
  }
  .container-parcours-texte{
    display : flex;
    width: 100%;
    flex-direction: row-reverse;
    margin: 50px auto 0px;
  }

  .container-full-text{
    text-align: justify;
    font-size: clamp(1.2em, 2vw, 1.8em) ;
    line-height: 1.8em;
    color: white;
    font-family: "Oswald", "cursive";
    opacity: 0;
    letter-spacing: 1.2px;
    transform: translateY(50%);

    .parcours-texte{
      text-indent:30px;
    }

    .parcours-texte{
      padding-right : 15px;
    }
  }
  .container-barkley{
    min-width : 350px;
    height: auto;
    overflow: hidden;
    transform: translateX(60%);
    opacity: 0;
    margin-top: 35px;

    img{
      width : 350px;
    }
  }
  .button-barkley{
    cursor : pointer;
    width : 100%;
    margin: 40px auto 0px;
    text-align: center;
    padding: 20px;
    background-color: #9f7f92;
    color: white;
    border-radius: 15px;
    border: 3px solid whitesmoke;
    opacity: 0;
    transform: translateY(50%);

    .button-text{
      line-height: 2.2rem;
      font-size: calc(1rem + 0.8vw);
      font-family :"Oxygen", sans-serif;
    }

    .button-icon{
      font-size:1.2rem;
      margin-top: 20px;
    }
  }
  a{
    color: #d4b0c4;
    text-decoration: underline;
  }
  a:hover{
    filter: brightness(120%);
  }

@media (max-width:1000px){
  .specificity-container{
    margin: 0 auto;
  }
}

@media (max-width:890px){
  .title-parcours{
    font-size: calc(2rem + 2vw);
    -webkit-text-stroke : 2px whitesmoke;
  }
  .container-parcours-texte{
    flex-direction: column-reverse;
    align-items: center;
  } 
  .button-barkley{
    .button-text{
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }
}

@media (max-width:560px){
  .specificity-container{
    width: 90%;
  }
  .title-parcours{
    font-size: calc(1.2rem + 3vw);
    -webkit-text-stroke : unset;
    color: whitesmoke;
  }
}


`

export default presentation2;