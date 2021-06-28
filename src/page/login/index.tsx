import React, { useState } from 'react'
import { Header } from '../../component/header'
import { PopupModal } from '../../component/popup-modal'
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import './style.scss'

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [birthDate, setBirthDate] = useState(new Date())
  const [showRegisterSection, setShowRegisterSection] = useState(false)

  function renderLoginSection() {
    return (
      <div className='login-section-container'>
        <h2 className='login-section-title'>Elogie seus colegas de trabalho ! ⭐</h2>
        <TextField id='email-input' label='E-mail' variant='outlined' />
        <TextField id='password-input' label='Senha' variant='outlined' type='password' />
        <div className='login-section-buttons-container'>
          <Button variant='outlined' color='primary'>
            Entrar
          </Button>
          <Button color='primary' onClick={() => setShowRegisterSection(true)}>
            Criar uma conta
          </Button>
        </div>
        <p className='login-section-info'>{'Developed with 💙 by: <ThrTecnologia />'}</p>
      </div>
    )
  }

  function renderRegisterSection() {
    return (
      <div className='login-section-container'>
        <h2 className='login-section-title'>Crie sua conta, é grátis!</h2>
        <TextField id='email-input' label='E-mail' variant='outlined' />
        <TextField id='password-input' label='Senha' variant='outlined' type='password' />
        <TextField
          id='confirmation-password-input'
          label='Confirme sua senha'
          variant='outlined'
          type='password'
        />
        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format='dd/MM/yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Data de nascimento'
          value={birthDate}
          onChange={(date) => date && setBirthDate(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          okLabel='Ok'
          autoOk={false}
        />
        <div className='terms-checkbox-container'>
          <FormControlLabel
            control={
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
            }
            label='Eu aceito os termos de serviço.'
          />
        </div>
        <div className='login-section-buttons-container'>
          <Button variant='outlined' color='primary'>
            Registrar
          </Button>
          <Button color='primary' onClick={() => setShowRegisterSection(false)}>
            Voltar
          </Button>
        </div>
        <p className='login-section-info'>{'Developed with 💙 by: <ThrTecnologia />'}</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className='login-page-container'>
        <div className='login-image-container' />
        {showRegisterSection ? renderRegisterSection() : renderLoginSection()}
      </div>
      <PopupModal
        title='Informações'
        text={
          <div className='modal-text-container'>
            <p>
              O projeto "Valoriza" foi desenvolvido durante a sexta edição da Next Level Week by:{' '}
              <a href='https://rocketseat.com.br/'>Rocketseat</a> e tem caráter exclusivamente
              educacional.
            </p>
            <p>Este projeto não pode ser utilizado para fins comerciais.</p>
            <p>
              Para mais informações acesse: <a href='https://thrtec.com'>thrtec.com</a>
            </p>
          </div>
        }
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}

export { LoginPage }
