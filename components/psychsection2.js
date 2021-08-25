import {gsap} from "gsap"
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import useWindowSize from '../hooks/useWindowSize'
import TableauTroubles from "./tableautroubles";
import TableauTroublesAdultes from "./tableautroublesadultes";
import Trait from "./trait";

const PsychSection2 = ({backgroundColor}) => {

  const [titleSectionWidth, setTitleSectionWidth] = useState(0)
  const [sectionInView, setSectionInView] = useState(false)

  const size = useWindowSize()

  const titleSection = useRef(null)


  useEffect(()=>{
    setTitleSectionWidth(titleSection.current.offsetWidth)
  }, [size])


  useEffect(() => {
    if(sectionInView){
      gsap.to(".h3-title", {
        y:0,
        duration : 1.2,
      })
      gsap.to(".trait", {
        x:0,
        duration : 1.2,
        delay : 0.5
      })
    }
  }, [sectionInView])

  return (
    <SectionWrapper style={{margin:"-1px 0px 0px", backgroundColor}}>
      <InView as='div' threshold="0.15" onChange={(inView, entry)=> inView ? setSectionInView(true) : ""} style={{perspective: "800px", perspectiveOrigin:"center"}}>
        <h3 className='h3-title' ref={titleSection}>
          <span className={`${sectionInView ? "webstroke-white" : ""}`}>Pour quels troubles ?</span>
          <div className='trait'>
            <Trait width={titleSectionWidth} bgColor="#9f7f92" height="8px"/>
          </div> 
        </h3>
        <div className='sub-title'>Les troubles rele&shy;vant des soins psy&shy;cho&shy;mo&shy;teurs peu&shy;vent être clas&shy;sés selon le type de public touché.</div>

        <div id="troubles-enfant" style={{ paddingTop:"100px"}}>
          <TableauTroubles/>
        </div>  

        <div id="troubles-adulte" style={{ paddingTop:"100px"}}>
          <TableauTroublesAdultes/>
        </div>
               
      </InView>
      
    </SectionWrapper>
  );
}


const SectionWrapper = styled.section`
  transition: background-color 0.5s ease-out;
  padding-top : 7vh;
  padding-bottom : 50vh;

  .h3-title{
    padding: 0px 10px;
    margin : 10vh auto;
    text-transform: uppercase;
    color: transparent;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1.5px;
    text-align : center;
    font-size :clamp(4em, 7vw, 7.5em);
    width : auto;
    height : auto;
    white-space:nowrap;
    -webkit-text-stroke : 4px whitesmoke;
    transform : translateY(100%);

    .trait{
      transform : translateX(-150%);
      margin-top :50px;
    }

  }

  .sub-title{
    color: whitesmoke;
    width : 90%;
    margin: 0 auto;
    font-size : 1.8em;
    font-family: 'Oxygen', sans-serif; 
    text-indent: 30px;
    text-align: justify;
    line-height: 3rem;
  }
  @media screen and (max-width:840px){
    .h3-title{
      -webkit-text-stroke: unset;
      color: whitesmoke;
      font-size: calc(1.2rem + 3.5vw);  
    }
  }
  @media screen and (max-width:770px){
    .h3-title{
      -webkit-text-stroke: unset;
      color: whitesmoke;
      font-size: calc(1.1rem + 2.2vw);  
    }
    .sub-title{
      font-size : 1.4rem;
      line-height: 2rem;
    }
  }
  
  

`

export default PsychSection2;