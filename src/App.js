import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import Work from './pages/Work'
import Login from './pages/Login'
import getUser from './services/utilities/getUser';

function App() {
  const [owner, setOwner] = useState(getUser)

  return (
    <div class='App'>
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
              <Route path='/owner' element={ <Login owner={owner} setOwner={setOwner} /> } ></Route>
            </>
        }
      </Routes>
    </div>
  );
}

export default App;
