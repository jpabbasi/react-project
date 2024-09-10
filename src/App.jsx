import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './sections/home/Home'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <Router>
    <Navbar/>
    <div className="main-content">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    <Footer/>
    </div>
    </Router>
  )
}

export default App
