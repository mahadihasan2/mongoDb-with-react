import React from 'react';

const AdUser = () => {
    const handleAddUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value

        const user = { name, email };

        // Post Request to server to Client

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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
            <h1>Please Add a New User</h1>

            <form action="" onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Enter Your Name' id="" required />
                <br></br>
                <input type="email" name="email" placeholder='Enter Your E-mail' id="" required />
                <br></br>
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AdUser;