import { useState } from 'react'
import { IconButton, List } from '@material-ui/core'
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'

import './style.scss'

interface ListComplimentUserSender {
  id: string
  message: string
  created_at: string
  tag: string
  userReceiverName: string
  userReceiverEmail: string
}

interface IComplimentsCardProps {
  compliments: ListComplimentUserSender[]
}

function ComplimentsReceivedCard({ compliments }: IComplimentsCardProps): JSX.Element {
  const [showContent, setShowContent] = useState(false)

  function handleShowContentClick() {
    setShowContent(!showContent)
  }

  return (
    <div className='compliments-received-card-container'>
      <div className='header'>
        <h3 className='title'>elogios enviados</h3>
        <IconButton aria-label='show-minimize' onClick={handleShowContentClick}>
          {showContent ? (
            <ArrowDropUp className='minimize-icon' />
          ) : (
            <ArrowDropDown className='minimize-icon' />
          )}
        </IconButton>
      </div>
      {showContent ? (
        <>
          <List className='compliment-info-list'>
            {compliments.map((compliment) => (
              <div className='compliment-info-card'>
                <p className='compliment-info'>para: {compliment.userReceiverName}</p>
                <p className='compliment-info'>em: {compliment.created_at.substring(0, 10)}</p>
                <p className='compliment-info'>tag: {compliment.tag}</p>
                <p className='compliment-info'>mensagem: {compliment.message}</p>
              </div>
            ))}
          </List>
          <button className='create-compliment-button'>ENVIAR ELOGIO</button>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export { ComplimentsReceivedCard }
