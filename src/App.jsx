
// api: https://jsonplaceholder.typicode.com/posts
// http://localhost:3000/posts

import './App.css'

import Home from './pages/home/Home'

import {BrowserRouter, Routes, Route } from "react-router-dom"
import NewPost from './pages/newPost/NewPost'

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes >
          <Route path="/" element={ <Home /> }/>
          <Route path="/post" element={ <NewPost /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App
