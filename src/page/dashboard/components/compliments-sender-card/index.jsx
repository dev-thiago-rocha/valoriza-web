import React, { useState } from 'react'
import { IconButton, List } from '@material-ui/core'
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'
import './style.scss'

function ComplimentsSenderCard({ compliments }) {
  const [showContent, setShowContent] = useState(false)

  function handleShowContentClick() {
    setShowContent(!showContent)
  }

  return (
    <div className='compliments-sender-card-container'>
      <div className='header'>
        <h3 className='title'>elogios recebidos</h3>
        <IconButton aria-label='show-minimize' onClick={handleShowContentClick}>
          {showContent ? (
            <ArrowDropUp className='minimize-icon' />
          ) : (
            <ArrowDropDown className='minimize-icon' />
          )}
        </IconButton>
      </div>
      {showContent ? (
        <List className='compliment-info-list'>
          {compliments.map((compliment) => (
            <div className='compliment-info-card'>
              <p className='compliment-info'>de: {compliment.userSenderName}</p>
              <p className='compliment-info'>em: {compliment.created_at.substring(0, 10)}</p>
              <p className='compliment-info'>tag: {compliment.tag}</p>
              <p className='compliment-info'>mensagem: {compliment.message}</p>
            </div>
          ))}
        </List>
      ) : (
        <></>
      )}
    </div>
  )
}

export { ComplimentsSenderCard }
