// CSR + swr

// CS client-side secure AUTH


import useSWR from 'swr';
import { signIn, getSession } from 'next-auth/react'
import { useEffect, useState } from 'react';


const fetcher = async() => {
    const res = await fetch('http://localhost:4000/dashboard');
    const data = await res.json();

    return data;
}


const DashboardSWR = () => {

    const { data, error } = useSWR('dashboard', fetcher);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const securePage = async () => {
            const session = await getSession(); // проверяет авторизованность
            if (session) {
                setLoading(false);
            } else {
                signIn(); // если не авторизован - перейти на страницу авторизации
            }
        };
        securePage();
    }, [])

    if(error) {
        return <h1>Error</h1>
    }

    if(!data || loading) {
        return <h1>Loading</h1>
    }
    return (
        <>
            <h1>dashboard</h1>
            <p>posts: {data.posts}</p>
            <p>likes: {data.likes}</p>
            <p>followers: {data.followers}</p>
            <p>following: {data.following}</p>
        </>
    );
}

export default DashboardSWR;