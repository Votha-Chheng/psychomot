import styled from "styled-components";
import { useRouter} from'next/router'
import { useState } from "react";

const Menu = ({color, fontWeight, backgroundColor}) => {

  const [menuOn, setMenuOn] = useState(false)

  const history = useRouter()

  return (
    <div style={{position:"relative"}}>
      <MenuStyle style={{color, fontWeight, backgroundColor, opacity:`${menuOn? "1":"0"}`, transform:`translateY(${menuOn ?"0%":"-100%"})`}}>
        <li style={{borderBottom:`${history.pathname === "/psychomotricite" ? "2px solid white" : "none"}`}}><a href='/psychomotricite'>Psychomotricité</a></li>
        <li style={{borderBottom:`${history.pathname === "/pratique" ? "2px solid white" : "none"}`}}><a href='/pratique'>En pratique</a></li>
        <li style={{borderBottom:`${history.pathname === "/ateliers" ? "2px solid white" : "none"}`}}><a href='/ateliers'>Ateliers</a></li>
        <li style={{borderBottom:`${history.pathname === "/infos" ? "2px solid white" : "none"}`}}><a href='/infos'>Infos & contact</a></li> 
      </MenuStyle>
      <DivStyle style={{color, fontWeight, backgroundColor}}>
        <div>
          <a href='/'>Estelle Bétry</a>
        </div>
          <div className="burger-container" style={{textDecoration:"none"}} onClick={()=>setMenuOn(prev=>!prev)}>
            <i className="fas fa-bars burger" style={{display:`${menuOn ? "none":"block"}`}}/>
            <i className="fas fa-times close" style={{display:`${!menuOn ? "none":"block"}`}}/>
          </div>

          <ul>
            <li style={{borderBottom:`${history.pathname === "/psychomotricite" ? "2px solid white" : "none"}`}}><a href='/psychomotricite' as='/psychomotricite'>Psychomotricité</a></li>
            <li style={{borderBottom:`${history.pathname === "/pratique" ? "2px solid white" : "none"}`}}><a href='/pratique'>En pratique</a></li>
            <li style={{borderBottom:`${history.pathname === "/ateliers" ? "2px solid white" : "none"}`}}><a href='/ateliers'>Ateliers</a></li>
            <li style={{borderBottom:`${history.pathname === "/infos" ? "2px solid white" : "none"}`}}><a href='/infos'>Infos & contact</a></li> 
          </ul>  
      </DivStyle>
    </div>

  );
}
const MenuStyle = styled.div`
  margin: 0px 0px 0px -15px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-family : "Oxygen", serif;
  background-color : black;
  transition : background-color 0.5s ease-out;
  width: 100vw;
  left: 0;
  top: 45px;
  transition : all 0.3s ease-out;
  position: absolute;
  z-index: -1;

  li{
    list-style-type: none;
  }
`

const DivStyle = styled.div`
  position: static;
  margin: 0px 0px 0px -15px;
  padding-left :0;
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  font-size : 1.2em;
  font-family : "Oxygen", serif;
  width: 100vw;
  transition : background-color 0.5s ease-out;
  z-index: 0;
  
  div {
    font-family: 'Marck Script', "cursive";
    font-size : 1.3em;
    padding : 10px 0px 0px;
    text-decoration: underline;
    line-height: 1.5em;
    margin-left: 10px;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-out;
    }
  }

  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px 0px 0px;
    width: 620px;
    margin-top: 15px;

    li{
      padding : 0px 10px;

      &:hover{
        color: #f4fec1;
      }
    }
  }
  .burger-container{
    margin-right: 25px;
    height: auto;
    padding-bottom: 0px;
    display: none;
  }
  .burger, .close{
    cursor: pointer;
    height: 10px;
  }
@media(max-width:900px){
  .burger-container{
    display: block;
  }
  ul{
    display: none;
  }
}
`
Menu.defaultProps = {
  backgroundColor: "transparent",
  fontWeight : "none"
}

export default Menu;