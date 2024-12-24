import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import urls from "./utils/paths";
import { Home } from './pages';
function App() {

  return  <>
  <Routes>
    <Route>
      <Route path={urls.HOMEPAGE} element={<Home />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Route>
  </Routes>
  </>
}

export default App
