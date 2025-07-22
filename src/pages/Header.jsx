import React from 'react'
import Button from '../components/ui/Button';
import { headerNavigations } from './constants';

function Header() {
    return (
        <header
            className="header text-foreground z-20 w-full  flex items-center 
            px-6 py-4  backdrop-blur-sm 
            justify-between  fixed "
        >
            <div className="">
                <a href="#introduction" className="font-medium text-2xl">Rahul Bayad</a>
            </div>
            <nav className="flex-none">
                <ul className="flex gap-x-10 px-1">
                    {
                        headerNavigations.map(nav => (
                            <li>
                                <a href={nav.link} className='hover:border-b-2 hover:border-primary'>{nav.title}</a>
                            </li>
                        ))
                    }
                    
                </ul>
            </nav>
            <div>
                {/* <a href="#contact">Contact</a> */}
                <Button className="font-normal" variant="filled">Contact</Button>
            </div>
        </header>
    )
}

export default Header;