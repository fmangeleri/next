import React from 'react'
import NavBar from '@components/NavBar/NavBar'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <footer>
                <p>This is a footer</p>
            </footer>
        </>
    )
}

export default Layout
