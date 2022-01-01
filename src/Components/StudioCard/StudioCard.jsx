import styles from "./Studiocard.module.css";
import { useState} from "react";



const StudioCard = (props) => {

    const [myclass, setMyclass] = useState(false)

    const classHandler = () => {
        const updatedMyclass = !myclass;
        setTimeout(()=> setMyclass(false), 10000)
        return setMyclass(updatedMyclass)
    }


    return <>
        <article className={styles.maincard}>
            <div className={styles.titlearea}>
                <h2 className={styles.cardtitle}>{props.title}</h2>
            </div>
            <div className={styles.prices}>
                <span>Costo</span>
                <span className={styles.addSign}>{props.price}</span>
            </div>
            <div className={styles.buttonarea}>
                <button className={styles.rules} onClick={classHandler}>Indicaciones</button>
                <button className={styles.button} onClick={props.onClick} id={props.id}>Agregar</button>
            </div>
            <section className={`${styles.indicaciones} ${myclass ? styles.show : ''}`}>
                <button className={styles.indicacionesButton} onClick={classHandler}>▼ Cerrar</button>
                <p>{props.indications}</p>
            </section>
        </article>
    </>
}

export default StudioCard;
