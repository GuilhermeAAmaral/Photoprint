import React from 'react'
import logo from '../../image/logo.png'
import { C_Princial } from './styled'

//página de erro da aplicação, ela surge quando ocorre digitação de uma url inexistente 

const ErrorPage = () => {

    return (

        <C_Princial>
            <img src={logo} />
            <h1>Página não encontrada :( </h1>
        </C_Princial>
    )
}

export default ErrorPage