import { Fragment } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'
import useFetch from '../hooks/useFetch'

function Dashboard() {
//useNavigate() nje hook nga React Router per te naviguar programatically
  const navigate = useNavigate()
//Custom Hook qe e kemi krijuar vete, shiko: useFetch.js per me shume detaje
  const {data : jobs, isPending, error} = useFetch('https://64ea744cbf99bdcc8e679258.mockapi.io/sda/jobs')
  
  return (
    <div className='Dashboard'>
        <aside>
            <div className="list">
            {/* Nese kerkesa nga serveri ka error, shfaq dicka per User-in */}
            {error && <h5 style={{color:'red'}}>Failed fetching jobs</h5>}

            {/* Conditional Rendering, nese kerkesa ne server eshte pending
            atehere shfar nje msg ose loading spin */}
            {isPending && <h5>Fetching jobs...</h5>}

            {/* metoda map() merr dy parametra, elemetin e array, dhe indeksin e elementit
            dhe kjo metode perdoret ne jsx per te krijuar elemente me te dhenat
            nga nje array lokal ose nga databaza */}
            {jobs && jobs.map((job, index) =>(
            // key e perdor react-i per te track-uar elemetet e krijuar
            //Komponenti <Fragment> eshte njesoj me <></>
                <Fragment key={index}>
                    <NavLink to={job.id.toString()} >
                    <div className="job">
                      <h4 className="title">{job.title}</h4>
                      <p>Salary: ${job.salary}</p>
                    </div>
                  </NavLink>
                </Fragment>
              ))}
              
            </div>
            {/* Kjo eshte menyra si egzekutojme nje funksion me nje fn anonim */}
            <button onClick={() => navigate('/new-job')}>Add</button>
        </aside>
        <main>
        {/* Outlet-i do te funsionoje si vendi ku do shfaqen
        Child-et e DashboardView definuar tek routes-config.jsx */}
            <Outlet />
        </main>
    </div>
  )
}
export default Dashboard