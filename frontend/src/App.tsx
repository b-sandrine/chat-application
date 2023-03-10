import './App.css'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import { Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'

function App() {

  const socket = io('http://localhost:9000',{
    transports: ['websocket'],
  });

  return (
    <div className="app--container">
      <Routes>
        <Route path='/' element={ <Welcome /> }></Route>
        <Route path='/login' element= { <Login /> }></Route>
        <Route path='/register' element = { < Register /> }></Route>
        <Route path='/dashboard' element = { < Chat /> }></Route>
      </Routes>
    </div>
  )
}

export default App
