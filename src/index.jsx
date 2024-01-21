import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Main from './components/main'
import './style.css'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={ () => setDarkMode(prevMode => !prevMode) }
          />
          <Main darkMode={darkMode} />
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render( <App /> )