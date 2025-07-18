import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import ContentType from './Pages/ContentType/ContentType'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ContentType />} />
      </Route>
    </Routes>
  )
}

export default App
