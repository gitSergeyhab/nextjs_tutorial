// SG - static generation

import { GetStaticPaths, GetStaticProps } from "next";
import { PostType } from "../../types/types";

const Post = ({post} : {post: PostType}) => {

    return (
        <>
            <h1> {post.id}. {post.title} </h1>
            <p> {post.body} </p>
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {

    const { params } = context;
    const { postId }  = params as { postId: string };

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();

    return {
        props: { post }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const post: PostType[] = await res.json();

    const pathList = post.map(({ id }) => ({ params: { postId: id.toString() } }))
    return {
        paths: pathList,
        fallback: false,
    };
};


export default Post;