//Importet per komponent
import App from './App.jsx'
import LoginView from './views/LoginView.jsx'
import DashboardView from './views/DashboardView.jsx'
import NewJobView from './views/NewJobView.jsx'
import Card from './components/Card.jsx'

//
import {createBrowserRouter, createRoutesFromElements, Route, Link} from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import Register from './components/Register.jsx'

export const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path='/' element={<App />}>
                <Route index element={<WelcomeScreen />} />
                <Route path='welcome' element={<WelcomeScreen />} />
                <Route path='login' element={<LoginView />} />
                <Route path='register' element={<Register />} />
                <Route path='dashboard' element={<DashboardView />}>
                    <Route path=':id' element={<Card />} />
                </Route>
                <Route path='new-job' element={<NewJobView />} />
            </Route>
    )
)