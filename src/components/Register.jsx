import { useNavigate } from "react-router-dom"
import '../styles/Register.css'
import { useState } from "react"

function Register() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    const handleChange = (event) => {
        const inputName = event.target.name
        const value = event.target.value

        if (inputName === 'email') setEmail(value)
        if (inputName === 'password') setPassword(value)
        if (inputName === 'confirm') setConfirm(value)

        console.log(email, password, confirm)
    }

  return (
    <div className="Register">
      <form>
        <h1>Register To Platform</h1>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirm" placeholder="Confirm Password" onChange={handleChange} />
        <button onClick={() => {navigate('/dashboard')}} className="register-btn">Register</button>
        <button onClick={() => {navigate('/welcome')}} className="back-btn">Back</button>
      </form>
    </div>
  )
}
export default Register