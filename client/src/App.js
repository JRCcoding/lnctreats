import './App.css'
import HomeScreen from './Screens/homeScreen'
import ProductsScreen from './Screens/productsScreen'
import ContactScreen from './Screens/contactScreen'
import Navi from './Components/Navi'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className='everything'>
      <Router>
        <Navi />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/products' component={ProductsScreen} />
        <Route path='/contact' component={ContactScreen} />
      </Router>
    </div>
  )
}

export default App
