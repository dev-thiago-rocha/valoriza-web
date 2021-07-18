import { Header } from 'component'
import { DashboardPageHeaderButtons } from './components'
import './style.scss'

function DashboardPage(): JSX.Element {
  return (
    <>
      <Header buttons={DashboardPageHeaderButtons} />
    </>
  )
}

export { DashboardPage }
