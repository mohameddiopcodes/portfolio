import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import { index as getProjects } from './services/projects';
import getUser from './services/utilities/getUser'

const money = getProjects()

function App() {
  const [owner, setOwner] = useState(getUser)
  const [loaded, setLoaded] = useState(false)
  const [projects, setProjects] = useState(null)
  const [spin, setSpin] = useState(false)

  useEffect(() => {
    try {
        (async () => setProjects( (await money).projects ))()
      } catch(e) {
        console.log(e.message)
      }
    }, [])
    
    useEffect(() => {
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }, [])
    
    useEffect(() => {
      !loaded && setSpin(!spin)
    }, [spin])
    
  return (
    <div className='beforeApp'>
    {
      !loaded ?
      <img style={spin ? {transform: 'rotate(45deg)'}:{}} className='loading' src="/images/loader.png"/>
      :
      <div className='App'>
        <Navbar owner={owner} setOwner={setOwner} />
        <Routes>
          {
            owner ?
            <>
                <Route path='/' element={ <Portfolio owner={owner} projects={projects} /> } ></Route>
              </>
              :
              <>
                <Route path='/' element={ <Portfolio projects={projects} /> } ></Route>
                <Route path='/admin' element={ <Login owner={owner} setOwner={setOwner} /> } ></Route>
              </>
          }
        </Routes>
      </div>
    }
    </div>
  );
}

export default App;
