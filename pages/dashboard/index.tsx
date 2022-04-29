//  CSR

import { useEffect, useState } from "react";
import { DashboardType } from "../../types/types";

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [dashboard, setDashboard] = useState<null | DashboardType>(null);

    useEffect(() => {
        const fetchDashboard = async() => {
            try {
                const res = await fetch('http://localhost:4000/dashboard');
                const data = await res.json();
                if (data) {
                    setDashboard(data);
                    setLoading(false);
                }
            } catch {
                setLoading(false);
            }

        }
        fetchDashboard()
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (!dashboard) {
        return <h1>Error...</h1>
    }

    return (
        <>
            <h1>dashboard</h1>
            <p>posts: {dashboard.posts}</p>
            <p>likes: {dashboard.likes}</p>
            <p>followers: {dashboard.followers}</p>
            <p>following: {dashboard.following}</p>
        </>
    );

}

export default Dashboard;
