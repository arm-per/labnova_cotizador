import styles from "./Checkupcard.module.css";
import deco from "./deco.svg";

const CheckupCard = ({name, price, id, labs, regularPrice, onClick}) => {
    return <>
        <article className={styles.checkupcard}>
            <span className={styles.perfil}>Perfil</span>
            <img src={deco} alt="" className={styles.deco}/>
            <h1 className={styles.title}>{name}</h1>
            <div>
                <ul className={styles.labstudies}>
                    {
                        labs.map((el, index) => {
                            return <li key={`perfil-lab-${index}`}>{el}</li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.price}>
                <span>Costo</span>
                <span>$ {price}</span>
            </div>
            <div className={styles.save}>
                <span>Usted ahorra</span>
                <span>$ {regularPrice - price}</span>
            </div>
            <div className={styles.buttoncontainer}>
            <button className={styles.button} id={id} onClick={onClick}>Agregar</button>
            </div>
        </article>
    </>
}

export default CheckupCard;
