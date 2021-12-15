import { useParams } from 'react-router-dom'

export default function Work() {
    const { id } = useParams()

    return (
        <main>
            <h1>Work: { id }</h1>
        </main>
    )
}