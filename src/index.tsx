import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { LoginPage, DashboardPage } from './page'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ptBR from 'date-fns/locale/pt-BR'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Router>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/dashboard' exact>
          <DashboardPage />
        </Route>
      </Router>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
