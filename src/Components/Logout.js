import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axiosWithAuth from "../Utilities/AxiosWithAuth";



const LogOut = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axiosWithAuth().post('/logout', {}, {
        })
            .then(resp => {
                localStorage.removeItem("token")
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (<div></div>)
}
export default LogOut