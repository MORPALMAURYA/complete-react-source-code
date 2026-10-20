import { createBrowserRouter } from "react-router";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import Service from "../screens/Service";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../screens/Login";
import Register from "../screens/Register";

export const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                
                index:true,
                element:<Home/>
            },
            {
        path:'contact',
        element:<Contact/>
    },
       
    {
        path:'about',
        element:<About/>
    },
    {
        path:'service',
        element:<Service/>
    },
   {
     path:'auth',
     element:<AuthLayout/>,
     children:[
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register/:id',
            element:<Register/>
        }
     ]
   }

        ]
      
    },
 
])