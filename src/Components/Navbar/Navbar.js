import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Protfolio', link: '/protfolio' },
        { id: 3, name: 'Blog', link: '/blog' },
        { id: 4, name: 'Contact', link: '/contact' }
    ];
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center md:static bg-amber-200 w-full gap-9 absolute ${open? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;