import React, { useContext } from 'react'
import { C_Principal, C_PrincipalSearch ,C_Search, C_RenderSearch, C_Button, C_lupa, C_ButtonBack } from './styled'
import { TextField, Button } from '@material-ui/core'
import GlobalContext from '../../global/GlobalContext'
import RenderSearch from '../../components/Search/RenderSearch'
import lupa from '../../image/lupa.png'
import { useHistory } from 'react-router'
import { goToHome } from '../../routers/cordinator'

//página responsável por pesquisar imagens e renderiza-las na tela. 

const SearchPage = () => {

    const history = useHistory()

    const {requests, state} = useContext(GlobalContext)
  
    const onChangeInputSearch = (event) => {
        state.setInputSearch (event.target.value)
    }

    const renderListSearch = state.listSearch.map ((index) => {
        return <RenderSearch key={index.id} index={index}/>
    })

    return (

        <C_Principal>
            
            <C_PrincipalSearch>
      
                <C_Search>
                    <TextField
                        onChange={onChangeInputSearch} 
                        value={state.inputSearch}
                        label={"Pesquisar"}
                        variant={"outlined"}
                        margin={'normal'}
                        type={"text"}
                        fullWidth   
                    /> 
                </C_Search>
               
                <C_Button>
                    <Button onClick={requests.search}
                        type={"subimit"}
                        variant={"contained"}
                        color={"primary"}
                    >
                        Pesquisar
                    </Button>
                </C_Button>
 
            </C_PrincipalSearch>
            
           
            <C_lupa>
                <img src={lupa} />
            </C_lupa>
      
            <C_RenderSearch>
                {renderListSearch}
            </C_RenderSearch>

            <C_ButtonBack>
                <Button 
                    color="primary" 
                    variant={"contained"}
                    onClick={() => goToHome(history)}
                >
                    Voltar
                </Button>
            </C_ButtonBack>
            
        </C_Principal>
    
    )
}

export default SearchPage