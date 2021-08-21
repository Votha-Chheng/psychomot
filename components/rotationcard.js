import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import Trait from "./trait";

const RotationCard = () => {

  const [dataCard, setDataCard] = useState(undefined)
  const [dataCardFormation, setDataCardFormation] = useState(undefined)
  const [hoverCard, setHoverCard] = useState(undefined)
  const [hoverFormationCard, setHoverFormationCard] = useState(undefined)
  const [parcoursInView, setParcoursInView] = useState(false)
  const [experiences,setExperiences] = useState(false)
  const [underlineTitle3, setUnderlineTitle3] = useState(0)
  const [containerParcoursProWidth, setContainerParcoursProWidth] = useState(0)

  const parcours = useRef(null)
  const containerParcoursPro = useRef(null)

  const size = useWindowSize()

  useEffect(() => {
    setUnderlineTitle3(parcours.current.offsetWidth)
  }, [parcoursInView, size])

  useEffect(() => {
    setContainerParcoursProWidth(containerParcoursPro.current.node.clientWidth)
  }, [containerParcoursProWidth, size])

  useEffect(()=>{
    if(parcoursInView){
      gsap.to(".title-parcours-pro", {
        y : 0,
        duration : 1.2
      })
      gsap.to(".title-parcours-pro", {
        autoAlpha : 1,
        duration : 1.8
      })
    }
  }, [parcoursInView])

  useEffect(()=>{
    if(experiences){
      gsap.to(".conteneur-trait-3", {
        x : 0,
        duration : 1.4,
        delay : 0.2
      })

      gsap.to(".experiences", {
        y : 0,
        opacity : 1,
        duration : 0.5,
      })

      gsap.to(".experiences-z-index", {
        y : 0,
        opacity : 1,
        duration : 0.5,
      })
      
      gsap.to(".card-parcours-pro", {
        opacity : 1,
        delay : 0.8,
        duration : 0.2,
        stagger : 0.2
      })
    }
  }, [experiences])


  const rotateCardHandler = (event)=>{  
    if((event.target.dataset.card === dataCard)){
      setDataCard(undefined)
      setHoverCard(undefined)
    } 
    else {
      setDataCard(event.target.dataset.card)
    }
  }

  const rotateFormationCardHandler = (event)=>{  
    if(event.target.dataset.card === dataCardFormation){
      setDataCardFormation(undefined)
      setHoverFormationCard(undefined)
    } else {
      setDataCardFormation(event.target.dataset.card)
    }
    
  }

  return (
    <DivWrapper>
      <InView as='div' className="container-parcours-pro" ref={containerParcoursPro} onChange={(inView, entry)=>{setParcoursInView(inView)}}>
        <h2 ref={parcours} className="title-parcours-pro">
          Mon parcours
        </h2>
        <div className="conteneur-trait-3">
          <Trait width={`${underlineTitle3}px`} bgColor="#9f7f92" height="8px"/>
        </div>
        <div className="flex-container" >
          <div className="container-texte-parcours-pro part-1" onClick={(event)=>rotateCardHandler(event)} onMouseLeave={()=>setHoverCard(undefined)}>
            <InView as='div' onChange={(inView, entry)=>setExperiences(inView)} triggerOnce='true'>
              <h3 className="experiences">EXPERIENCES</h3>
              <h3 className="experiences-z-index">EXPERIENCES</h3>
            </InView> 
            
            <div 
              data-card="1" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"0", left:"0", 
                height : "550px",  
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                backgroundColor:`${(hoverCard==="1")||(dataCard==="1") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverCard==="1")||(dataCard==="1") ?"blur(0px)" : "blur(0.5px)" }`,
                transform: `translateY(${(hoverCard ==="1") && (dataCard!=="1") ? "-40" : "0"}px) `
              }}
              onMouseOver={(event)=> setHoverCard(event.target.dataset.card)} 
            > 
              <div data-card="1" className="parcours-pro-content" style={{height:"520px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                <h4 data-card="1" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>Juin 2010</h4>
                <div data-card="1" className="desc" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  Diplôme d’Etat de psychomotricité à l'IFP (Institut de Formation des Psychomotri&shy;ciens) R. Leclercq à LOOS (59)
                </div>
                <div data-card="1" style={{textAlign:'center', marginTop:"30px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  <img src="/images/degree-svgrepo-com.svg" width="100" />
                </div>
              </div>
            </div>

            <div 
              data-card="2"
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"50px", left:"3px", 
                height : "500px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform : `translateY(${(hoverCard ==="2") && (dataCard!=="2") ? "-40" : "0"}px) rotateZ(${dataCard==="1" ? "60deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${(dataCard==="1") ? "0" : (dataCard==="3")? "-0.05" : dataCard==="4"? "0.05" :(dataCard===undefined)? '0.15' :"0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverCard==="2")||(dataCard==="2") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverCard==="2")||(dataCard==="2") ?"blur(0px)" : "blur(0.5px)" }`
              }}
              onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}  
            >
                <div data-card="2" className="parcours-pro-content" style={{height:"470px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  <h4 data-card="2" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>Janvier 2012 - Juillet 2012 </h4>
                  <div data-card="2"  onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                    <div data-card="2" className="desc" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                      CMPP de la Roquette, ARLES(13). 
                    </div>
                    
                    <ul style={{paddingLeft:"15px"}}>
                      <li>
                        Thérapie individuelle et de groupe auprès d'enfants de 5 à 11 ans
                      </li>
                      <li>
                        Participation aux synthèses de l'équipe pluridisciplinaire.
                      </li>
                    </ul> 
                  </div> 
                </div>
            </div>
            
            <div 
              data-card="3" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"100px", 
                left:"6px", 
                height : "450px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform : `translateY(${(hoverCard ==="3") && (dataCard!=="3") ? "-40" : "0"}px) rotateZ(${(dataCard==="1")||(dataCard==="2") ? "65deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${dataCard==="1" ? "0.05" : dataCard==="2"? "0" : (dataCard===undefined)? '0.1':"0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverCard==="3")||(dataCard==="3") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverCard==="3")||(dataCard==="3") ?"blur(0px)" : "blur(0.5px)" }`
              }}
              onMouseOver={(event)=>setHoverCard(event.target.dataset.card)} 
            >
              <div className="parcours-pro-content" style={{height:"420px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                <h4 data-card="3" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)} >Août 2012 - Juillet 2013</h4>
                <div data-card="3" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  <div data-card="3" className="desc" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                    Centre Hospitalier d'ARLES(13), service « Equipe Spécialisée Alzheimer ».
                  </div>
                  
                  <ul style={{paddingLeft:"15px"}}>
                    <li>
                      Participation à la création du service ESA.
                    </li>
                    <li>
                      Prises en soins à domicile, en tenant compte de l'environnement et de l'entou&shy;rage du patient.
                    </li>
                  </ul>  
                </div>
              </div>
            </div>

            <div 
              data-card="4" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"150px", 
                left:"9px", 
                height : "400px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform :`translateY(${(hoverCard ==="4") && (dataCard!=="4") ? "-40" : "0"}px) rotateZ(${(dataCard==="1")||(dataCard==="2")||(dataCard==="3") ? "70deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${dataCard==="1" ? "0.1" : dataCard==="2"? "0.05" : dataCard === undefined ? "0.05" : "0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverCard==="4")||(dataCard==="4") ? "#f5f5f5":"#c2c2c2"}`,
                filter: `${(hoverCard==="4")||(dataCard==="4") ?"blur(0px)" : "blur(0.5px)" }`  
              }}
              onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
              <div className="parcours-pro-content" style={{height:"370px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                <h4 data-card="4" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>Septembre 2014 - Décembre 2015</h4>
                <div data-card="4" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  <div data-card="4" className="desc" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                    EHPAD et FAM Résidence l'Oustalet à PLAN D'ORGON (13).
                  </div>
                  <ul style={{paddingLeft:"15px"}}>
                    <li>
                      Bilans et suivis de personnes âgées.
                    </li>
                    <li>
                      Participation à la création du PASA (pôle d'activité et de soins adaptés), repas thérapeutique, atelier équilibre.
                    </li>
                    <li>
                      Balnéothérapie, ateliers prévention des chutes, toucher thérapeutique.
                    </li>
                  </ul>
                </div> 
              </div> 
            </div>

            <div 
              data-card="5"
              className="card-parcours-pro" 
              style={{position:"absolute", 
              top:"200px", left:"12px", 
              transformStyle:"preserve-3d", 
              transformOrigin : "10px 95%", 
              transform : `translateY(${(hoverCard ==="5") && (dataCard!=="5") ? "-40" : "0"}px) rotateZ(${(dataCard==="1")||(dataCard==="2")||(dataCard==="3")||(dataCard==="4") ? "75deg" : "0deg"})`, 
              transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
              height : "350px",
              transitionDelay : `${dataCard==="1" ? "0.15" : dataCard==="2"? "0.10" : dataCard==="3"? "0.05": "0"}s`,
              transitionProperty : "transform",
              backgroundColor:`${((hoverCard===undefined)&&(dataCard===undefined))||(hoverCard==="5")||(dataCard==="5") ? "#f5f5f5":"#c2c2c2"}`,
              filter: `${((hoverCard===undefined)&&(dataCard===undefined))||(hoverCard==="5")||(dataCard==="5") ?"blur(0px)" :"blur(0.5px)"}`
            }}
              onMouseOver={(event)=> dataCardFormation!==undefined && setHoverCard(event.target.dataset.card)}
            >
              <div data-card="5" className="parcours-pro-content" style={{height:"320px"}} onMouseOver={(event)=>setHoverCard(event.target.dataset.card)} 
              >
                <h4 data-card="5" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>Depuis Mars 2014</h4>
                <div data-card="5" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                  <div data-card="5" className="desc" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                    Exercice en cabinet libéral successivement à FONTVIEILLE, MAUSSANE-LES-ALPILLES puis MOURI&Egrave;S (13).
                  </div>
                  <ul style={{paddingLeft:"15px"}}>
                    <li data-card="5" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                      Bilans psychomoteurs et suivis d'enfants, adolescents avec troubles des apprentissages (dyspraxie, troubles de l’écriture, troubles VS et VC), TDA/H, HPI.
                    </li>
                    <li data-card="5" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                      Suivis de personnes âgées Parkinson.
                    </li>
                    <li data-card="5" onMouseOver={(event)=>setHoverCard(event.target.dataset.card)}>
                      Collaboration avec les acteurs médicaux, sociaux et scolaires.
                    </li> 
                  </ul>       
                </div>
              </div>
            </div>
          </div>

          {/* Eventail FORMATIONS */}

          <div className="container-texte-parcours-pro part-2"
            onClick={(event)=>rotateFormationCardHandler(event)}  
            onMouseLeave={()=>setHoverFormationCard(undefined)}
            style={{top:`${((containerParcoursProWidth<736) && (dataCard!==undefined) && (dataCard!=="5"))? "930px":(containerParcoursProWidth<736)? "700px" : "0px"}`}}
          > 
            <h3 className="experiences">FORMATIONS</h3>
            <h3 className="experiences-z-index">FORMATIONS</h3>
            <div 
              data-card="1" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"0", left:"0", 
                height : "550px",  
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                backgroundColor:`${(hoverFormationCard==="1")||(dataCardFormation==="1") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverFormationCard==="1")||(dataCardFormation==="1") ?"blur(0px)" : "blur(0.5px)" }`,
                transform: `translateY(${(hoverFormationCard ==="1") && (dataCardFormation!=="1") ? "-40" : "0"}px) `
              }}
              onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)} 
            > 
              <div className="parcours-pro-content" style={{height:"520px"}} onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                <h4 data-card="1" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>Sur le TDA/H</h4>
                <div data-card="1" className="desc" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                  <ul style={{paddingLeft : "15px"}}>
                    <li><em>« Programme BARKLEY » : Groupe de guidance pour parents d’enfant avec un diagnostic de TDA/H</em> - AFREE MONTPELLIER (2019)</li>
                    <li><em>Approches thérapeutiques auprès d'enfants et d'adolescents présentant un TDA/H</em> – AFREE MONTPELLIER (2017)</li>
                    <li><em>Limites, impulsivité, violence chez l’enfant et l’adulte</em> – PROTCC AVIGNON (2016)</li>
                    <li><em>TDA/H</em> – PROTCC AVIGNON (2014)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              data-card="2"
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"50px", left:"3px", 
                height : "500px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform : `translateY(${(hoverFormationCard ==="2") && (dataCardFormation!=="2") ? "-40" : "0"}px) rotateZ(${dataCardFormation==="1" ? "60deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${(dataCardFormation==="1") ? "0" : (dataCardFormation==="3")? "-0.05" : dataCardFormation==="4"? "0.05" :(dataCardFormation===undefined)? '0.15' :"0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverFormationCard==="2")||(dataCardFormation==="2") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverFormationCard==="2")||(dataCardFormation==="2") ?"blur(0px)" : "blur(0.5px)" }`
              }}
              onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}  
            >
                <div data-card="2" className="parcours-pro-content" style={{height:"470px"}} onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                  <h4 data-card="2" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>Sur les TROUBLES DYS</h4>
                  <div data-card="2"  onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                    <div data-card="2" className="desc" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                      <ul style={{paddingLeft:"15px"}}>
                        <li><em>Les troubles visuo-spatiaux et visuo-constructifs chez l'enfant</em> – AFREE MONTPELLIER (2017)</li>
                        <li><em>La dysgraphie chez l'enfant et l'adolescent : modèles théoriques et intervention</em> – AFREE MONTPELLIER (2016)</li>
                        <li style={{marginTop : '-20px'}}><em>LE TAC (TDC), diagnostic et prise en charge top-down pour les enfants et adolescents</em> – AFREE MONTPELLIER (2015) </li>
                      </ul>
                    </div> 
                  </div> 
                </div>
            </div>
            
            <div 
              data-card="3" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"100px", 
                left:"6px", 
                height : "450px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform : `translateY(${(hoverFormationCard ==="3") && (dataCardFormation!=="3") ? "-40" : "0"}px) rotateZ(${(dataCardFormation==="1")||(dataCardFormation==="2") ? "65deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${dataCardFormation==="1" ? "0.05" : dataCardFormation==="2"? "0" : (dataCardFormation===undefined)? '0.1':"0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverFormationCard==="3")||(dataCardFormation==="3") ? "#f5f5f5":"#c2c2c2"}`,
                filter:  `${(hoverFormationCard==="3")||(dataCardFormation==="3") ?"blur(0px)" : "blur(0.5px)" }`
              }}
              onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)} 
            >
              <div className="parcours-pro-content" style={{height:"420px"}} onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                <h4 data-card="3" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)} >Sur la M&Eacute;DITATION</h4>
                <div data-card="3" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                  <div data-card="3" className="desc" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                    <ul style={{paddingLeft:"15px"}}>
                      <li><em>Programme de méditation MBSR (Mindfulness-Based Stress Reduction)</em> – Brigitte QUIGNON, AVIGNON (octobre à novembre 2018)</li>
                      <li><em>Psychologie positive, méditation, altruisme, une autre manière de soigner le corps et l’esprit</em> – JOURNEES D’ACCORDS AVIGNON (2016) </li>
                    </ul>
                  </div>  
                </div>
              </div>
            </div>

            <div 
              data-card="4" 
              className="card-parcours-pro" 
              style={{
                position:"absolute", 
                top:"150px", 
                left:"9px", 
                height : "400px", 
                transformStyle:"preserve-3d", 
                transformOrigin : "10px 95%", 
                transform :`translateY(${(hoverFormationCard ==="4") && (dataCardFormation!=="4") ? "-40" : "0"}px) rotateZ(${(dataCardFormation==="1")||(dataCardFormation==="2")||(dataCardFormation==="3") ? "70deg" : "0deg"})`, 
                transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
                transitionDelay : `${dataCardFormation==="1" ? "0.1" : dataCardFormation==="2"? "0.05" : dataCardFormation === undefined ? "0.05" : "0"}s`,
                transitionProperty : "transform",
                backgroundColor:`${(hoverFormationCard==="4")||(dataCardFormation==="4") ? "#f5f5f5":"#c2c2c2"}`,
                filter: `${(hoverFormationCard==="4")||(dataCardFormation==="4") ?"blur(0px)" : "blur(0.5px)" }`
                
              }}
              onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)} 
            >
              <div className="parcours-pro-content" style={{height:"370px"}} onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                <h4 data-card="4" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>Sur les TROUBLES ANXIEUX</h4>
                <div data-card="4" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                  <div data-card="4" className="desc" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                    <ul style={{paddingLeft:"15px"}}>
                      <li><em>Traitement des troubles anxieux chez les enfants et adolescents, bilan et approches prometteuses</em> – en visioconférence, PORTE-VOIX (2021)</li>
                    </ul>
                  </div>
                </div> 
              </div> 
            </div>

            <div 
              data-card="5"
              className="card-parcours-pro" 
              style={{position:"absolute", 
              top:"200px", left:"12px", 
              transformStyle:"preserve-3d", 
              transformOrigin : "10px 95%", 
              transform : `translateY(${(hoverFormationCard ==="5") && (dataCardFormation!=="5") ? "-40" : "0"}px) rotateZ(${(dataCardFormation==="1")||(dataCardFormation==="2")||(dataCardFormation==="3")||(dataCardFormation==="4") ? "75deg" : "0deg"})`, 
              transition:"all 0.5s cubic-bezier(.23,.95,.89,.89)", 
              height : "350px",
              transitionDelay : `${dataCardFormation==="1" ? "0.15" : dataCardFormation==="2"? "0.10" : dataCardFormation==="3"? "0.05": "0"}s`,
              transitionProperty : "transform",
              backgroundColor:`${((hoverFormationCard===undefined)&&(dataCardFormation===undefined))||(hoverFormationCard==="5")||(dataCardFormation==="5") ? "#f5f5f5":"#c2c2c2"}`,
              filter: `${((hoverFormationCard===undefined)&&(dataCardFormation===undefined))||(hoverFormationCard==="5")||(dataCardFormation==="5") ?"blur(0px)" :"blur(0.5px)"}`
            }}
              onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}
            >
              <div data-card="5" className="parcours-pro-content" style={{height:"320px"}} onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)} 
              >
                <h4 data-card="5" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>Sur les personnes HPI</h4>
                <div data-card="5" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                  <div data-card="5" className="desc" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                    <ul data-card="5" style={{paddingLeft:"15px"}}>
                      <li data-card="5" onMouseOver={(event)=>setHoverFormationCard(event.target.dataset.card)}>
                        <em>L’enfant et l’adolescent haut potentiel</em> – RESODYS MARSEILLE(2016)
                      </li>
                    </ul>
                  </div>       
                </div>
              </div>
            </div>
          </div>
        </div>  
      </InView>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  height: 100%;

  .conteneur-trait-3{
    transform: translateX(-120%);
    margin-top: 10px;
  }

  .container-parcours-pro{
    width: 100%;
    height: 1000px;

    .title-parcours-pro{
      transform: translate(0, 100%);
      opacity:0;
      font-family: 'Oxygen', serif;
      text-transform: uppercase;
      -webkit-text-stroke : 4px white;
      color : transparent;
      font-size :clamp(4em, 9vw, 8em);
      text-shadow : none;
      margin: 0px;
      text-align: center;
    }

    .card-parcours-pro {
      background-color: white;
      width: 350px;
      padding: 15px 10px;
      border-radius: 10px;
      border: 1px solid grey;
      cursor: pointer; 
      z-index: 2;
      opacity: 0;
      
      ul{
        list-style-type:square;
      }        

      .parcours-pro-content{
        border: 2px solid #8c697e;
        padding: 3px 10px;
        border-radius: 10px;
      }

      h4{
        margin: 0px;
        padding-left: 10px;
        padding-bottom: 2px;
        position: relative;
        color: #8c697e;
        font-weight: bold;
        font-family: "Oxygen", "sans-serif";
        font-size: 0.9em;
        
        &::before{
          content: '';
          position: absolute;
          bottom : 2px;
          left: 0;
          height: 15px;
          width: 5px;
          background-color : #8c697e;
        }
        &::after{
          content: '';
          position: absolute;
          bottom : 0px;
          left: 0;
          height: 2px;
          width: 100%;
          background-color : #8c697e;
        }
      }
      .desc{
        padding-top:10px;
      }
    }
    .container-texte-parcours-pro.part-2{
      right: 10vw;
      transition: all 0.3s ease-out;
      height: 100%;
    }
    .container-texte-parcours-pro.part-1{
      left: 10vw;
      transition: all 0.3s ease-out;
      height: 100%;
    }
    .flex-container{
      width: 100%;
      height: 800px;
      margin: 10vh 0px 0vh 0px;
      position: relative;

      .container-texte-parcours-pro{
        width: 350px;
        margin-top: 38px;
        font-size: 1.1em;
        font-family: "Oswald";
        position: absolute;
        top: 0;

        .experiences{
          position: absolute;
          top : -128px;
          font-family: "Oxygen", sans-serif;
          font-size: 2.85em;
          color : #c2aeba;
          transform: translateY(50px);
          opacity: 0;
        }
        .experiences-z-index{
          position: absolute;
          top : -128px;
          font-family: "Oxygen", sans-serif;
          font-size: 2.85em;
          z-index: 5;
          -webkit-text-stroke : 1px #c2aeba;
          color: transparent;
          transform: translateY(50px);
          opacity: 0;
        }
      }
    }
      
  }

@media (max-width:560px){

  
}

@media (max-width: 1340px){
  .container-texte-parcours-pro.part-2{
    right:0vw !important;
  }
  .container-texte-parcours-pro.part-1{
    left:0vw !important;
  }
}

@media (max-width: 1100px){
  .container-texte-parcours-pro.part-2{
    right:-5vw !important;
  }
}

@media (max-width:960px){
  height: 100% !important;

  .title-parcours-pro{
    font-size: calc(1.5rem + 4.8vw) !important;
    -webkit-text-stroke: 2px whitesmoke !important;
  }
  .flex-container{
    height: 1200px !important;
  }
  .container-parcours-pro{
    height: 100%;
  }
    
  .container-texte-parcours-pro.part-2, .container-texte-parcours-pro.part-1{
    left: 15vw !important;
  }
 
}

@media (max-width:690px){  
  .container-texte-parcours-pro.part-2, .container-texte-parcours-pro.part-1{
    left: 2vw !important;
  }
}

@media (max-width:560px){  
  .title-parcours-pro{
    //font-size: calc(1.5rem + 3.4vw) !important;
    -webkit-text-stroke: unset !important;
    color: whitesmoke !important;
  }
}

@media (max-width:465px){  
  .container-texte-parcours-pro.part-2, .container-texte-parcours-pro.part-1{
    left: -12vw !important;
  }
}


`

export default RotationCard;