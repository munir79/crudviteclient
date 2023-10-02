
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Component/Main'
import Registar from './Component/Registar'
import SeeUSer from './Component/SeeUSer'

function App() {
 const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/registar',
        element:<Registar></Registar>
      },
      {
        path:'/seen',
        element:<SeeUSer></SeeUSer>,
        loader:()=>fetch('http://localhost:5000/users')
      }
    ]
  }
 ])

  return (
    <>
     
      <div className="card">
         <RouterProvider router={router}></RouterProvider>
      </div>
     
    </>
  )
}

export default App
