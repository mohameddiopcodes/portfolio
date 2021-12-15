import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { index } from '../../services/projects'

export default function Projects() {
    const [project, setProject] = useState([])
    const [page, setPage] = useState(1)

    useEffect(function() {
        (async () => console.log(await index()))()
    }, [page])

    return (
        <div className='Portfolio'>
            <Link className='arrow-left' to='/'>{'</'} previous</Link>
            <div styles={{overflow: 'visible'}}>
                <h1>Projects</h1>
                {project && 
                    <div class='Project'>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                }
            </div>
            <Link className='arrow-right' to='/#work'>next {'/>'}</Link>
        </div>
    )
}