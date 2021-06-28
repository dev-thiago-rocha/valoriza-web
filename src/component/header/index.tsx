import React from 'react'
import logo from '../../assets/logos/logo_thr.png'
import './style.scss'

function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={logo} alt='header-thr-logo' />
      </div>
      <div className='buttons-container'>
        <button>Login</button>
        <button>Outros Projetos</button>
      </div>
    </div>
  )
}

export { Header }
