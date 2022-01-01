import styles from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {

    return <>
        <header className={styles.mainheader}>
            <div className={"container " + styles.headercontainer}>
                <img src={logo} alt="Laboratorio Nova" className={styles.mainlogo}/>
                <h1 className={styles.maintitle}> Cotizador <span>Laboratorio Nova</span></h1>
            </div>
        </header>
    </>
}

export default Header;
