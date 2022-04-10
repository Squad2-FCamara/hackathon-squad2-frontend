import React from 'react'
import ReactDOM from 'react-dom'
import axe from '@axe-core/react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss'

import { App } from './App'

axe(React, ReactDOM, 1000);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
