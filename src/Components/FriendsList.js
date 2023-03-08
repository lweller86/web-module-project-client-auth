import React, { useState, useEffect } from "react"
import axiosWithAuth from "../Utilities/AxiosWithAuth";




const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('/friends', {
        })
            .then(resp => {

                setFriends(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    console.log(friends)

    return (
        <div>
            <h1>FriendList</h1>
            <ul>{
                friends.map(friend => {
                    return (
                        <li key={friend.id}>
                            {friend.name} -
                            {friend.age} -
                            {friend.email}
                        </li>
                    )
                })
            }

            </ul>
        </div>
    )
}

export default FriendsList;