import styles from './styles/app.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'


export function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}