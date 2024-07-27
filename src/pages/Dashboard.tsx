import React from 'react'
import { logoutUser } from '../hooks/appwrite'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    async function handleLogout() {
        await logoutUser();
        navigate("/login");
    }

    return (
        <div>

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    )
}

export default Dashboard