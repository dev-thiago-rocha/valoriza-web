import { Header } from 'component'
import {
  ComplimentsReceivedCard,
  ComplimentsSenderCard,
  DashboardPageHeaderButtons,
} from './components'
import './style.scss'

function DashboardPage(): JSX.Element {
  const complimentsMock = [
    {
      id: 'bb5e1894-dde0-4221-9b87-d4f315fa3c11',
      message: 'Você é muito paciente!',
      created_at: '2021-07-18T05:31:12.000Z',
      tag: 'Paciente',
      userReceiverName: 'Jane',
      userReceiverEmail: 'test@gmail.com',
    }
  ]

  return (
    <>
      <Header buttons={DashboardPageHeaderButtons} />
      <div className='dashboard-page-container'>
        <div className='compliments-cards-container'>
          <ComplimentsReceivedCard compliments={complimentsMock} />
          <ComplimentsSenderCard compliments={complimentsMock} />
        </div>
      </div>
    </>
  )
}

export { DashboardPage }
