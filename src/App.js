import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import Work from './pages/Work'
import Login from './pages/Login'
import getUser from './services/utilities/getUser';

function App() {
  const [owner, setOwner] = useState(getUser)
  const [loaded, setLoaded] = useState(false)
  const [spin, setSpin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
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
                <Route path='/' element={ <Portfolio owner={owner} /> } ></Route>
                <Route path='/projects/:id' element={ <Project/> } ></Route>
                <Route path='/work/:id' element={ <Work/> } ></Route>
              </>
              :
              <>
                <Route path='/' element={ <Portfolio/> } ></Route>
                <Route path='/projects/:id' element={ <Project/> } ></Route>
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
