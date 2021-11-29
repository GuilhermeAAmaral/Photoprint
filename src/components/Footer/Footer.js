import React from 'react'
import { C_Button, C_Footer } from './styled'
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook';

//componente responsável por renderizar o rodapé da aplicação 

const Footer = () => {

    return (

        <C_Footer>
            <p>Desenvolvido por Guilherme Amaral</p>
            
            <C_Button>
            
                <Button a target="_blank"  href="https://www.instagram.com/guilhemeaamaral/">
                    <InstagramIcon color="secondary" />
                </Button>  
                
                <Button a target="_blank"  href="https://github.com/GuilhermeAAmaral">
                    <GitHubIcon color="secondary"/>
                </Button>
                <Button a target="_blank"  href="https://www.facebook.com/guilhermeaugusto.amaral/">  
                    <FacebookIcon color="secondary"/>
                </Button>

            </C_Button>   

        </C_Footer>
    )
}

export default Footer