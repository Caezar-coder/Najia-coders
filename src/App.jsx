import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import About from './Pages/About/About'
import Program from './Pages/Program-overview/Program'
import Involve from './Pages/Get-Involved/Involve'
import Home from './Pages/Home/Home'
import Student_Signup from './Auth/Student_signup/Student_Signup'
import Teacher_Signup from './Auth/Teacher_Signup/Teacher_Signup'
import Card_Donation from './Pages/card-donations/Card_Donation'
import Paypal from './Pages/paypalPage/Paypal'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: "about_us",
          element: <About />
        },
        {
          path: "program",
          element: <Program />
        },
        {
          path: "Get_Involved",
          element: <Involve />
        },
        {
          path: "Student_signup",
          element: <Student_Signup />
        },
        {
          path: "Teacher_Signup",
          element: <Teacher_Signup />
        },
        {
          path: "card_donation",
          element: <Card_Donation />
        },
         {
          path: "paypal",
          element: <Paypal /> 
        }
      ]
    }

  ])
  return <RouterProvider router={router}/>
}

export default App
