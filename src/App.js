import React from 'react'
import theme from './constantes/theme'
import { ThemeProvider } from '@material-ui/styles'
import GlobalState from './global/GlobalState'
import Routers from './routers/Routers'
import Footer from './components/Footer/Footer'

const App = () => {

  return (

    <ThemeProvider theme={theme}>
      <GlobalState>
        <Routers />
        <Footer />
      </GlobalState>
    </ThemeProvider>

  )
}

export default App;
