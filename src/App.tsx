import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { Schedule } from './components/Schedule';
import { SearchResults } from './components/SearchResults';
import { queryClient } from './services/queryClient';

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </BrowserRouter>
  )
}