import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Shahroz-Codes</h1>
        <Login />
        
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
