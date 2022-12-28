import './App.css'
import HomeScreen from './Screens/homeScreen'
import LoginScreen from './Screens/loginScreen'
import ProductsScreen from './Screens/productsScreen'
import ProductScreen from './Screens/productScreen'
import ContactScreen from './Screens/contactScreen'
import AboutScreen from './Screens/aboutScreen'
import Navi from './Components/Navi'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navi />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/products' component={ProductsScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Footer />
      </Router>
    </>
  )
}

export default App
