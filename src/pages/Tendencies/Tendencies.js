import React, { useContext } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { C_Principal, C_Tendencies, C_Button } from './styled'
import RenderTendencies from '../../components/Tendencies/RenderTendencies'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { goToHome } from '../../routers/cordinator'

const Tendencies = () => {

    const history = useHistory()

    const {requests} = useContext(GlobalContext)

    console.log ("aqui fotos", requests.tendencies)

    const renderTendencies = requests.tendencies.map ((index) => {
        return <RenderTendencies key={index.id} index={index} />
    })

    return (

        <C_Principal>

            <h1>Tendências</h1>

            <C_Tendencies>
                {renderTendencies}
            </C_Tendencies>

            <C_Button>
                <Button 
                    color="primary" 
                    variant={"contained"}
                    onClick={() => goToHome(history)}
                >
                    Voltar
                </Button>
            </C_Button>
        </C_Principal>
    )
}

export default Tendencies