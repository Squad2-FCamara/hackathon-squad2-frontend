import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { SearchResults } from './components/SearchResults'

export function App() {
  return (
    <>
      <Header />
      <SearchResults />
      <Homepage />
    </>
  )
}