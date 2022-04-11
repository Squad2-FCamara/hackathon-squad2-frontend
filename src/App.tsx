import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { SearchResults } from './components/SearchResults'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}