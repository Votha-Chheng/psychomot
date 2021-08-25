import styled from "styled-components";

const Trait = ({bgColor, width, margin, height}) => {
  return (
    <TraitStyle style={{backgroundColor : bgColor, width, margin, height}}/>
  );
}

Trait.defaultProps = {
  bgColor: "black",
  width : "250px",
  margin : "0px auto",
  height : "3px"
}

const TraitStyle = styled.div`
  border-radius : 3px;
  z-index :-5;
`

export default Trait;