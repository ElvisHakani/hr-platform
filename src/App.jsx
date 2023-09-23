import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* Komponenti Outlet (nga paketa React Router) ben te mundur
      piketimin e vendit ku do the shfaqen komponentet Child qe gjenden
      tek routes-config.jsx */}
      <Outlet />
    </div>
  )
}

export default App