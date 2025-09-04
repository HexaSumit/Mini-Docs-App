import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {

  return (
    <>
      <div className=' bg-gray-200/70 relative w-full h-screen'>
        <Background />
        <Foreground />
      </div>
    </>
  )
}

export default App
