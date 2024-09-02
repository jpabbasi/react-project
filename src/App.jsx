import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './sections/home/Home'
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <Router>
    <Navbar/>
    <div className="main-content">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default App
