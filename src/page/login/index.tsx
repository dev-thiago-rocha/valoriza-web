import { useState } from 'react'
import { Header } from 'component'
import { LoginInfoModal, LoginPageHeaderButtons } from './components'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Zoom,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { useValorizaApi } from 'hook'
import { authenticateUser } from '../../util'
import './style.scss'

const EMPTY_SPACE = ''
const BLANK_SPACE = ' '
const REQUIRED_FIELD = 'Campo Obrigatório!'
const DEFAULT_ERROR_MESSAGE = 'Ocorreu um erro, por favor verifique as informações inseridas.'

function LoginPage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [birthDate, setBirthDate] = useState(new Date())
  const [showRegisterSection, setShowRegisterSection] = useState(false)
  const [emailText, setEmailText] = useState(EMPTY_SPACE)
  const [passwordText, setPasswordText] = useState(EMPTY_SPACE)
  const [confirmPasswordText, setConfirmPasswordText] = useState(EMPTY_SPACE)
  const [acceptTerm, setAcceptTerm] = useState(false)
  const [validateFields, setValidateFields] = useState(false)
  const [validateRegisterFields, setValidateRegisterFields] = useState(false)
  const [errorAlert, setErrorAlert] = useState(EMPTY_SPACE)

  const useValoriza = useValorizaApi()

  function handleLoginClick() {
    setValidateFields(true)
  }

  function verifyFields() {
    return (
      emailText &&
      passwordText &&
      confirmPasswordText &&
      passwordText === confirmPasswordText &&
      birthDate &&
      acceptTerm
    )
  }

  async function handleRegisterClick() {
    setValidateRegisterFields(true)
    let response: any

    if (verifyFields()) {
      response = await useValoriza.registerUser({
        email: emailText,
        password: passwordText,
      })

      if (response.status === 200) {
        authenticateUser({ email: emailText, password: passwordText })
        setErrorAlert(EMPTY_SPACE)
      } else {
        setErrorAlert(response.data.message || DEFAULT_ERROR_MESSAGE)
      }
    } else {
      setErrorAlert(DEFAULT_ERROR_MESSAGE)
    }
  }

  function renderLoginSection() {
    return (
      <div className='login-section-container'>
        <h2 className='login-section-title'>Elogie seus colegas de trabalho !</h2>
        <TextField
          required
          id='email-input'
          label='E-mail'
          variant='outlined'
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          error={emailText === EMPTY_SPACE && validateFields}
          helperText={emailText === EMPTY_SPACE && validateFields ? REQUIRED_FIELD : BLANK_SPACE}
        />
        <TextField
          required
          id='password-input'
          label='Senha'
          variant='outlined'
          type='password'
          value={passwordText}
          onChange={(e) => setPasswordText(e.target.value)}
          error={passwordText === EMPTY_SPACE && validateFields}
          helperText={passwordText === EMPTY_SPACE && validateFields ? REQUIRED_FIELD : BLANK_SPACE}
        />
        <div className='login-section-buttons-container'>
          <Button variant='outlined' color='primary' onClick={handleLoginClick}>
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
        <TextField
          id='email-input'
          label='E-mail'
          variant='outlined'
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          error={emailText === EMPTY_SPACE && validateRegisterFields}
          helperText={
            emailText === EMPTY_SPACE && validateRegisterFields ? REQUIRED_FIELD : BLANK_SPACE
          }
        />
        <TextField
          id='password-input'
          label='Senha'
          variant='outlined'
          type='password'
          value={passwordText}
          onChange={(e) => setPasswordText(e.target.value)}
          error={passwordText === EMPTY_SPACE && validateRegisterFields}
          helperText={
            passwordText === EMPTY_SPACE && validateRegisterFields ? REQUIRED_FIELD : BLANK_SPACE
          }
        />
        <TextField
          id='confirmation-password-input'
          label='Confirme sua senha'
          variant='outlined'
          type='password'
          value={confirmPasswordText}
          onChange={(e) => setConfirmPasswordText(e.target.value)}
          error={confirmPasswordText === EMPTY_SPACE && validateRegisterFields}
          helperText={
            confirmPasswordText === EMPTY_SPACE && validateRegisterFields
              ? REQUIRED_FIELD
              : BLANK_SPACE
          }
        />
        <KeyboardDatePicker
          required
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
          error={!birthDate && validateRegisterFields}
          helperText={!birthDate && validateRegisterFields ? REQUIRED_FIELD : BLANK_SPACE}
        />
        <div className='terms-checkbox-container'>
          <FormControlLabel
            control={
              <Checkbox
                color='primary'
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                checked={acceptTerm}
                onChange={() => setAcceptTerm(!acceptTerm)}
              />
            }
            label='Eu aceito os termos de serviço.'
          />
          <FormHelperText
            className={`required-register-field${
              !acceptTerm && validateRegisterFields ? EMPTY_SPACE : '-hidden'
            }`}
          >
            {REQUIRED_FIELD}
          </FormHelperText>
        </div>
        <div className='login-section-buttons-container'>
          <Button variant='outlined' color='primary' onClick={handleRegisterClick}>
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
      <Header buttons={LoginPageHeaderButtons} />
      <div className='login-page-container'>
        <div className='login-image-container' />
        <Zoom in={errorAlert !== EMPTY_SPACE}>
          <Alert
            onClose={() => setErrorAlert(EMPTY_SPACE)}
            severity='error'
            className='error-alert'
          >
            {errorAlert}
          </Alert>
        </Zoom>
        {showRegisterSection ? renderRegisterSection() : renderLoginSection()}
      </div>
      <LoginInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export { LoginPage }
