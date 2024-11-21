

import { Signup } from './Pages/Signup'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Blog } from './Pages/Blog'
import { Login } from './Pages/Login'
import { Indblog } from './Pages/Indblog'
import { Createblog } from './Pages/Createblog'
function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
       <Route path="/signup" element={<Signup></Signup>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path='/createblog' element={<Createblog></Createblog>}></Route>
       <Route path='/blog/:id' element={<Indblog></Indblog>}></Route>
       <Route path="/blogs" element={<Blog></Blog>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
