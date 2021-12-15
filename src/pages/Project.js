import { useParams } from 'react-router-dom'

export default function Project() {
    const { id } = useParams()

    return (
        <main>
            <h1>Project: { id }</h1>
        </main>
    )
}