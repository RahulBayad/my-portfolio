import React from 'react'

function Header() {
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="flex-1">
                <a href="#introduction" className="btn btn-ghost normal-case text-xl">My Portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;