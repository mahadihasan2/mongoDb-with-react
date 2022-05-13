import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUserData = id => {
        const proceed = window.confirm('are you sure you want to delete')
        if (proceed) {
            console.log('deleting user with id', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaning = users.filter(user => user._id !== id)
                        setUsers(remaning)

                    }
                })

        }


    }
    return (
        <div>
            <h2>This Avalliable data length is: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}>Name:{user.name},
                        E-mail:{user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserData(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;