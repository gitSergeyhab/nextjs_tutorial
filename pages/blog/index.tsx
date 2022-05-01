import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { NewsType } from "types/types";

const Blog = ({data} : {data: NewsType[]}) => {
    const newsList = data.map(({ title, category, id }) => <li key={id}> {title} | {category}</li>);
    return (
        <>
            <h1>Blog</h1>
            <ul>
                { newsList }
            </ul>
        </>
    )
}



// SSR - no secure
// export const getServerSideProps: GetServerSideProps = async(context) => {

//     const session = await getSession(context);
//     const res = await fetch('http://localhost:4000/news');
//     const news = await res.json();

//     const data = session ? news : news.slice(0,1);

//     return {
//         props: { data, session }
//     }
// }


// export default Blog;




// SSR - secure

export const getServerSideProps: GetServerSideProps = async(context) => {

    const session = await getSession(context);
    const res = await fetch('http://localhost:4000/news');
    const news = await res.json();

    if (session) {
        return {
            props: { data: news, session }
        }
    }

    return {
        redirect: {
            destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
            permanent: false,
        }
    }



}


export default Blog;