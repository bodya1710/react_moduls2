import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';
const Header = () => {
    return (
        <div className={css.header}>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </div>
    );
};

export default Header;