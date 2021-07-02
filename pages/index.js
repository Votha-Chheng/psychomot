import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import {SmoothScrollProvider} from '../src/SmoothScroll.context.js'
import styled from 'styled-components'
import Menu from '../components/menu'
import HomeMain from '../components/homemain'
import HomeSectionFirst from '../components/homesectionfirst'
import Footer from '../components/footer'
import {InView} from 'react-intersection-observer'
import HomePresentationSection from '../components/homepresentationsection.js'
import useWindowSize from '../hooks/useWindowSize.js'

export default function Home() { 

  const [menuViolet, setMenuViolet] = useState(false)
  const [menuBleu, setMenuBleu] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const containerRef = useRef(null)

  const size = useWindowSize()

  useEffect(()=>{
    setTimeout(()=>setLoaded(true), 500)
  }, [loaded])

  return (
    <div data-scroll-container>
      <Head>
        <title>Estelle Bétry psychomotricienne diplomée d'état DE à Mouriès</title>   
      </Head>
        {
        !loaded 
        ? (<div></div>)
        :
      <SmoothScrollProvider options={{smooth : true, multiplier : 1, smartphone:{smooth : true}, tablet:{smooth:true}, firefoxMultiplier: 1000}}>
          <Wrapper >         
            <div className='containerRef' ref={containerRef} data-scroll-speed="1" data-scroll-position="top">
              <div className="menu-container" 
                data-scroll 
                data-scroll-sticky 
                data-scroll-target=".containerRef"
              >
                <nav>
                  <Menu color="white" backgroundColor={`${(menuViolet ) ?"#9f7f92" : (!menuViolet && menuBleu) ? "#28536b": size.width<900? "#9f7f92" : "transparent"}`} />
                </nav>
              </div>
              
              <HomeMain data-scroll-section />

              
              <InView as="div" className="homeSectionTwo" threshold='0.35' onChange={(inView, entry)=> setMenuViolet(inView)}>
                <HomeSectionFirst backgroundColor={`${(!menuViolet && menuBleu) ? "#28536b": "transparent"}`} data-scroll-section />
              </InView>

              <InView as="div" style={{marginTop:"-1px"}} threshold='0.1' onChange={(inView, entry)=> setMenuBleu(inView)}>
                <HomePresentationSection data-scroll-section sectionInView={menuBleu}/>
              </InView>

              <InView as="div"  onChange={(inView, entry)=>{
                
                setMenuViolet(inView)
                setFooterInView(inView)
              }}>
                <Footer data-scroll-section color={`${footerInView?"#9f7f92" :"black"}`}/>
              </InView> 
            </div>
          </Wrapper>
      </SmoothScrollProvider>
      }
      
    </div>
  )
}

const Wrapper = styled.div`
  margin : 0;
  position: relative;
  width: 100%;
  z-index: 2;

  div.menu-container{
    z-index: 5;
    position: absolute;
    width: 100%;  
   
  }

  nav{
    z-index: 3;
    position : absolute;
    width: 560px;
    left: 15px; 
  }

`
