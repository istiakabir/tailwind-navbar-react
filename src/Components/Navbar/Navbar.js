import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Protfolio', link: '/protfolio' },
        { id: 3, name: 'Blog', link: '/blog' },
        { id: 4, name: 'Contact', link: '/contact' }
    ];
    return (
        <nav>
            <ul>
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