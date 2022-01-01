import StudioCard from "../../Components/StudioCard/StudioCard";
import Styles from "./Studieslayout.module.css";

const Studieslayout = ({studies, onClick}) => {

    console.log(studies)
    return <>
        <div className={Styles.layout}>
            {
                studies.map((el, index) => {
                   return <StudioCard key={index} id={index} title={el.name} price={el.price} indications={el.description} onClick={onClick}/>
                })
            }
        </div>
    </>
}

export default Studieslayout;
