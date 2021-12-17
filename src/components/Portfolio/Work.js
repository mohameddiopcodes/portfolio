import '../styles/Portfolio.css'
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <div class='Portfolio'>
            <Link className='arrow-left' to='/#projects'>{'</'} previous</Link>
            <div>
                <h1>Work</h1>
                <p>Coming soon...</p>
            </div>
        </div>
    )
}