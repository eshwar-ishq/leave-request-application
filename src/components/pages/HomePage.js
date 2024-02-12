import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        }else {
            return navigate('/login')
        }
    },[])

    const handleInpute = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button" onClick={handleInpute}>Log out</button>
            </Link>
        </div>
    )
}
