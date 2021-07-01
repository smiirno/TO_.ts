import React from 'react';
import '../Styles/Navbar.css'

const NavbarComponent: React.FC = () => {
    return (
        <div>
            <div className="navbar-top">
                <a href="/">Предстоящие ТО</a>
                <a  href="/inactive">Выполненные ТО</a>
            </div>
        </div>
    );
}

export default NavbarComponent;