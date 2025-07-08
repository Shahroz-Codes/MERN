
import './App.css'
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos'


function App() {


  return (
    <>
      <h1 
      className=' text-white text-3xl font-bold text-center py-4 mb-4'
      >Shahroz-Codes __ Redux-Toolkit / React-Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
