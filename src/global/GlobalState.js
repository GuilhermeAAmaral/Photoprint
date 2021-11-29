import React, {useState} from 'react'
import GlobalContext from './GlobalContext'
import { BASE_URL, KEY_API } from '../constantes/urls'
import useRequestData from '../hooks/useRequestData'
import axios from 'axios'

//estado gloal da aplicação

const GlobalState = (props) => {

    const tendencies = useRequestData ([], `${BASE_URL}/curated`)

    const [inputSearch, setInputSearch] = useState("")
    const [listSearch, setListSearch] = useState([])

    const search = () => {

        axios.get(`${BASE_URL}/search`, {

            params: { 
                query: inputSearch
            },

            headers: {
                Authorization: KEY_API,
                
            }
        })
        .then((res) => {
            console.log(res.data)
            setListSearch (res.data.photos)
            setInputSearch ("")
        })
        .catch((err) => {
            console.log(err.data)
        })
    }

    const state = {inputSearch, setInputSearch, listSearch}
    const setters = {}
    const requests = {tendencies, search}

    return (

        <GlobalContext.Provider value = {{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
        
    )
}

export default GlobalState