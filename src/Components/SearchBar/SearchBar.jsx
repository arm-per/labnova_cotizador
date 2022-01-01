import styles from "./Searchbar.module.css";

const SearchBar = (props) => {

    console.log(props)
    return <>
        <section className={styles.searchbackground}>
            <div className={styles.container}>
                <input className={styles.input} type="text" placeholder="introduce tu nombre" onChange={props.change}/>
                <input className={styles.input} type="search" placeholder="¿Qué estudio buscas?" onChange={props.search}/>
            </div>
        </section>
    </>
}

export default SearchBar;
