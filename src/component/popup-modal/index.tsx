import React from 'react'
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import './style.scss'

interface IPopupModal {
  setIsModalOpen: (state: boolean) => void
  isModalOpen: boolean
  text: JSX.Element
  title: string
}

function PopupModal({ isModalOpen, setIsModalOpen, text, title }: IPopupModal) {
  function handleCloseClick() {
    setIsModalOpen(false)
  }

  if (isModalOpen) {
    return (
      <div className='popup-modal-outside-container'>
        <div className='popup-modal-container'>
          <div className='header'>
            <h2>{title}</h2>
            <IconButton aria-label='close' size='small' onClick={handleCloseClick}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className='body'>{text}</div>
          <div className='modal-button-container'>
            <Button variant='outlined' color='primary' onClick={handleCloseClick}>
              Entendido
            </Button>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export { PopupModal }
