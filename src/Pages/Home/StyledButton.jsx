import styled from "styled-components";

const StyledButton = styled.button`
  width: 40px;
  height: 85px;
  background-color: #91C01B;
  border: none;
  border-radius: 0 100rem 100rem 0;
  cursor: pointer;
  
  &:hover{
    background-color: #A7CD49;
  }
  
  &:active{
    transform: scale(.95);
  }
`

export default StyledButton;
