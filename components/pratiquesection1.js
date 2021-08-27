import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import Trait from "./trait";
import {InView} from "react-intersection-observer";


const PratiqueSection1 = ({backgroundColor}) => {

  const [titleWidth, setTitleWidth] = useState(0)
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [schemaInView, setSchemaInView] = useState(false)
  
  const size = useWindowSize()

  const trait = useRef(null)
  const sectionTitle = useRef(null)

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)
  },[titleWidth, size])

  useEffect(() => {
    gsap.to(trait.current, {
      x: 0,
      duration: 1.4,
      delay : 0.5
    })

    gsap.to('.section-title h2', {
      autoAlpha: 1,
      duration : 0.7,
      y:0,
      delay : 0.2
    })
    gsap.to('.conteneur-bg-image', {
      opacity: 0.15,
      duration : 0.5,
      delay : 1
    })

    gsap.to('.image-frise', {
      opacity: 0,
      stagger : 0.2,
      duration : 0.1,
      repeat : -1
    })

    gsap.to('.image-frise-2', {
      opacity: 0,
      stagger : 0.6,
      duration : 0.2,
      repeat : -1
    })

  }, [])

  useEffect(()=>{
    if(question1){
      gsap.to('#question-1', {
        opacity: 1,
        x:0,
        duration : 1
      })
      gsap.to('.reponse-1', {
        opacity: 1,
        x:0,
        duration : 1,
        delay : 0.2,
        ease : " Power3.easeOut"
      })
    }
  }, [question1])

  useEffect(()=>{
    if(question2){
      gsap.to('.question-2', {
        opacity: 1,
        x:"50%",
        duration : 1
      })
      gsap.to('.reponse-2', {
        opacity: 1,
        x:0,
        duration : 1,
        delay : 0.2,
        ease : " Power3.easeOut"
      })
    }
  }, [question2])

  useEffect(()=>{
    if(schemaInView){
      gsap.to('.img-container', {
        opacity: 1,
        duration : 0.5,
        delay : 1.2
      })
      gsap.to('small', {
        opacity: 1,
        duration : 0.5,
        x:0,
        delay : 1.2
      })
    }
  }, [schemaInView])

  useEffect(()=>{
    if(question3){
      gsap.to('.question-3', {
        opacity: 1,
        x:"50%",
        duration : 1
      })
      gsap.to('.reponse-3', {
        opacity: 1,
        x:0,
        duration : 1,
        delay : 0.2, 
        ease : " Power3.easeOut"
      })
    }
  }, [question3])

  useEffect(()=>{
    if(question4){
      gsap.to('.question-4', {
        opacity: 1,
        x:"50%",
        duration : 1
      })
      gsap.to('.reponse-4', {
        opacity: 1,
        x:0,
        duration : 1,
        delay : 0.2,
        ease : " Power3.easeOut"
      })
    }
  }, [question4])

  console.log(question3)

  return (
    <Wrapper style={{backgroundColor}}>
      <div className="section-title" ref={sectionTitle}>
        <h2>
          Le bilan psychomoteur
        </h2>  
      </div>
      <div className="trait" ref={trait} style={{margin : "50px 0 0px 0", position:"static"}}>
        <Trait width={titleWidth} bgColor="#326886" height="8px"/>
      </div>
      
      <section>
        <div className="conteneur-bg-image">
          <img src='/images/20210611_111302.jpg' alt="schéma du bilan psychomoteur"/>
        </div>

        <InView className="bilan-psy-schema" threshold='0.5' onChange={(inView)=>setSchemaInView(inView)}>
          <div className="img-container">
            <img src="/images/Bilan-psychomoteur.png" alt="schema du bilan psychomoteur"/>
          </div>
          <small>Schéma tiré du site <a href="https://www.bloghoptoys.fr/" target="_blank">www.bloghoptoys.fr</a>, blog sur l'inclusion.</small>
        </InView>

        <InView className="question-reponse" as="div" threshold="1" onChange={(inView)=>setQuestion1(inView)}>
          <div className="question" id="question-1">
            <div className="conteneur-question">
              C'est quoi ?
            </div> 
          </div>
          <div className="reponse reponse-1">
            <div className="conteneur-reponse">
              <p>
                Un bilan psychomoteur est une série d'entre&shy;tiens réalisée par la psy&shy;chomo&shy;tricienne qui s'ef&shy;fectue avant tout début de soin ou de suivi. <b>Il est à noter que ce bilan ne s'ef&shy;fectue que sur prescrip&shy;tion médi&shy;cale.</b>
              </p>
            </div> 
          </div>
        </InView>
        <InView className="question-reponse" as="div" threshold="0.5" onChange={(inView, entry)=>setQuestion2(inView)}>
          <div className="question question-2">
            <div className="conteneur-question">
              Comment ça se passe ?
            </div>
          </div>
          
          <div className="reponse reponse-2">
            <div className="conteneur-reponse">
              <p>
                Ce bilan débute par un entretien qui permet de retracer <b>l’histoire de vie de la personne et de mieux com&shy;prendre son fonction&shy;nement dans son environ&shy;ne&shy;ment</b>. Dans un second temps, des tests standar&shy;disés cou&shy;plés à une observation clinique  per&shy;met&shy;ttront d’orien&shy;ter le diagnostic psycho&shy;mo&shy;teur, d’ob&shy;server la rela&shy;tion à l’autre, les fonctions psycho&shy;mo&shy;trices pré&shy;servées et cel&shy;les qui sont entra&shy;vées par des dif&shy;ficultés.
              </p>
              <p>
                Enfin, <b>une restitution</b> est faite au patient (et aux parents lorsqu’il s’a&shy;git d’un enfant). Des bilans com&shy;plé&shy;men&shy;taires (or&shy;tho&shy;phonique, orthop&shy;tique, etc.) peu&shy;vent parfois être né&shy;ces&shy;saires pour compléter les ob&shy;ser&shy;vations. <b>Il est à noter qu'une ré&shy;orienta&shy;tion vers un autre profes&shy;sion&shy;nel est égale&shy;ment possible.</b>
              </p>
            </div> 
          </div> 
        </InView>

        <InView className="question-reponse" as="div" threshold="1" onChange={(inView, entry)=>setQuestion3(inView)}>
          <div className="question question-3">
            <div className="conteneur-question">
              A quoi ça sert ?
            </div>
          </div>
          <div className="reponse reponse-3">
            <div className="conteneur-reponse">
              <p>
                <b>Il permet de préciser les objectifs de la prise en soin psychomotrice</b> et de définir quel sera le suivi. Il pourra aussi éven&shy;tuel&shy;lement servir à déter&shy;miner une orien&shy;tation vers un autre pro&shy;fes&shy;sionnel de santé en com&shy;plé&shy;ment des soins psy&shy;cho&shy;mo&shy;teurs.
              </p>
            </div> 
          </div>
        </InView>

        <InView className="question-reponse" as="div" threshold="1" onChange={(inView, entry)=>setQuestion4(inView)}>
          <div className="question question-4">
            <div className="conteneur-question">
              Et après ?
            </div>
          </div>
          <div className="reponse reponse-4">
            <div className="conteneur-reponse">
              <p>
                Les conclusions du bilan psy&shy;cho&shy;moteur auront permis, le cas éché&shy;ant, de définir <b>les différents objectifs d'un suivi</b>. Ce suivi, qui peut être individuel ou groupal en fonctions des objectifs visés, est gé&shy;né&shy;ralement heb&shy;do&shy;ma&shy;daire. Pour les enfants, <b>des entre&shy;tiens paren&shy;taux</b> sont proposés au cours du suivi de l'enfant pour préciser les évo&shy;lu&shy;tions, les aides et outils à apporter au quo&shy;tidien et à l’école.
              </p>
            </div> 
          </div>
        </InView>
      </section>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  margin-top: 60px;

  .question-1, .question-2, .question-3, .question-4, .question-5{
    transform: translateX(-50%);
    opacity: 0;
  }
  .reponse-1, .reponse-2, .reponse-3, .reponse-4, .reponse-5{
    transform: translateX(50%);
    opacity: 0;
  }

  section{
    position: relative;
    overflow: hidden;
    padding: 75px 0px 20px;
    margin-bottom: 10px;

    .conteneur-bg-image{
      position: absolute;
      z-index: -1;
      opacity: 0;
      filter: brightness(125%);

      img{
        transform: translateY(-20%);
      }
    }
  }

  .section-title{
    padding: 0px 10px;
    letter-spacing: 1.5px;
    text-align : center;
    width : auto;
    height : auto;
    white-space:nowrap;
    
    h2{
      font-size :clamp(4rem, 7.5vw, 8.5rem);
      margin: 0px;
      font-family: 'Oxygen', sans-serif;
      text-transform: uppercase;
      -webkit-text-stroke : 4px #28536b;
      color: transparent;
      opacity: 0;
      transform: translateY(30%)
    }

    .trait{
      transform : translateX(-110%);
      z-index: -1;
    }
  }

  .bilan-psy-schema{
    text-align : center;
    margin-bottom: 15vh;

    .img-container{
      opacity: 0;
      img{
        width:45%;
      }
    }

    small{
      display: inline-block;
      text-align:center; 
      margin:15px auto 5vh; 
      color:#28536b; 
      font-family:'Oswald' sans-serif; 
      font-size:1.1em; 
      font-weight:bold;
      transform: translateX(-100%);
      opacity:0;

      a{
        text-decoration: underline;
        &:hover{
          color: #9f7f92
        }
      }
    }
  }
  .question-reponse{
    margin-bottom: 10vh;

    .question{
      display: flex;
      justify-content: flex-end;
      width: 50%;

      .conteneur-question{   
        text-align: right;
        font-size : clamp(2.2rem, 3.5vw, 3.5rem);
        letter-spacing: 0.2px;
        font-family: 'Oxygen', serif;
        margin-top : 0px;
        font-weight : bold;
        transition : transform 2s ease-out, opacity 0.5s ease-out ;
        color : #745869;
        text-shadow : 0px 3px 5px #cccccc;
        margin-bottom:2vh;
      }   
    }
    
    
    .reponse{
      display : flex;
      justify-content: flex-end;
      margin-right: 7vw;
      
      .conteneur-reponse{
        width:45%; 
        background-color: whitesmoke;
        font-family: 'Oswald', sans-serif;
        border-top : 3px solid #28536b ;
        border-right : 3px solid #28536b ;
        border-bottom :3px solid #28536b ;
        border-left: 10px solid #28536b ;
        padding : 0 15px;
        transition : transform 0.7s cubic-bezier(.88,.87,.71,1.2), opacity 1.5s;
        color : #326886;
        margin-right: 50px;

        p{
          text-indent: 20px;
          font-size : 1.5em;
          text-align: justify;
        }
      }
    }
  }

  @media screen and (max-width:1060px){
    .section-title {
      h2{
        font-size: calc(1rem + 4vw);
        -webkit-text-stroke : unset;
        color: #28536b;
      }
    }
    .bilan-psy-schema{
      .img-container{
        img{
          width:75%;
        }
      }
    }
    .reponse{   
      div.conteneur-reponse{
        width:80% !important;
        margin-right: 0px !important;

        p{
          font-size : 1.3rem !important;
        }
      }
    }
  }

  @media screen and (max-width:505px){
    .section-title {
      h2{
        font-size:calc(1rem + 2.5vw);
      }
    }   
    .reponse{   
      div.conteneur-reponse{
        width:100% !important;
        margin-left: 10px !important;
      }
    }

    .question{
      width:100% !important;
      justify-content: center !important;
      
    }
    .conteneur-question{
      text-align: center !important;
    }

    .bilan-psy-schema{
      .img-container{
        img{
          width:370px;
        }
      }
    }
  }

`

export default PratiqueSection1;