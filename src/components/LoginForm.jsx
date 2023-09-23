import { useState } from 'react'
import '../styles/LoginForm.css'
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    //perdorimi i hook tone custom per te marr te dhena nga nje server (endpoint)
    const {data, isPending, error} = useFetch('https://64ea744cbf99bdcc8e679258.mockapi.io/sda/login');

    //state-et ku ruajme lokalisht (perkohesisht) vlerat e secilit input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //react router hook qe perdoret per te naviguar programatically
    const navigate = useNavigate()

    //Conditional render the Error Message
    const [loginError, setLoginError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        //Kontrollojme nese User egziston ne DB (data)
        const user = data.find(x => email === x.email)

        //nese emaili egziston dhe passwordi eshte i sakte
        if(user && user.password === password){
            //Logjika e login
            setLoginError(null)
            //pasi ka ndodhur login-i atehere navigo automatikisht tek dashboard
            navigate('/dashboard')
        //nese emaili nuk egziston ose passwordi nuk eshte i sakte
        }else{
            //perdor setter-in e state per te futur nje mesazh errori ne state
            //dhe per ta shfaqur me pas ne view
            setLoginError("Incorrect Credentials")
        }


    }
    //fuksioniu qe egzekutohet sa here qe shkruajme brenda inputeve me poshte
    //meqe fuksioni thirret nga eventi, fn e merr eventin si parameter
    const handleChange = (event) => {
        //me ane te eventit marrim emrin e inputit
        let inputName = event.target.name
        //me ane te eventit marrim vleren e ketij inputi gjithashtu
        let value = event.target.value
        //check-ojme nese vlera e futur eshte email apo password
        //nese eshte email e fusim tek state i emailit
        if(inputName === 'email') setEmail(value)
        //nese eshte password e fusim tek state i passwordit
        else if(inputName === 'password') setPassword(value)
        
    }

  return (
    <div className="LoginForm">
        <form onSubmit={handleSubmit}>

            <h1>Login to HR Platform</h1>

            <fieldset className="form-control">
                <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email..."/>
            </fieldset>

            <fieldset className="form-control">
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password..."/>
            </fieldset>

            {/* Conditional Rendering me && 
            nese state-it te error-it i futet vlere atehere ky komponenti shfaqet ne view*/}
            {loginError && <div className='error'>{loginError}</div>}

            <input type="submit" value="Login to Platform" />

        </form>
    </div>
  )
}

export default LoginForm