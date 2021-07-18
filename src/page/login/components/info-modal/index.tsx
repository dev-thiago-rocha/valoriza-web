import { PopupModal } from 'component'
import './style.scss'

interface ILoginInfoModal {
  isModalOpen: boolean
  setIsModalOpen: (state: boolean) => void
}

function LoginInfoModal({ isModalOpen, setIsModalOpen }: ILoginInfoModal): JSX.Element {
  return (
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
  )
}

export { LoginInfoModal }
