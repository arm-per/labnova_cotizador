import {Page, Text, View, Document, Image, StyleSheet} from "@react-pdf/renderer";
import img from "./logo.png";
import fb from "./facebook.png";
import ig from "./instagram.png";
import ph from "./phone-call.png";

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        padding: 20,
        border: "none"
    },
    tableRow: {
        width: '100%',
        borderWidth: .5,
        display: 'flex',
        flexDirection: 'row',
    },
    tableRowMain: {
        width: '100%',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#cccccc',
        textAlign: 'center',
    },
    tableCellA :{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 12,
        border: .5,
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        width: 131,
        maxWidth: 131,
    },
    tableCellB :{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 12,
        border: .5,
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        maxWidth: 342,
        width: 342,
    },
    tableCellC :{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 12,
        border: .5,
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        maxWidth: 100,
        textAlign: 'center',
    },
    tableCellP :{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-end',
        justifyContent: 'flex-start',
        fontSize: 14,
        border: .5,
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        textAlign: 'right',
    },
    imgStyle: {
        width: 100,
        height: 100,
    },
    headerView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginLeft: 20,
        fontWeight: 500
    },
    paciente: {
        fontSize: 14,
        marginTop: 10,
        fontWeight: 500,
    },
    fecha: {
        fontSize: 12,
        marginTop: 10,
    },
    icon: {
        maxWidth: 17,
        objectFit: 'contain',
        marginRight: 5,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
    },
    infoContainerSon: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
        width: 190,
        maxWidth: 190,
    },
    infoContainerSon2: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
        width: 140,
        maxWidth: 140,
    },
    list: {
        marginTop: 10,
        fontSize: 10,
        color: "red",
    }

})

const DocumentView = (props) => {

    const price = props.data.length > 0? props.data.map(el => el.price): null;
    const currentPrice = props.data.length > 0 ? price.reduce((acc, item) => acc = acc + item): null;
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const ano = fecha.getFullYear();


    return <>
        <Document>
            <Page size={'LETTER'} style={styles.page}>
                <View style={styles.headerView}>
                    <Image style={styles.imgStyle} src={img}/>
                    <View style={styles.info}>
                        <Text>
                            COTIZACIÓN DE ESTUDIOS DE LABORATORIO
                        </Text>
                        <Text style={styles.paciente}>
                            Paciente: {props.nombre}
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRowMain}>
                    <View style={styles.tableCellA}>
                        <Text>Estudio</Text>
                    </View>
                    <View style={styles.tableCellB}>
                        <Text>Condiciones</Text>
                    </View>
                    <View style={styles.tableCellC}>
                        <Text>Costo</Text>
                    </View>
                </View>
                    {props.data.map((el, index) => {
                       return <View key={index} style={styles.tableRow}>
                           <View style={styles.tableCellA}>
                               <Text>{el.name}</Text>
                               {/*
                                   el.labs? el.labs.map(el=> <Text style={styles.list}>{el}</Text>): null
                               */}
                           </View>
                           <View style={styles.tableCellB}>
                               <Text>{el.description}</Text>
                           </View>
                           <View style={styles.tableCellC}>
                               <Text>${el.price}</Text>
                           </View>
                        </View>
                    } )}
               <View style={styles.tableCellP}>

                   <Text>Total: ${currentPrice}</Text>
                   <Text style={styles.fecha}>Cotizado el {dia}/{mes + 1}/{ano}</Text>

               </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoContainerSon2}>
                        <Image style={styles.icon} src={ph}/>
                        <Text>
                            618 811 72 30
                        </Text>
                    </View>
                    <View style={styles.infoContainerSon}>
                        <Image style={styles.icon} src={fb}/>
                        <Text>
                            facebook.com/labnovamx
                        </Text>
                    </View>
                    <View style={styles.infoContainerSon}>
                        <Image style={styles.icon} src={ig}/>
                        <Text>
                            instagram.com/laboratorionovamx
                        </Text>
                    </View>
                </View>

            </Page>
        </Document>

    </>
}

export default DocumentView;
