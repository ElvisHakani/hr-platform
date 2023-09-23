import { useNavigate } from 'react-router-dom'
import '../styles/WelcomeScreen.css'

function WelcomeScreen() {
    const navigate = useNavigate()

  return (
    <div className='WelcomeScreen'>
            <h1>Welcome to HR Platform</h1>
            <p>Post and manage jobs efficiently</p>
            <button onClick={() => navigate('/login')} className='login-btn'>Get Started</button>
            <button onClick={() => navigate('/register')} className='regis-btn'>Register</button>
    </div>
  )
}
export default WelcomeScreen