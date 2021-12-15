import '../styles/Portfolio.css'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div class='Portfolio'>
            <div style={{overflow: 'visible'}}>
                <h1>About</h1>
                <div className='About'>
                    <div>
                        <h1>Mohamed Diop: <span class='off'>Full Stack Software Engineer</span></h1>
                        <div className='actions' >
                            <button>Resume</button>
                            <button>LinkedIn</button>
                            <button>Github</button>
                            <button>Hire Me</button>
                        </div>
                        <p>A resourceful and reliable software engineer with 4 years of experience developing intuitive multi-platform software solutions and a background in business. I am a firm believer that with a sound mind and patience, every problem has a solution and value a peaceful and inspiring work environment above all.</p>
                        <div class='skills'>
                            <img src="/images/js.png" />
                            <img src="/images/py.png" />
                            <img src="/images/react.png" />
                            <img src="/images/ethereum.png" />
                            <img src="/images/nodejs.png" />
                            <img src="/images/solana.png" />
                            <img src="/images/hashtag.png" />
                            <img src="/images/html-5.png" />
                            <img src="/images/css.png" />
                        </div>
                    </div>
                    <img src='/images/profile.PNG' />
                </div>
            </div>
            <Link className='arrow-right' to='/#projects'>next {'/>'}</Link>
        </div>
    )
}