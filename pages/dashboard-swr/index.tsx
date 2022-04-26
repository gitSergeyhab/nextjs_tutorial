import useSWR from 'swr';


const fetcher = async() => {
    const res = await fetch('http://localhost:4000/dashboard');
    const data = await res.json();

    return data;
}


const DashboardSWR = () => {

    const { data, error } = useSWR('dashboard', fetcher);

    if(error) {
        return <h1>Error</h1>
    }

    if(!data) {
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