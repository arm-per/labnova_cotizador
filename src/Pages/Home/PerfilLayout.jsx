import CheckupCard from "../../Components/CheckupCard/CheckupCard";
import Styles from "./Perfillayout.module.css";
import StyledButton from "./StyledButton";
import forward from "./forwardbutton.svg";
import {getPerfiles} from "../../DataProvider/Datasets";
import {useEffect, useState} from "react";



const PerfilLayout = ({onClick, data}) => {

    const perfiles = data;
    /*const [perfiles, setPerfiles] = useState([]);*/
    const [count, setCount] = useState(0);

    const MoveCarrusel = () => {
        const movement = perfiles.length;
        const steps = movement / 4;
        const stepsToMove = Math.ceil(steps)

        if(count < stepsToMove -1)
            setCount(count + 1)

        if(count >= stepsToMove -1 )
            setCount(0)

        console.log(count)

    }

    /*useEffect(()=> {
        getPerfiles()
            .then(res => setPerfiles(res))
            .catch(err => console.error(err))
    }, [setPerfiles])*/

    const moving = {
        "transition": "all 1s",
        "transform": `translateX(-${count}00%)`
    }
    return <>
        <div className={Styles.carrusel}>
        <section className={"container " + Styles.mainlayout}>
            <div style={moving} >
            {
                perfiles.map((el, index) => {
                    return ( <CheckupCard
                        key={`checkup-${index}`}
                        name={el.name}
                        labs={el.labs}
                        price={el.price}
                        regularPrice={el.regularPrice}
                        id={index}
                        onClick={onClick}
                    />)
                })
            }
            </div>
        </section>
            <StyledButton onClick={MoveCarrusel}><img src={forward} alt=""/></StyledButton>
        </div>
    </>
}

export default PerfilLayout;
