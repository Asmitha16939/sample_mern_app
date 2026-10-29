import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import HrHome from './pages/HrHome'
import AdminHome from './pages/AdminHome'
import EmpHome from './pages/EmpHome'
function App() {
  

  return (
   <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/hrhome" element={<HrHome></HrHome>}></Route>
      <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
      <Route path="/emphome" element={<EmpHome></EmpHome>}></Route>

    </Routes>
   
    <Footer></Footer>
   </div>
  )
}

export default App
