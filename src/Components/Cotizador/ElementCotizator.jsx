import styled from "styled-components";
import Styles from "./Cotizador.module.css"

const ButtonRemove = styled.button`
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #E6525D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: #C50715;
  }
  
  &:active{
    transform: scale(.95);
  }
  
  @media (prefers-color-scheme: dark){
   &{
   background: #C50715;
   }
    &:active{
      background-color: #E6525D;
    }
    &:hover{
      background: #DB0817;
    }
}
`

const ElementCotizator = (props) => {


    return <>
        <div className={Styles.addedStudio}>
            <div>
                <span>{props.estudio}</span>
            </div>
            <div className={Styles.addSimbol}>
                {props.precio}
            </div>
            <div>
                <ButtonRemove onClick={props.onClick} id={props.id}>
                    X
                </ButtonRemove>
            </div>
            <div className={Styles.description}>
                {props.indicaciones}
            </div>
        </div>
    </>
}

export default ElementCotizator;
