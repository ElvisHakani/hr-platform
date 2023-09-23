import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//importi i librarise -> React Router DOM
import {RouterProvider} from 'react-router-dom'
//I kam kaluar Routes ne file te vecante -> routes-config.jsx dhe me pas e kam importuar
import { router } from './routes-config'



ReactDOM.createRoot(document.getElementById('root')).render(

    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>

)
