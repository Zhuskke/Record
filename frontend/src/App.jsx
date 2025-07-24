import React from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './page/homePage'
import CreatePage from './page/createPage'
import NoteDetailPage from './page/noteDetailPage'
import {toast} from 'react-hot-toast'

function App() {
  return (
    <div>
      <button onClick={ () => toast.success('Clicked')} className="text-red-500 p-4 ">Click me</button>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/note/:id' element={<NoteDetailPage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
    </div>
  )
}

export default App
