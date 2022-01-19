import React, { useState, useEffect } from 'react';

import userService from '../../services/post.service'
const UsersPage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(value => setUsers)
    }, []);
    return (
        <div>
            users
        </div>
    );
};

export default UsersPage;