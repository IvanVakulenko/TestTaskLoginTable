import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import TableView from './components/TableView';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/table' element={<TableView />} />
    </Routes>
    
    </>
  )
}

export default App
