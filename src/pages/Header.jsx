import React from 'react'
import Button from '../components/ui/Button';
import { headerNavigations } from './constants';

function Header() {
    return (
        <header
            className="header text-foreground z-20 w-full  flex items-center 
            px-6 py-1 pt-2 backdrop-blur-sm 
            justify-between top-0 absolute"
        >
            <div className="">
                <button
                    href="#introduction"
                    className="block select-none font-semibold flex-center text-5xl font-[Whisper]"
                >
                    <span>R</span><span className='text-primary'>B</span>
                </button>
            </div>
            <nav className="flex-none">
                <ul className="flex items-center gap-x-10 px-1">
                    {
                        headerNavigations.map(nav => (
                            <li>
                                <a href={nav.link} className='hover:border-b-2 hover:border-primary'>{nav.title}</a>
                            </li>
                        ))
                    }
                    <li><Button className="text-sm font-medium" variant="primary">Contact</Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;