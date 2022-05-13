import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>This Avalliable data length is: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}>Name:{user.name},
                        E-mail:{user.email}
                        <button>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;