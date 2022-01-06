import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Homepage from "./Pages/Home/Homepage";
import {useEffect, useState} from "react";
import {getLabs, getPerfiles} from "./DataProvider/Datasets";

function App() {

    const [data, setData] = useState({
        name: "",
        studies: [],
    })

    const [mainStudies, setMainStudies] = useState([])
    const [filtered, setFilter] = useState([])
    const [perfiles, setPerfiles] = useState([]);

    useEffect(()=> {
        getLabs()
            .then(res => {
                setMainStudies(res)
                setFilter(res);
            })
            .catch(err => console.error(err));
        getPerfiles()
            .then(res => {
                setPerfiles(res);
            })
            .catch(err => console.error(err))
    }, [setMainStudies, setPerfiles])


    const changeDataHandler = ({currentTarget}) => setData({...data, name: currentTarget.value});

    const removeData = ({target: {id}}) => {
        const updatedData = [...data.studies];
        updatedData.splice(id, 1);

        return setData({...data,  studies: updatedData})
    }

   /* const addData = ({target: {parentNode: {parentNode}}}) => {
        const currentData = parentNode
        const updatedData = [...data.studies, currentData];
        return setData({...data, studies: updatedData})
    }*/

    const addData = ({target: {id}}) => {
        const updatedData = [...data.studies, mainStudies[id]];
        return setData({...data, studies: updatedData});
    }

    const addPerfil = ({target: {id}}) => {
        const updatedData = [...data.studies, perfiles[id]];
        return setData({...data, studies: updatedData});
    }


    const clearData = () => {
        const updatedData = [];
        return setData({...data, studies: updatedData})
    }

    const handleSearch = ({target: {value}}) => {
        setFilter(
            mainStudies.filter(element => element.name.toUpperCase().includes(value.toUpperCase()))
        );
        //catalogo.filter(item => item.product_name.toUpperCase().includes(value.toUpperCase()))
    }


    console.log(data.studies)
  return (
    <>
        <Header/>
        <SearchBar change={changeDataHandler} search={handleSearch}/>
        <Homepage data={data} studies={filtered} add={addData} dataPerfil={perfiles} remove={removeData} clean={clearData} perfiles={addPerfil}/>

    </>
  );
}

export default App;

/*<PDFDownloadLink document={<DocumentView data={data.studies}/>} filename='CotizacionNova.pdf'>
    {({blob, url, loading, error}) =>  loading ? 'Loading document...' : 'Donwload now!'}
</PDFDownloadLink>*/

/* <PDFViewer>
            <DocumentView data={data.studies} nombre={data.name}/>
        </PDFViewer>
*/
