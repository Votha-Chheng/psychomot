import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"
import Trait from "./trait"

const AtelierBarkley = () => {
  const [titleWidth, setTitleWidth] = useState(0)
  const [titleWidth2, setTitleWidth2] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const [reponseHeight1, setReponseHeight1] = useState(0)
  const [reponseHeight2, setReponseHeight2] = useState(0)
  const [reponseHeight3, setReponseHeight3] = useState(0)
  const [reponseHeight4, setReponseHeight4] = useState(0)
  const [reponseHeight5, setReponseHeight5] = useState(0)
  const [showReponse, setShowReponse] = useState("0")

  const size = useWindowSize()

  const trait = useRef(null)
  const sectionTitle = useRef(null)
  const sectionTitle1 = useRef(null)
  const sectionTitle2 = useRef(null)
  const bgImage = useRef(null)
  const reponse1 = useRef(null)
  const reponse2 = useRef(null)
  const reponse3 = useRef(null)
  const reponse4 = useRef(null)
  const reponse5 = useRef(null)

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)
    setTitleWidth2(sectionTitle2.current.offsetWidth)
  },[titleWidth, titleWidth2, size])

  useEffect(() =>{
    setImgHeight(bgImage.current.offsetHeight)
  },[size, imgHeight])

  useEffect(() =>{

    setReponseHeight1(reponse1.current.offsetHeight)
    setReponseHeight2(reponse2.current.offsetHeight)
    setReponseHeight3(reponse3.current.offsetHeight)
    setReponseHeight4(reponse4.current.offsetHeight)
    setReponseHeight5(reponse5.current.offsetHeight)
    
  },[size, reponseHeight1, reponseHeight2, reponseHeight3, reponseHeight4, reponseHeight5])

  useEffect(() => {
    gsap.to(trait.current, {
      x: 0,
      duration: 1.2,
      delay : 0.8
    })
    gsap.to(sectionTitle1.current, {
      opacity: 1,
      duration : 0.8,
      delay : 0.2
    })
    gsap.to(sectionTitle2.current, {
      opacity: 1,
      duration : 0.8,
      delay : 0.4
    })
    gsap.to(".section-title h2", {
      y : 0,
      duration : 1.2,
      stagger : 0.5
    })
    gsap.to(bgImage.current, {
      autoAlpha : 0.5,
      duration : 0.6,
      delay : 1.2
    })
    gsap.to(".intro", {
      autoAlpha : 1,
      duration : 0.9,
      delay : 1.5
    })
    gsap.to(".question", {
      x : 0,
      autoAlpha : 1,
      duration : 0.9,
      delay : 1.5,
      stagger : 0.2
    })
    gsap.to(".reponse", {
      x : 0,
      autoAlpha : 1,
      duration : 0.9,
      delay : 1.5,
      stagger : 0.2
    })
  }, [])

  const clickHandler = (event, selected)=>{
    if(event.target.id === selected) {
      setShowReponse('')
    } else {
      setShowReponse(event.target.id)
    }
  }

  return (
    <SectionWrap>
      <div className="section-title" ref={sectionTitle}>
        <h2>
          <span ref={sectionTitle1}>Atelier de GUIDANCE PARENTALE</span>
        </h2>
        <h2>
          <span ref={sectionTitle2}>DE TYPE BARKLEY</span>
        </h2>
        <div className="trait" ref={trait} >
          <Trait width={titleWidth} bgColor="#326886" height={`${size.width <1400 ? "5px" : "8px"}`}/>
        </div>
      </div>

      
      <div className="container-guidance">
        <div className="backgroung-image">
          <img src="/images/20210611_114122.jpg" ref={bgImage}/>
        </div>

        <div className="guidance">
          <div className="flexbox">
            <div className="intro">
              <div>
                Certains parents d'enfant diagnosti&shy;qué TDA/H (ou appa&shy;renté) sont très sou&shy;vent confrontés à des problèmes de compor&shy;tement de la part de leur enfant. Dans cette optique, je co-anime avec ma consoeur psy&shy;chologue spécialisée en neuro-psycholo&shy;gie des <b>ateliers de guidance parentale basés sur le</b> <a href='https://www.tdah-france.fr/Programme-d-entrainement-aux-habiletes-parentales-de-Barkley.html' target="blank">programme de BARKLEY</a>.
              </div>
              <div>
                Ces ateliers visent à aider ceux-ci face aux réactions opposantes et défian&shy;tes de leur enfant en enseignant, dans une perspective psycho&shy;éducative, des tech&shy;niques de gestion de ces compor&shy;tements dans le quotidien. Ce type de programme a montré <b>son efficacité sur la fréquence et l’in&shy;tensité des comportements perturba&shy;teurs des enfants</b>, en plus de redonner un <b>senti&shy;ment de compétence aux parents</b>.
              </div>
            </div>

            <div className="container-accordions">
              <div className="question-reponse">
                <div className={`question ${showReponse==="1"? "show":""}`}>
                  <h3>&Agrave; qui s'adressent ces ateliers ?</h3>
                  <div onClick={(event)=>clickHandler(event, showReponse)}>
                    <i id="1" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="1" ? "rotateZ(45deg)" : ""}`}}/>
                  </div>
                </div>
                <div className="reponse" style={{maxHeight:`${showReponse==="1"? reponseHeight1 + "px": "0px"}`, overflow:"hidden"}}>
                  <div ref={reponse1}>
                    Ils s’adressent aux parents d’un enfant diag&shy;nostiqué comme ayant un TDA/H ou un trou&shy;ble appa&shy;renté, et qui en font la demande.
                  </div>
                  
                </div>
              </div>

              <div className="question-reponse">
                <div className={`question ${showReponse==="2"? "show":""}`}>
                  <h3>&Agrave; quoi ça sert ?</h3>
                  <div onClick={(event)=>clickHandler(event, showReponse)}>
                    <i id="2" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="2" ? "rotateZ(45deg)" : ""}`}}/>
                  </div>
                </div>
                <div className="reponse" style={{maxHeight:`${showReponse==="2"? reponseHeight2 + "px": "0px"}`, overflow:"hidden"}}>
                  <div ref={reponse2}>
                    Les entretiens proposés ont pour objectif de mieux comprendre le fonctionnement de son enfant TDA/H. Ils permettent de trouver des solutions concrètes pour pallier les difficultés vécues au quotidien afin de restaurer un lien relationnel familial de qualité. Il permet également de diminuer le stress parental et celui de l’enfant. Il permettra aussi à l’enfant de mieux accepter et vivre avec son TDA/H.
                  </div>
                  
                </div>
              </div>

              <div className="question-reponse">
                <div className={`question ${showReponse==="3"? "show":""}`}>
                  <h3>Comment ça se passe ?</h3>
                  <div onClick={(event)=>clickHandler(event, showReponse)}>
                    <i id="3" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="3" ? "rotateZ(45deg)" : ""}`}}/>
                  </div>
                </div>
                <div className="reponse" style={{maxHeight:`${showReponse==="3"? reponseHeight3 + "px": "0px"}`, overflow:"hidden"}}>
                  <div ref={reponse3}>
                    Un entretien préalable avec chaque famille permet de préciser la demande parentale. Le programme  est suivi pendant 10 séances en groupe fermé et constitué de 5 à 8 familles. &Agrave; chaque réunion, un point essentiel du TDA/H est approfondi tel que ses symptômes, les difficultés de motivation, de perception du temps, de gestion de la colère, les conséquences sur l’estime de soi, la scolarité. Des  stratégies efficaces  et des outils concrets, validés scientifiquement auprès de ce public sont proposées.
                  </div>
                  
                </div>
              </div>

              <div className="question-reponse">
                <div className={`question ${showReponse==="4"? "show":""}`}>
                  <h3>Qui sommes-nous ?</h3>
                  <div onClick={(event)=>clickHandler(event, showReponse)}>
                    <i id="4" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="4" ? "rotateZ(45deg)" : ""}`}}/>
                  </div>
                </div>
                <div className="reponse" style={{maxHeight:`${showReponse==="4"? reponseHeight4 + "px": "0px"}`, overflow:"hidden"}}>
                  <div ref={reponse4}>
                    Le programme est proposé par une psycho&shy;motricienne D.E., <b>Estelle Bétry</b>, et une psycho&shy;logue spécialisée en neuro-psychologie, <b>Sandie Chambardon</b>.
                  </div> 
                </div>
              </div>

              <div className="question-reponse">
                <div className={`question ${showReponse==="5"? "show":""}`}>
                  <h3>Nous contacter</h3>
                  <div onClick={(event)=>clickHandler(event, showReponse)}>
                    <i id="5" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="5" ? "rotateZ(45deg)" : ""}`}}/>
                  </div>
                </div>
                <div className="reponse" style={{maxHeight:`${showReponse==="5"? reponseHeight5 + "px": "0px"}`, overflow:"hidden"}}>
                  <div ref={reponse5} style={{display:"flex", flexDirection:"column", alignItems:"start", marginLeft : "20px"}}>
                    <div className="names-flexbox">
                      <div style={{marginRight:"30px"}}>
                        <em><b>Estelle Bétry</b></em><br/>(psychomotricienne)<br/><i className="fas fa-phone" style={{marginRight:"10px"}} /><a href="tel:0644851800" style={{fontStyle:"normal", color : "#28536b", fontWeight:'100'}}>06 44 85 18 00</a>
                      </div>
                      <div className="name-sandie">
                        <em><b>Sandie Chambardon</b></em><br/>(psychologue spécialisée en neuropsychologie)<br/><i className="fas fa-phone" style={{marginRight:"10px"}} /><a href="tel:0601152203" style={{fontStyle:"normal", color : "#28536b", fontWeight:'100'}}>06 01 15 22 03</a>
                      </div>
                    </div>
                    <div style={{textAlign:"left", display:"flex"}}>
                      <div>
                        <i className="fas fa-map-marker-alt" style={{marginRight : "10px"}}/>
                      </div>
                      <div>
                        Espace paramédical du DEVENSON<br/>Route de Maussane CD 17<br/>13890 MOURI&Egrave;S
                      </div>
                    </div> 
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </SectionWrap>
  );
}

const SectionWrap = styled.section`

  .section-title{
    padding: 0px 10px;
    text-transform: uppercase;
    -webkit-text-stroke : 4px #28536b;
    color: transparent;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1.5px;
    text-align : center;
    width : auto;
    height : auto;
    white-space:nowrap;
    margin: 10vh auto 0px;

    h2{
      font-size :clamp(4em, 5.5vw, 6.5em);
      margin : 0 auto -20px;
      transform: translateY(100%);

      span{
        opacity: 0;
      }
    }

    .trait{
      transform : translateX(-125%);
      z-index: -1;
      margin-top:50px ;
      position:static;
    }
  }



  .names-flexbox{
    display:flex; 
    flex-direction:row; 
    justify-content:flex-start; 
    text-align:left;

    .name-sandie{
      margin-left:30px;
    }
  }

  .container-guidance{
    position: relative;
    overflow: hidden;
    height : 780px;

    .backgroung-image{
      position: absolute;
      z-index: -1;
      
      img{
        filter: brightness(125%) blur(1.5px);
        opacity: 0;
        width: 100vw;

      }
    }

    .guidance{
      position: static;
      z-index: 1;
      padding-top: 5vh;
      
      .flexbox{
        display: flex;
        align-items: top;
        justify-content: center;
        margin: 0 30px;
        
        a{
          color: #9f7f92;
          font-weight: bold;
          font-style : italic;
          
          &:hover{
            filter: brightness(135%);
          }
        }

        .intro{
          max-width: 45%;
          height: 75%;
          margin-top: 30px;
          background-color: whitesmoke;
          padding: 20px;
          line-height: 1.6em;
          font-size: clamp(1em, 1.6vw, 1.5em);
          font-family: "Oswald", sans-serif;
          border-radius: 20px;
          color : #326886;
          opacity: 0;

          div{
            text-indent: 20px;
            text-align: justify;
            
          }
        }
        .container-accordions{
          max-width: 55%;
          margin: 30px 20px 20px;

          .question-reponse{
            margin-bottom: 25px;

            .question {
              color: whitesmoke;
              background-color: #2c5d77;
              width: 100%;
              height: 50px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding-left: 15px;
              border-radius: 20px;
              transition: border 0.3s ease-out;
              opacity: 0;
              transform: translateX(50%);
              
              h3{
                margin: 12px 0px 0px;
                font-style: italic;
              }
              i{
                margin-top: 10px;
                margin-right: 20px;
                cursor: pointer;
                transition: transform 0.2s ease-out;

                &:hover{
                  transform: scale(1.1);
                }
              }
            }
            .question.show{
              border-radius: 20px 20px 0px 0px;
            }
            .reponse{
              opacity: 0;
              font-family: "Oswald", sans-serif;
              font-size: clamp(1em, 1.5vw, 1.5em);
              text-align: justify;
              padding: 0px 10px;
              transition: max-height 0.6s ease-out;
              background-color: whitesmoke;
              border-radius:0px 0px 20px 20px;
              border-right: 1px solid black;
              border-left: 1px solid black;
              border-bottom: 1px solid black;
              color : #326886;

              div{
                line-height : 1.6em;
                padding: 10px 0px;
              }
            }
          }  
        }
      }
    }
  }  
  
  @media (max-width: 1400px){
    .trait{
      margin-top:20px ;
    }
  }


  @media (max-width:1195px){
    .backgroung-image{
      img{
        height : 900px;
        width : auto !important;
      }
    }
    .section-title{
      -webkit-text-stroke : 2px #28536b;
      h2{
        font-size :clamp(2em, 5.5vw, 3.5em);
        margin-bottom: 0px !important;
      }
    }
  }

  @media (max-width:775px){
    .container-guidance{
      height : 1100px !important;
    }
    .section-title{
      -webkit-text-stroke : unset;
      color: #28536b;
      h2{
        font-size :clamp(2em, 5.5vw, 3.5em);
        margin-bottom: 0px !important;
      }
    }
    .guidance{
      .flexbox{
        flex-direction: column;

        .intro, .container-accordions{
          min-width : 100%;
        }
        .container-accordions{
          margin-left: 0px !important;
        }
      }  
    }
    .backgroung-image{
      
      img{
        height : 1100px !important;
      }
    }
  }

  @media (max-width:590px){
    .section-title{
      h2{
        font-size :clamp(1.15em, 4.5vw, 3.5em);
      }
    }
  }

  @media (max-width:435px){
    .container-guidance{
      height : 1350px !important;
    }
    .backgroung-image{
      img{
        height : 1350px !important;
      }
    }
    .question-reponse .question h3{
      font-size: 1em !important;
    }
    .names-flexbox{
      flex-direction:column !important;
      div.name-sandie{
        margin-left:0px;
      } 
    }
  }
`

export default AtelierBarkley;