import { createMuiTheme } from '@material-ui/core'
import {primaryColor, secundaryColor, neutralColor} from './colors'

//setup do material ui para utilização das cores

const theme = createMuiTheme({

  palette: {

    primary: {
      main: primaryColor,
      contrastText: "white"
    },

    secondary: {
      main: secundaryColor,
      contrastText: "#221E1F"
    }

  }
})

export default theme