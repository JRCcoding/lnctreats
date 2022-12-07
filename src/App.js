import './App.css'
import Navi from './Components/Navi'
import Intro from './Components/Intro'
import About from './Components/About'

function App() {
  return (
    <>
      <Navi className='mb-20' />
      <Intro />
      <About />
    </>
  )
}

export default App
