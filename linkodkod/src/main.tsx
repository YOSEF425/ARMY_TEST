import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './components/application-layout/home.tsx';
import FindPost from './components/application-layout/findPost.tsx';
import AddPost from './components/application-layout/addPost.tsx';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/FindPost" element={<FindPost/>}/>
    <Route path="/AddPost" element={<AddPost/>}/>



    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
