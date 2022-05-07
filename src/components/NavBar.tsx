import React from "react"
import ThemeChanger from "./theme-changer"
import Link from "next/link"

const NavBar = () => {
  return (
    <>
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <a className="pl-3 text-2xl uppercase dark:text-indigo-500">Memes</a>
        </div>
        <div className="navbar-end">
            <ThemeChanger />
        </div>
    </div>
    </>
  )
}

export default NavBar