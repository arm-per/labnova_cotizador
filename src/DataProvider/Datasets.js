import axios from "axios";
const url = "https://webapi.labnova.com.mx"

const getLabs = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}labs`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

const getPerfiles = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}perfiles`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export {
    getLabs,
    getPerfiles
}
