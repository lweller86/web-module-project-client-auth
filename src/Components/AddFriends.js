import React, { useState } from 'react'
import axios from 'axios';

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });
    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', newFriend, {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <h2>AddFriend</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange}  name="age" id="age" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" id="email" />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default AddFriend;