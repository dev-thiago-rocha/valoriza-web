import logo from '../../assets/logos/logo_thr.png'
import './style.scss'

interface IHeaderProps {
  buttons(): JSX.Element
}

function Header({ buttons }: IHeaderProps) {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={logo} alt='header-thr-logo' />
      </div>
      <div className='buttons-container'>{buttons()}</div>
    </div>
  )
}

export { Header }
