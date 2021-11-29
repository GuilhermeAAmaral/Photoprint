import { useEffect, useState } from "react";
import axios from 'axios'
import { KEY_API } from '../constantes/urls'

//hook personalizado para realizar algumas requisições get

const useRequestData = (initialData, url) => {

    const [data, setData] = useState(initialData)

    useEffect (() => { 
        
        axios.get (url, {
            headers: {
                Authorization: KEY_API
            }
        })
        .then ((res) => {
            setData (res.data.photos)
        })

        .catch ((err) => {
            console.log (err)
            alert ('Ocorreu um erro, tente novamente')
        })
    }, [url])

    return (data)
}

export default useRequestData
