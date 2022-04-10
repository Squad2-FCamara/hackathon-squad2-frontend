import React from 'react'
import ReactDOM from 'react-dom'
import axe from '@axe-core/react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss'

import { App } from './App'
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter } from 'react-router-dom';

axe(React, ReactDOM, 1000);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
    <App />
    </SearchProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
)
