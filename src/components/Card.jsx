import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function Card() {

  const {data : jobs, isPending, error} = useFetch('https://64ea744cbf99bdcc8e679258.mockapi.io/sda/jobs')

  const [job, setJob] = useState(null)

  //HAPI 1: Si te kapim IDn nga url-ja
  //useParams() akseson parametrat e URL qe i kemi definuar tek routes-config.jsx
  //dhe me ane te ketij hook mund te shohim cili eshte vlera e param aktuale
  const {id} = useParams()

  //sa here qe id ose jobs do ndryshoje duam qe useEffect te egzekutoj kodin
  //brenda vetes se vet, dmth te gjej punen dhe ta caktoj ne state nese gjendet
  //ne server
  useEffect(()=>{
//metoda find() ben nje kerkim ne array-in qe i jepet si input, sipas kushtit qe i jepet
//find() merr me rradhe si parameter cdo element te array-it, duke egzekutuar kushtin
//per cdo element ne array, dhe nese nje e permbush kushtin, find() e kthen te gjithe elementin
    const foundJob = jobs?.find(x => x.id === id)
//nese gjendet puna fute ne state nese jo-> sigurohu qe state te jete me vlere bosh
    foundJob ? setJob(foundJob) : setJob(null)
  },[id, jobs])


  const deleteJob = () => {
    //tek funksioni fetch() nese ne objektin si parameter te dyte, shtojme nje
    //property me emrin 'method' dhe vleren 'DELETE' kemi mundesi te kryejme nje
    //operacion delete ne endpoint
    fetch(`https://64ea744cbf99bdcc8e679258.mockapi.io/sda/jobs/${id}`,{
        method: 'DELETE'
    })
    //kapim si heret e tjera response-in per te pare dhe per egzekutuar dicka
    //nese operacioni ishte i suksesshem ose dicka tjeter nese nuk ishte
    .then(res => {
      if(res.ok) alert('Job deleted')
      else throw Error()
    })
    .catch(err => alert(err.message))
  }


  return (
    <>
{/* Coditional Rendering per te shfaqur nje element ndersa kerkesa eshte pending me serverin */}
    {isPending && <h5>Wait a minute!</h5>}
{/* pasi marrim pergjigjen nga serveri shfaqim te dhenat ne view */}
    {job && 
        (<div style={CardStyles}>
        <h2>{job.title}</h2>
        <p>Job Type: {job.type}</p>
        <p>Salary: ${job.salary}</p>
        <p>Location: {job.location}</p>
        <p style={{minHeight:'4rem'}}>Description: {job.description}</p>
        <button
        style={{backgroundColor:'red', color:'white', padding:'7px', borderRadius:'5px'}}
        onClick={deleteJob}>Delete Job</button>
        </div>)
    }
    
    </>
  )
}


const CardStyles = {
  backgroundColor:'#444',
  width:'500px',
  padding:'20px',
  color:'white',
  boxShadow:'2px 2px 10px rgba(0,0,0,.5)',
  borderRadius:'5px'
}

export default Card