import {Routes, Route} from 'react-router-dom'
import { About, Help, Home, Logging} from './pages'


const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-3 text-white flex'>
      <h1 className='text-xl flex-1'>LogIt</h1>
      <ul>
        <a href="/logging" className='mr-2'>Logging</a>
        <a href='/help' className='mr-2'>Help</a>

        <a href='/' className='mr-1'>Todos</a>
      </ul>

    </nav>
  )
}

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/help' element={<Help/>}/>

      <Route path='/logging' element={<Logging/>}/>
      <Route path="/" element={<Home/>}/>

    </Routes>
    </>

  )
}

export default App;
