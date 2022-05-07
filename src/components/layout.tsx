import React from 'react';
import NavBar from './NavBar'
import { AnimateSharedLayout } from "framer-motion";



interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) : JSX.Element {
    return (
        <>
            <NavBar />
            <AnimateSharedLayout>
                <main>{children}</main>
            </AnimateSharedLayout>
        </>
    )
}

