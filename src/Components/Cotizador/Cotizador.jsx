import Styles from "./Cotizador.module.css";
import React from "react";
import ElementCotizator from "./ElementCotizator";
import {PDFDownloadLink} from "@react-pdf/renderer";
import DocumentView from "../../Pages/DocumentView/DocumentView";


const Cotizador = (props) => {

console.log(props)
   /* const removeItems = ({target: {id}}) => {
        const updatedItems = [...cotizaciones];
        updatedItems.splice(id, 1);

        return setCotizaciones(updatedItems)
    }*/
    const elements = props.studies;
        console.log(elements)
    const currentPrice = elements.map(el => el.price);

    /*<PDFDownloadLink document={<DocumentView data={data.studies}/>} filename='CotizacionNova.pdf'>
{({blob, url, loading, error}) =>  loading ? 'Loading document...' : 'Donwload now!'}
</PDFDownloadLink>*/



    return (<>
        <div className={Styles.cotizator}>
            <div className={Styles.namecontainer}>
                <h3 className={Styles.name}>{props.name? props.name : "Introduzca su nombre"}</h3>
            </div>
            <div className={Styles.infocontainer}>
                <div className={Styles.resumentitle}>
                    <p>Resumen</p>
                </div>
                <div id="studiesArea" className={Styles.studiesarea}>
                    {elements.length > 0 ? elements.map((el, index)=> <ElementCotizator
                        onClick={props.onClick}
                        key={index}
                        id={index}
                        estudio={el.name}
                        precio={el.price}
                        indicaciones={el.description}
                    />) : <p style={{lineHeight: "1.5", marginBlock: '1rem', textAlign: 'center'}}>Aun no se han agregado estudios o perfiles.</p>}
                </div>
                <div className={Styles.pricearea}>
                    <span>
                        Total
                    </span>
                    <span className={Styles.addSimbol}>
                         {currentPrice.length>0? currentPrice.reduce((acc, item) =>{
                             return acc = acc + item;
                         }) :0}
                    </span>
                </div>
                <div className={Styles.buttonarea}>
                    <PDFDownloadLink document={<DocumentView data={props.studies} nombre={props.name}/>} filename='CotizacionNova.pdf'>
                        {({blob, url, loading, error}) =>  loading ? 'Cargando cotización' : 'Guardar'}
                    </PDFDownloadLink>
                </div>
                <div className={Styles.clear}>
                    <button onClick={props.clean}>
                        Limpiar estudios
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Cotizador;

