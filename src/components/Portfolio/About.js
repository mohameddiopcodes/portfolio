import '../styles/Portfolio.css'
import { Link } from "react-router-dom";
import resume from '../../images/resume.pdf'

export default function About() {
    function resumeDownload() {
        window.location.href = "/resume.pdf"
    }

    return (
        <div class='Portfolio'>
            <div style={{overflow: 'visible'}}>
                <h1>About</h1>
                <div className='About'>
                    <div>
                        <h1>Mohamed Diop: <span class='off'>Full Stack Software Engineer</span></h1>
                        <div className='actions' >
                            <a href={resume} download="resume.pdf"><button>Resume</button></a>
                            <a href='https://www.linkedin.com/in/mohameddiopcodes/' target='_blank'><button>LinkedIn</button></a>
                            <a href='https://github.com/mohameddiopcodes' target='_blank'><button>Github</button></a>
                            <Link to='/#work'><button>Hire Me</button></Link>
                        </div>
                        <p>A resourceful and reliable software engineer with 4 years of experience developing intuitive multi-platform software solutions and a background in business. I am a firm believer that with a sound mind and patience, every problem has a solution and value a peaceful and inspiring work environment above all.</p>
                        <div class='skills'>
                            <img src="/images/js.png" />
                            <img src="/images/py.png" />
                            <img src="/images/react.png" />
                            <img src="/images/html-5.png" />
                            <img src="/images/css.png" />
                            <img src="/images/letter-c.png" />
                            <img src="/images/hashtag.png" />
                            <img src="/images/nodejs.png" />
                            <img src="/images/docker.png" />
                            <img src="/images/ethereum.png" />
                            <img src="/images/solana.png" />
                        </div>
                    </div>
                    <img src='/images/profile.PNG' />
                </div>
            </div>
            <Link className='arrow-right' to='/#projects'>next {'/>'}</Link>
        </div>
    )
}