import React from 'react'
import Link from 'next/link'

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/product'>Product</Link>
                </li>
            </ul>
        </nav>
    )
}
