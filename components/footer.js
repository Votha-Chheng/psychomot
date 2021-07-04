import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import  {InView} from "react-intersection-observer";
import useWindowSize from "../hooks/useWindowSize";

const Footer = ({color}) => {
  const [isShown, setIsShown] = useState(false)
  const [adresseHeight, setAdresseHeight] = useState(0)
  const [cardInView, setCardInview] = useState(false)

  const adresse = useRef(null)

  const size = useWindowSize()

  useEffect(() => {
    setAdresseHeight(adresse.current.clientHeight)
  },[size])

  return (
    <DivWrapper>
      <div className={`banner-adresse ${isShown ? 'show-address' : ''}`} style={{top:`${-12-adresseHeight}px`}}>
        <div ref={adresse} className={`adresse ${isShown ? 'show-address' : ''}`} onClick={()=>setIsShown(prev=>!prev)} onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)}>
          Cabinet libéral situé à :<br/>
          <span style={{fontStyle:'italic'}}>Espace paramédical du Devenson<br/>
          Route de Maussane D17<br/>
          13890 Mouriès &nbsp; <i className={`fas fa-caret-${isShown?'left':'right'}`} style={{transform:'translateY(2px)'}}/></span>
        </div>
        <div className={`iframe-container ${isShown ? 'show-address' : ''}`} onClick={()=>setIsShown(prev=>!prev)}  onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4851.865112696682!2d4.856557238622474!3d43.69108858066278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab1fec3575c9db61!2sEspace%20param%C3%A9dical%20du%20Devenson%20Alpilles%20Mouries%20Kinesitherapeute%2013!5e0!3m2!1sfr!2sfr!4v1619618065515!5m2!1sfr!2sfr" width="350" height="400" style={{border : "none"}} allowFullScreen="" loading="lazy"/>
        </div>     
      </div>
      <div className='contact-container'>
        <h2>
          Contact
        </h2>
        <h3 style={{fontSize:"1.3rem"}}>Pour tout renseignement complémentaire ou demande de devis, n'hésitez pas :</h3>
        <InView as="div" className={`${cardInView ? 'card-contact in-view':'card-contact'}`} onChange={(inView)=>setCardInview(inView)}>
          <div className='telephone'>
            <a href="tel:0644851800"><img src='/images/telephone-svgrepo-com.svg' alt='telephone icone' width="30vw" style={{transform:'translateY(3px)'}}/>
              <span style={{fontSize:"2.2vh"}}>&nbsp; 06 44 85 18 00</span>
            </a>
          </div>
          <div className='message'>
            <img src='/images/email-svgrepo-com.svg' alt="envoyer un e-mail" width='30vw' style={{transform:'translateY(5px)'}}/>
            <a href='mailto:stella.betry@gmail.com'><span style={{fontSize:"2.2vh"}}>&nbsp; Me contacter par e-mail.</span></a>
          </div>
          <div className='accessibility'>
            <i className="fas fa-wheelchair fa-2x handicap" style={{transform:'translateY(-5px)'}}/><span style={{fontSize:"2.2vh"}}>Le cabinet est accessible aux personnes à mobilité réduite (PMR).</span>
          </div>
          
          <div className='adresse-icone'>
            <i className="fas fa-map-marked-alt fa-2x adresse" style={{transform:'translateX(-5px)', marginRight:"5px", }}/>
            <span><a href="https://www.google.com/maps/place/Espace+param%C3%A9dical+du+Devenson+Alpilles+Mouries+Kinesitherapeute+13/@43.693547,4.854739,15z/data=!4m2!3m1!1s0x0:0xab1fec3575c9db61?sa=X&ved=2ahUKEwi9oMbBwMnxAhUHmRQKHcehC5wQ_BIwC3oECDsQBQ" target='_blank'>Espace paramédical du Devenson<br/>
            <em>Route de Maussane D17<br/>
            13890 Mouriès &nbsp;</em></a></span>
          </div>
        </InView> 
      </div>
      <div id="footer-copyright">Site crée par Votha Chheng &copy; Juillet 2021</div>
    </DivWrapper>
      
  );
}

const DivWrapper = styled.div`
  min-height : 60vh;
  background-color : white;
  position: relative;

  #footer-copyright{
    padding : 5px;
    width : 100%;
    text-align : center;
    position : absolute;
    bottom : 0px;
    left : 50%;
    transform: translateX(-50%);
    color : white;
    background-color : #9f7f92;
    font-family: 'Oswald', sans-serif;
  }

  .contact-container{
    height : 100%;
    position : absolute;
    top : 2vh;
    left : 1vw;
    margin-right : 1vw;

    h2{
      margin-top : 0;
      margin-bottom : 0;
      font-size : 10vh;
      letter-spacing : 0.2px;
      font-family: 'Oxygen', 'cursive';
      text-shadow : 0px 3px 5px #cccccc;
      color : #745869
    }
    h3{
      margin : 0px 0px 15px;
      color :#967388;
    }
    .card-contact.in-view{
      transform : translateY(0%);
      opacity : 1;
    }
    .card-contact{
      padding:20px 0px;
      border : 2px solid #745869;
      height : auto;
      font-family: 'Oswald', sans-serif;
      transform : translateY(50%);
      transition : transform 0.8s ease-out, opacity 1s ease-out;
      opacity : 0;
    }
    .telephone, .message, .adresse-icone, .accessibility{
      margin :15px 25px;
      font-weight : bold;
      color : #967388;
    }
    .message span{
      cursor: pointer;
    }
    .adresse-icone{       
      display:none;

      a:hover, a:focus{
        filter : brightness(125%) !important;
        text-decoration : underline;
      }
      i{
        color: #745869;
      }
      span{
        font-size : 2.2vh;
      }
    }
    .accessibility{
      display : flex;
      i{
        margin-right : 10px;
        color: #745869;
      }
    }
  }

  
  .banner-adresse{
    display : flex;
    position : absolute;
    right : -360px;
    transition : all 1s ease-out;
    padding : 10px;
    background-color : transparent;
    max-height : 100%;

    .adresse{
      color: white;
      font-family: 'Oswald', sans-serif;
      border-radius : 10px;
      margin-right : 1px;
      padding : 5px;
      font-size: 1.2em;
      height : 6.6em;
      transition : all 1s ease-out;
      transition-delay : 0.5s;
      transition-property : background-color, color;

      
    }
    .iframe-container{
      overflow : hidden;
      border-radius : 5px;
      transform : translateY(-50%);
      transition : all 0.6s ease-out;
      max-height : 0;
    }
    
  }
  .iframe-container.show-address{
    transform : translateY(0);
    max-height : 385px;
  }
  .banner-adresse.show-address{
    transform : translateX(-350px);
  }
  .adresse.show-address{
    background-color : white;
    color : #7f5f72 ;
  }

  @media (max-width: 1160px){
    height : 750px !important;

    .banner-adresse{
      display : none;
    }
    .adresse-icone{
      display :flex !important;
    }
  }
  /* @media (max-height: 700px){
    height : 70vh;
  } */

`
export default Footer;