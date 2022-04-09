import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { FriendProfile } from './components/FriendProfile'
import { MainProfile } from './components/MainProfile'


export function App() {
  return (
    <>
      <Header />
      <MainProfile />
      <Homepage />
      <Footer />
      <FriendProfile />
    </>
  )
}