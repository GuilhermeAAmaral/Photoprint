import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BASE_URL, KEY_API } from '../../constantes/urls'
import { C_Coment, C_Principal, C_ButtonPrincipal, C_Button } from './styled'
import { Button } from '@material-ui/core'
import { goToSearch} from '../../routers/cordinator'

//página responsável por mostrar e renderizar a foto escolhida na busca em tamanho original

const DetailPage = () => {

    const params = useParams()
    const history = useHistory()

    const [renderDetail, setRenderDetail] = useState([])

    const detail = () => {

        axios.get(`${BASE_URL}/photos/${params.id}`, {

            headers: {
                Authorization: KEY_API
            }
        })
        .then((res) => {
            setRenderDetail (res.data)
        })
        .catch((err) => {
            console.log (err.data)
        })
    }

    useEffect(() => {

        detail()
    
    }, [])


    return (

        <C_Principal>

            <img src={renderDetail && renderDetail.src && renderDetail.src.original} />

            <C_ButtonPrincipal>


                <C_Button>
                    <Button onClick={() => goToSearch(history)}
                        variant={"contained"}
                        color={"primary"}
                    >
                        Voltar
                    </Button>
                </C_Button>

            </C_ButtonPrincipal>
            
        </C_Principal>
    )
}

export default DetailPage