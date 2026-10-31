import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Welcome to Prakhar's Dashboard</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
