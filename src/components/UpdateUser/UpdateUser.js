import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        const url = (`http://localhost:5000/user/${id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    const handleAddUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value

        const updatedUser = { name, email };

        // send data to the server 
        const url = (`http://localhost:5000/user/${id}`)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('User add successfully')
                event.target.reset();
            })

    }
    return (
        <div>
            <h2>Update User: {user.name}</h2>
            <form action="" onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Enter Your Name' id="" required />
                <br></br>
                <input type="email" name="email" placeholder='Enter Your E-mail' id="" required />
                <br></br>
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateUser;