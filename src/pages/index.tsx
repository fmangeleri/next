import { TProduct } from '@/types/database'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [productList, setProductList] = useState<TProduct[]>([])
    const [quantity, setQuantity] = useState<number>()

    useEffect(() => {
        try {
            window
                .fetch('/api/avo')
                .then((response) => response.json())
                .then(({ length, data }) => {
                    setProductList(data)
                    setQuantity(length)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <h2>Productos disponibles: {quantity}</h2>
            {productList.map((product) => (
                <div>
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    )
}
