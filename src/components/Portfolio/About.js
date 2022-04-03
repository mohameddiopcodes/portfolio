import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import resume from '../../images/resume.pdf'

import { useEffect, useState } from 'react';
import Nav from './Nav'

// export default function About() {
//     const aboutPage = useRef()

//     function dissolve() {
//         aboutPage.style.opacity = 0
//     }

//     return (
//         <div ref={aboutPage} class='Portfolio'>
//             <div style={{overflow: 'visible'}}>
//                 <h1>About me</h1>
//                 <div className='About'>
//                     <img src='/images/profile.PNG' />
//                     <div>
//                         <h1>Mohamed Diop <span class='off'>Full Stack Software Engineer</span></h1>
//                         <div className='actions' >
//                             <a href={resume} download="resume.pdf"><button>Resume</button></a>
//                             <a href='https://www.linkedin.com/in/mohameddiopcodes/' target='_blank'><button>LinkedIn</button></a>
//                             <a href='https://github.com/mohameddiopcodes' target='_blank'><button>Github</button></a>
//                             <Link to='/#work'><button>Hire</button></Link>
//                         </div>
//                         <p>Hey, I'm a Software Engineer with a deep understanding of software architecture. I have the knowledge and experience to develop apps across various platforms using different programming languages. </p>
//                     </div>
//                 </div>
//             </div>
//             <Link onClick={dissolve} className='arrow-right arrow-right-about' to='/#projects'>next page {'/>'}</Link>
//         </div>
//     )
// }

export default function About() {
    const [loaded, setLoaded] = useState(false)
    const [seeMore, setSeeMore] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            }, 150)
    }, [])

    function toggleSeeMore() {
        setSeeMore(!seeMore)
    }

    return (
        <div  className={loaded ? 'visible':'hidden'} id="About">
            <div id='main-card'>
                <img id='main-img' src='/images/profile.jpg' />
                <div id="main-card-content">
                    <h1>Mohamed Diop<span> Full Stack Software Engineer</span></h1>
                    <div className='actions' >
                        <a href={resume} download="resume.pdf"><button>Resume</button></a>
                        <a href='https://www.linkedin.com/in/mohameddiopcodes/' target='_blank'><button>LinkedIn</button></a>
                        <a href='https://github.com/mohameddiopcodes' target='_blank'><button>Github</button></a>
                        <Link to='/#work'><button>Hire</button></Link>
                    </div>
                </div>
            </div>
            <hr width="20%" style={{marginTop: '1em'}}></hr>
            {!seeMore && <button onClick={toggleSeeMore} class='see-more'>see more</button>}
            <div style={!seeMore ? {position: 'absolute'}:{}} className={seeMore ? 'visible': 'hidden-two'}>
                <p>Hey, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <hr width="20%" style={{marginBottom: '1em'}}></hr>
                <button onClick={toggleSeeMore} class='see-more'>see less</button>
                <Link to="/#projects"><button class='btn'>View my projects →</button></Link>
            </div>
        </div>
    )
}