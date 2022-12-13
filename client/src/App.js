import './App.css'
import Navi from './Components/Navi'
import Intro from './Components/Intro'
import Products from './Components/Products'

function App() {
  return (
    <div className='everything bg-lightPurple'>
      <Navi className='mb-20' />
      <Intro />
      <Products />
    </div>
  )
}

export default App
