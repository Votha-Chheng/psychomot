import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react"
import {InView} from "react-intersection-observer"
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"
import Trait from "./trait"

const AtelierRelax = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [titleWidth, setTitleWidth] = useState(0)
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
  const bgImage = useRef(null)
  const reponse1 = useRef(null)
  const reponse2 = useRef(null)
  const reponse3 = useRef(null)
  const reponse4 = useRef(null)
  const reponse5 = useRef(null)

  useEffect(() =>{
    setTitleWidth(sectionTitle.current.offsetWidth)
  },[titleWidth, size])

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
    if(sectionInView){
      gsap.to(trait.current, {
        x: 0,
        duration: 1,
        delay : 0.3
      })
      gsap.to(".section-title h2 span", {
        opacity: 1,
        duration : 0.5,
      })
      gsap.to(".section-title", {
        y : 0,
        duration : 1,
      })
      gsap.to(bgImage.current, {
        autoAlpha : 0.5,
        duration : 0.5,
        delay : 0.8
      })
      gsap.to(".relax-intro", {
        autoAlpha : 1,
        duration : 1.2,
        delay : 1
      })
      gsap.to(".relax-question", {
        x : 0,
        autoAlpha : 1,
        duration : 0.9,
        delay : 1.2,
        stagger : 0.2
      })
      gsap.to(".relax-reponse", {
        x : 0,
        autoAlpha : 1,
        duration : 0.9,
        delay : 1.2,
        stagger : 0.2
      })
    }
  }, [sectionInView])

  const clickHandler = (event, selected)=>{
    if(event.target.id === selected) {
      setShowReponse('')
    } else {
      setShowReponse(event.target.id)
    }
  }

  return (  
    <SectionWrap id="relaxation">
      <InView as="div" threshold="0.15" onChange={(inView, entry)=>setSectionInView(inView)}>
        <div className="section-title" ref={sectionTitle}>
          <h2>
            <span>Atelier Relaxation</span>
          </h2>
          <div className="trait" ref={trait}>
            <Trait width={titleWidth} bgColor="#326886" height={`${size.width <1400 ? "5px" : "8px"}`}/>
          </div> 
        </div>

        <div className="container-guidance">
          <div className="backgroung-image relax-bg">
            <img src="/images/Relaxation-6.jpg" ref={bgImage}/>
          </div>

          <div className="guidance">
            <div className="flexbox">
              <div className="relax-intro">
                <div>
                  Notre mode de vie est marqu?? par le stress, tant au travail que dans la vie quotidienne, et malheureusement, ce stress peut aussi d??teindre sur nos enfants en prenant notamment la forme <b>d'une certaine anxi??t?? ou d'un manque de concentration</b>. D??s lors, il est important pour eux de se trouver des moments durant lesquels ils peuvent se relaxer et se recentrer. <b>Cette relation ?? soi-m??me ne coule pas de source et bien souvent, l'enfant a besoin d???aide pour en prendre conscience.</b> C'est dans cette perspective que j'ai mis en place au sein de mon cabinet des <b>ateliers de relaxation r??serv??s aux enfants de 5 ?? 10 ans</b>.
                </div>
                <div>
                  La relaxation est <b>un rel??chement et une d??tente physique et mentale</b> qui conduit au bien-??tre et ?? un silence int??rieur apaisant. Elle rend l'enfant attentif ?? ce qu'il ressent et lui fait prendre conscience de ses ??motions. En outre, la relaxation r????quilibre le syst??me nerveux, calme les tensions, apaise les peurs et aide ?? retrouver confiance.
                </div>
              </div>

              <div className="container-accordions">
                <div className="question-reponse">
                  <div className={`relax-question ${showReponse==="1"? "show":""}`}>
                    <h3>&Agrave; qui s'adresse cet atelier ?</h3>
                    <div onClick={(event)=>clickHandler(event, showReponse)}>
                      <i id="1" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="1" ? "rotateZ(45deg)" : ""}`}}/>
                    </div>
                  </div>
                  <div className="relax-reponse" style={{maxHeight:`${showReponse==="1"? reponseHeight1 + "px": "0px"}`, overflow:"hidden"}}>
                    <div ref={reponse1}>
                    Cet atelier est propos?? ??  tout enfant et son parent d??sireux de passer un moment de qualit?? ?? travers le m??diateur qu???est la relaxation. Les tranches d?????ge propos??es sont : 
                    <ul style={{listStyleType:"square", marginTop:"0"}}>
                      <li>de 5 ?? 6 ans</li>
                      <li>de 7 ?? 10 ans</li>
                    </ul>
                    </div>
                    
                  </div>
                </div>

                <div className="question-reponse">
                  <div className={`relax-question ${showReponse==="2"? "show":""}`}>
                    <h3>&Agrave; quoi ??a sert ?</h3>
                    <div onClick={(event)=>clickHandler(event, showReponse)}>
                      <i id="2" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="2" ? "rotateZ(45deg)" : ""}`}}/>
                    </div>
                  </div>
                  <div className="relax-reponse" style={{maxHeight:`${showReponse==="2"? reponseHeight2 + "px": "0px"}`, overflow:"hidden"}}>
                    <div ref={reponse2}>
                      Il permet ?? l???enfant et ?? son parent de vivre une <b>exp??rience positive</b> gr??ce ?? la relaxation. Ce m??diateur est un outil puissant permettant <b>l???apaisement des tensions corporelles, la diminution de l???agitation motrice, une meilleure gestion des ??motions, d???acqu??rir une meilleure connaissance de soi, de ses ressentis et de son corps</b>. Dans un monde o?? il existe une pression chez les adultes comme chez les enfants de la performance et de la vitesse, o?? les ??crans biaisent les rapports humains, ce temps devient <b>une bulle d???oxyg??ne</b>. Il permet de se ressourcer et exp??rimenter un moment fort pour ??tre pr??sent ?? son enfant.
                    </div>
                    
                  </div>
                </div>

                <div className="question-reponse">
                  <div className={`relax-question ${showReponse==="3"? "show":""}`}>
                    <h3>Comment ??a se passe ?</h3>
                    <div onClick={(event)=>clickHandler(event, showReponse)}>
                      <i id="3" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="3" ? "rotateZ(45deg)" : ""}`}}/>
                    </div>
                  </div>
                  <div className="relax-reponse" style={{maxHeight:`${showReponse==="3"? reponseHeight3 + "px": "0px"}`, overflow:"hidden"}}>
                    <div ref={reponse3}>
                      L???atelier se d??roule <b>pendant les petites et grandes vacances scolaires</b>. Il dure 1h30 et est propos?? en petit groupe de plusieurs familles compos??es d???un enfant et de l???un de ses parents. L???atelier se d??compose en trois temps importants : l???installation, les exercices de relaxation et enfin un temps de verbalisation pour exprimer ses ressentis. Diff??rentes techniques sont mises en oeuvre telles que <b>la respiration contr??l??e ou les appuis corporels</b>. Des techniques et <b>des outils concrets</b> sont utilis??s pour permettre de les utiliser par la suite chez soi.
                    </div>
                    
                  </div>
                </div>

                <div className="question-reponse">
                  <div className={`relax-question ${showReponse==="4"? "show":""}`}>
                    <h3>Qui anime l'atelier ?</h3>
                    <div onClick={(event)=>clickHandler(event, showReponse)}>
                      <i id="4" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="4" ? "rotateZ(45deg)" : ""}`}}/>
                    </div>
                  </div>
                  <div className="relax-reponse" style={{maxHeight:`${showReponse==="4"? reponseHeight4 + "px": "0px"}`, overflow:"hidden"}}>
                    <div ref={reponse4}>
                      L'atelier' est propos?? par Estelle B??try, psychomotricienne D.E. Form??e ?? diff??rentes techniques de relaxation, ?? la gestion de l???anxi??t??.<br/>
                      <a href="/#qui-suis-je">Voir mon parcours et mes formations</a>
                    </div> 
                  </div>
                </div>

                <div className="question-reponse">
                  <div className={`relax-question ${showReponse==="5"? "show":""}`}>
                    <h3>Infos pratiques</h3>
                    <div onClick={(event)=>clickHandler(event, showReponse)}>
                      <i id="5" className="fas fa-plus fa-2x" style={{transform:`${showReponse==="5" ? "rotateZ(45deg)" : ""}`}}/>
                    </div>
                  </div>
                  <div className="relax-reponse" style={{maxHeight:`${showReponse==="5"? reponseHeight5 + "px": "0px"}`, overflow:"hidden"}}>
                    <div ref={reponse5} style={{display:"flex", flexDirection:"column", alignItems:"start", marginLeft:"10px"}}>
                      <div className="names-flexbox" style={{display:"flex", flexDirection:"row", justifyContent:"space-betweeen", textAlign:"left", padding:"0px"}}>
                        <div className="tarifs" style={{padding:"0px"}}>
                          <div style={{padding:"0px", fontWeight:'bold'}} >Tarifs</div>
                          <div style={{padding:"0px"}} >Les places ??tant limit??es, il est n??cessaire de s???inscrire pour participer ?? l???atelier. Le prix est de 30 euros par famille (un enfant et un parent). Dur??e : 1H30</div>
                        </div>
                      </div>
                      <div style={{textAlign:"left", display:"flex", padding:"0px"}}>
                        <div>
                          <i className="fas fa-map-marker-alt" style={{marginRight : "10px"}}/>
                        </div>
                        <div>
                          Espace param??dical du DEVENSON<br/>Route de Maussane CD 17<br/>13890 MOURI&Egrave;S
                        </div>
                      </div> 
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InView>
    </SectionWrap>

  );
}

const SectionWrap = styled.section`
  padding-top: 1px;

  .backgroung-image.relax-bg{
    width: 100vw;
    filter: blur(2px);
  }

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
    transform: translateY(50%);


    h2{
      font-size :clamp(4em, 5.5vw, 6.5em);
      margin : 0 auto;
      letter-spacing: 7px;

      span{
        opacity: 0;
      }
    }

    .trait{
      transform : translateX(-125%);
      z-index: -1;
      margin-top:50px ;
      position: static;
    }
  }

  .names-flexbox{
    .names{
      min-width: 200px;
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
    div.section-title{
      -webkit-text-stroke : 2px #28536b;

      h2{
        font-size :clamp(2em, 5.5vw, 3.5em);  
      }
    }
  }
  @media (max-width:775px){
    .container-guidance{
      height : 1150px !important;
    }
    .guidance{
      .flexbox{
        flex-direction: column;

        .relax-intro, .container-accordions{
          min-width : 100%;
        }
        .container-accordions{
          margin-left: 0px !important;
        }
      }  
    }
    .backgroung-image{
      img{
        height : 1150px !important;
      }
    }
  }

  @media (max-width:590px){
    .section-title{
      color : #28536b;
      font-weight: bold;
      -webkit-text-stroke: unset !important;
      h2{
        font-size :clamp(1.35rem, 4vw, 3.5rem) !important;
      }
    }
  }

  @media (max-width:435px){
    div.container-guidance{
      height : 1400px !important;
    }
    .backgroung-image{
      img{
        height : 1400px !important;
      }
    }
    .question-reponse .question h3{
      font-size: 1em !important;
    }
  }

  .container-guidance{
    position: relative;
    overflow: hidden;
    height : 800px;

    .backgroung-image{
      position: absolute;
      z-index: -1;
      
      img{
        filter: brightness(125%) blur(1.5px);
        opacity: 0;
        width: 100%;
      }
    }

    .guidance{
      position: static;
      color: #326886;
      z-index: 1;
      
      .flexbox{
        display: flex;
        align-items: top;
        justify-content: center;
        margin: 0 30px;
        
        a{
          color: #9f7f92;
          font-weight: bold;
          font-style : italic;
          text-decoration: underline;
          
          &:hover{
            filter: brightness(135%);
          }
        }

        .relax-intro{
          max-width: 45%;
          height: 75%;
          margin-top: 30px;
          background-color: whitesmoke;
          padding: 20px;
          line-height: 1.6em;
          font-size: clamp(1em, 1.6vw, 1.5em);
          font-family: "Oswald", sans-serif;
          border-radius: 20px;
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

            .relax-question {
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
              transform : translateX(50%);
              
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
            .relax-question.show{
              border-radius: 20px 20px 0px 0px;
            }
            .relax-reponse{
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
`

export default AtelierRelax;