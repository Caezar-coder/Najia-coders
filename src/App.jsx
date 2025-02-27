import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import About from './Pages/About/About'
import Program from './Pages/Program-overview/Program'
import Involve from './Pages/Get-Involved/Involve'
import Home from './Pages/Home/Home'
import Student_Signup from './Auth/Student_signup/Student_Signup'
import Student_login from './Auth/Student-Login/Student_login'
import Teacher_Signup from './Auth/Teacher_Signup/Teacher_Signup'
import Teacher_Login from './Auth/Teacher_Login/Teacher_Login'
import Card_Donation from './Pages/card-donations/Card_Donation'

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
          path: "Student_Login",
          element: <Student_login />
        },
        {
          path: "Teacher_Signup",
          element: <Teacher_Signup />
        },
        {
          path: "Teacher_Login",
          element: <Teacher_Login /> 
        },
        {
          path: "card_donation",
          element: <Card_Donation />
        }
      ]
    }

  ])
  return <RouterProvider router={router}/>
}

export default App
