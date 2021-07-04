import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/menu";
import { SmoothScrollProvider } from "../src/SmoothScroll.context";
import Footer from "../components/footer";
import {InView} from "react-intersection-observer";
import PratiqueSection1 from "../components/pratiquesection1";
import PratiqueSection2 from "../components/pratiquesection2";
import { useEffect, useState } from "react";


const pratique = () => {
  const [partTwoInview, setPartTwoInView] = useState(false)
  const [partThreeInview, setPartThreeInView] = useState(false)

  const firstArray = Array.from({length : 31}).map((currentElement, i) => i<10 ? "0"+(i) : String(i))

  const numberArray = firstArray.splice(1,31)
  const numberArray2 = ["33", "38", "42", "46", "48", "50"]

  return (
    <div>
      <Head>
        <title>Estelle Bétry psychomotricienne Mouriès Alpilles - Psychomotricité - Pratique - programme Barkley - TDAH - Atelier relaxation - bilan psychomoteur</title>   
      </Head>

        <SmoothScrollProvider options={{smooth : true, multiplier : 1, firefoxMultiplier: 1000}}>
          
            <Wrapper data-scroll-container>
              <div id='super-container-2'>
                <div className="menu-container" style={{backgroundColor:"#9f7f92"}} data-scroll data-scroll-sticky data-scroll-target="#super-container-2">
                  <nav>
                    <Menu color="white" backgroundColor="#9f7f92"/>
                  </nav>
                </div>


                <PratiqueSection1 data-scroll-section />

                <div className="separation" style={{backgroundColor:`${partTwoInview? "#9f7f92": "transparent"}`}} >
                  <div className="frame-frise">
                    <div className="img-contain">
                      {
                        numberArray2.map((number, index)=>(
                          <img key={index} className="image-frise-2" src={`/images/anim/20210611_1123${number}.jpg`} width="400" height="220" style={{position:"absolute", top:"0", left:"0", zIndex:`${7-index}`}}/>
                        ))
                      }
                    </div>
                    <div className="img-contain" style={{position:"relative", width:'400px', height:'220px', top:"0", left:"0"}}>
                      {
                        numberArray.map((number, index)=>(
                          <img key={index} className="image-frise" src={`/images/anim/20210611_111927_0${number}.jpg`} width="400" height="220" style={{position:"absolute", top:"0", left:"0", zIndex:`${30-index}`}}/>
                        ))
                      }
                    </div>  
                    <div className="img-contain">
                      <img src="/images/20210611_105207.jpg" alt="bilan-psy" width="400"/>
                    </div>
                  </div>
                  <div style={{textAlign:'center', color:"#28536b", fontFamily:"'Oswald', sans-serif", fontSize:"1.1em", fontWeight:"bold"}}>
                    <small>
                      Quelques exemples de types de tests pouvant être utilisés durant un bilan.
                    </small>
                  </div>
                </div>
                

                <InView style={{position:"static", height:"auto"}} threshold='0.1' as="div" onChange={(inView)=>setPartTwoInView(inView)}>
                  <PratiqueSection2 partTwoInview={partTwoInview} backgroundColor={`${partTwoInview || partThreeInview ? "#9f7f92" : "transparent"}`}  />
                </InView>
                
                <div className="separateur" style={{backgroundColor:"#9f7f92"}}/>
                <InView as="div" threshold="0.15" onChange={(inView)=>setPartThreeInView(inView)} style={{height:"100%"}}>
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

  #super-container-2{
    min-height: 100%;
  }

  .separateur{
    width: 100vw;
    height: 25vh;
    margin-top: -1px;
  }

  div.menu-container{
    position: relative;
    width: 100%;  
    height: 50px;
    z-index: 150;

    nav{
    z-index: 10;
    position : absolute;
    width: 750px;
    left: 15px;
    }
  }

  .separation{
    width:100%; 
    margin:0px auto -1px;
    transition : background-color 0.5s ease-out;
    padding-bottom: 22vh;
  }

  .frame-frise{
    width:100%; 
    height:100%; 
    //overflow:hidden; 
    display:flex; 
    flex-wrap: wrap;
    justify-content:space-evenly;
    transition: background-color 0.5s ease-out;

    .img-contain{
      position :relative;
      width:400px;
      height:220px;
      top:0;
      left:0;
      overflow:hidden;
      border: 5px solid #28536b;
      z-index: -1;
      margin-top: 20px;

      img{
        filter: brightness(100%) contrast(150%);
      }

    }
  }
@media (width:360px) and (height:640px){
  height: 11280px;
} 
@media (width:411px) and (height:731px){
  height: 11055px;
}   
@media (width:411px) and (height:823px){
  height: 11385px;
}
@media (width:375px) and (height:667px){
  height: 11270px;
}
@media (width:414px) and (height:736px){
  height: 11030px;
}
@media (width:375px) and (height:812px){
  height: 11830px;
}
@media (width:768px) and (height:1024px){
  height: 10505px;
}
@media (width:1024px) and (height:1366px){
  height: 10475px;
}
@media (width:540px) and (height:720px){
  height: 10455px;
}  
@media (width:280px) and (height:653px){
  height: 12375px;
}
@media (width:360px) and (height:740px){
  height: 9985px;
}



`

export default pratique;