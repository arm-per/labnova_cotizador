import PerfilLayout from "./PerfilLayout";
import Cotizador from "../../Components/Cotizador/Cotizador";
import Studieslayout from "./Studieslayout"
import Styles from "./Homepage.module.css";

const Homepage = (props) => {

    console.log(props)


    return <>
        <div className={"container " + Styles.layouttop}>
            <PerfilLayout onClick={props.perfiles} data={props.dataPerfil}/>
            <Cotizador name={props.data.name} studies={props.data.studies} onClick={props.remove} clean={props.clean}/>
            <div>
                <Studieslayout onClick={props.add} studies={props.studies}/>
            </div>
        </div>

    </>
}

export default Homepage;
