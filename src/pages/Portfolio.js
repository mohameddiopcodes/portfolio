import './styles/Portfolio.css'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/Portfolio/About'
import Projects from '../components/Portfolio/Projects'
import Work from '../components/Portfolio/Work'

export default function Portfolio({owner, projects}) {
    const location = useLocation()
    
    return (
      <main>
        { (location.hash === '#about' || location.hash === '') && <About /> }
        { location.hash === '#projects' && <Projects projects={projects}/> }
        { location.hash === '#work' && <Work /> }
      </main>
    )
} 