import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Main from './pages/main/main'
import Conditions from './pages/conditions/conditions'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/conditions" element={<Conditions />} />
    </Routes>
  </BrowserRouter>
)
