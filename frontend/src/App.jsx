import React from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './page/homePage'
import CreatePage from './page/createPage'
import NoteDetailPage from './page/noteDetailPage'
import {toast} from 'react-hot-toast'

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#e7a95d_100%)]" />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/note/:id' element={<NoteDetailPage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
    </div>
  )
}

export default App
