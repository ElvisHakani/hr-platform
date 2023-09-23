import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/NewJobView.css'

function NewJobView() {

  //useNavigate() eshte nje hook nga React Router, me te cilin navigojme
  //programatically, psh brenda nje funskioni si me poshte tek fetch().then()
  const navigate = useNavigate();
  //variabla state per te ruajtur lokalisht te dhenat e formes me poshte
  const [jobData, setJobData] = useState({
    title: '',
    type: '',
    salary: 0,
    location: '',
    description: ''
  });

  //Funksioni qe egzekutohet nese form me poshte behet submit
  //funksionet qe startohen nga evente e marrin eventin si parameter psh 'e'
  const addJob = (e) => {
    //ky fn ben te mundur qe forma mos te behet reload kur behet submit
    e.preventDefault();
    //funksioni fetch merr dy parametra: nje URL ose endpoint dhe nje objekt -> fetch(fn, {objekti})
    fetch('https://64ea744cbf99bdcc8e679258.mockapi.io/sda/jobs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    //funskioni fetch kthen nje Promise ndaj ne therrasim metoden .then()
    //per te kapur pergjigjen dhe per te pare nese ishte e sukseshme apo error
    //.then() merr response-in si parameter, mund ta quajme dhe "res"
    .then(response => {
      if (response.ok) {
        alert('Job added successfully');
        setJobData(jobData);  // Nese kerkesa e sukseshme Update state nese job u shtua me sukses ne server
        navigate('/dashboard'); //dhe me pas navigo programatically tek dashboard-i
      } else {
        //Nese kerkesa pati problem, hidh nje error per tia shfaqur User-it
        throw new Error('Failed to add job');
      }
    })
    //mbas metodes .then() eshte mire te perdorim metoden .catch() qe merr nje error si parameter
    //per te menaxhuar erroret e hedhuara, ne kete rast po shfaqim nje alert me errorin
    .catch(error => {
      alert('An unexpected error occurred:', error);
    });
  };


  //Ne momentin qe shkruajme brenda inputeve
  //state qe ruan inputet behet update me ane te ketij Funksioni
  const handleChange = (e) => {
    const {name, value} = e.target;
    setJobData((prevJobData) => ({
      ...prevJobData,
      [name]: value
    }))
  }


  return (
    <div className="NewJobView">

      <div className="form-wrapper">
        {/* Ne momentin qe klikojme butonin submit "Add Job"
        funskioni addJob() egzekutohet */}
        <form onSubmit={addJob}>

          <h1>Submit a new job</h1>

          <fieldset>
            <input type="text" onChange={handleChange} name="title" id="title" placeholder="Job title..." required/>
          </fieldset>

          <fieldset>
            <input type="text" onChange={handleChange} name="type" id="type" placeholder="Job type..." required/>
          </fieldset>

          <fieldset>
            <input type="number" onChange={handleChange} name="salary" id="salary" placeholder="Job salary..." required/>
          </fieldset>

          <fieldset>
            <input type="text" onChange={handleChange} name="location" id="location" placeholder="Job location..." required/>
          </fieldset>

          <fieldset>
            <input type="textarea" onChange={handleChange} name="description" id="description" placeholder="Job description..." required/>
          </fieldset>

          <input type="submit" value="Add Job" />
        </form>
        {/* Kur duam te kthehemi mbrapsht, navigojme programatically  */}
        <button className="cancel" onClick={() => navigate('/dashboard')}>Cancel</button>
      </div>
    </div>
  )
}

export default NewJobView