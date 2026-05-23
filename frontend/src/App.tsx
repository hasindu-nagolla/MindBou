import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ArticleView from './pages/ArticleView'
import Write from './pages/Write'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="article/:id" element={<ArticleView/>} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  )
}

export default App
