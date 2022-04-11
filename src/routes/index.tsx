import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from '../components/Homepage';
import { SearchResults } from '../components/SearchResults';

export const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/results" element={<SearchResults />} />
        </Routes>
    </BrowserRouter>
);