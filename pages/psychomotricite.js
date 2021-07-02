import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/menu";
import { SmoothScrollProvider } from "../src/SmoothScroll.context";
import { useState } from "react";
import Footer from "../components/footer";
import PsychSection1 from "../components/psyChsection1";
import PsychSection2 from "../components/psychsection2";
import {InView} from "react-intersection-observer";

const psychomotricitePage = () => {
  const [partOneInview, setPartOneInView] = useState(true)
  const [partTwoInview, setPartTwoInView] = useState(false)
  const [partThreeInview, setPartThreeInView] = useState(false)

  return (
    <div>
      <Head>
        <title>Estelle Bétry psychomotricienne Mouriès Alpilles - Psychomotricité - Public - Troubles psychomoteurs - TDAH</title>   
      </Head>

      <SmoothScrollProvider options={{smooth : true, multiplier : 1, smartphone:{smooth : true}, tablet:{smooth:true}}}>
        <Wrapper data-scroll-container>
          <div id='super-container'>
            <div className="menu-container" style={{backgroundColor:`${(partTwoInview ||(partOneInview && partTwoInview)) ? "#28536b" : partOneInview ?"#9f7f92" : partThreeInview ? "#9f7f92" : "#28536b" }`}} data-scroll data-scroll-sticky data-scroll-target="#super-container">
              <nav>
                <Menu color="white" backgroundColor={`${(partTwoInview ||(partOneInview && partTwoInview)) ? "#28536b" : partOneInview ?"#9f7f92" : partThreeInview ? "#9f7f92" : "#28536b" }`}/>
              </nav>
            </div>
            <InView as="div" onChange={(inView, entry)=>setPartOneInView(inView)}>
              <PsychSection1 backgroundColor={`${partTwoInview ? "#28536b":"transparent"}`}/>
            </InView>
            
            <InView as="div" threshold="0.15" onChange={(inView)=>setPartTwoInView(inView)}>
              <PsychSection2 backgroundColor={`${(partTwoInview ||(partOneInview && partTwoInview)) ? "#28536b" : partOneInview ?"transparent" : partThreeInview ? "#9f7f92" : "#28536b" }`} footerInView = {partThreeInview}/>
            </InView>
            
            <div className="separateur" style={{backgroundColor:`${(partTwoInview ||(partOneInview && partTwoInview)) ? "#28536b" : partOneInview ?"#9f7f92" : partThreeInview ? "#9f7f92" : "#28536b" }`}}/>
            <InView as="div" threshold="0.15" onChange={(inView)=>setPartThreeInView(inView)}>
              <Footer color="#9f7f92"/>
            </InView>
            
          </div>
          
        </Wrapper>   
      </SmoothScrollProvider>
    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .separateur{
    width: 100vw;
    height: 25vh;
    margin-top: -1vh;
    transition: background-color 0.5s ease-out;
  }

  div.menu-container{
    position: absolute;
    width: 100%;  
    height: 50px;
    z-index: 10;
    //margin-bottom: 50px;

    nav{
    z-index: 10;
    position : absolute;
    width: 560px;
    left: 15px;
    }
  }


`

export default psychomotricitePage;