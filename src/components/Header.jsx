import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'

function Header() {

  const navigate = useNavigate()


  return (
    <div className='Header'>
        <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  )
}
export default Header