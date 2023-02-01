import { useRouter } from 'next/router'

export default function ProductId() {
    const {
        query: { id },
    } = useRouter()

    return (
        <div>
            <h1>Este es el producto con id: {id}</h1>
        </div>
    )
}
