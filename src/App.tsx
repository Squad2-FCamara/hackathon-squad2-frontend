import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { SearchResults } from './components/SearchResults'
import { Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/resultado' element={<SearchResults />}/>
      </Routes>
      <Homepage />
    </>
  )
}