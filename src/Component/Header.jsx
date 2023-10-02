import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/registar'> Registar</Link>
            <Link to='/seen'> See </Link>
        </div>
    );
};

export default Header;