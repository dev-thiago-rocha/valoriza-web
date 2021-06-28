import React from 'react'
import ReactDOM from 'react-dom'
import { LoginPage } from './page/login'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ptBR from 'date-fns/locale/pt-BR'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <LoginPage />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
