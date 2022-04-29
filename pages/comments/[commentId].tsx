// SG + data from data no API

import { GetStaticPaths, GetStaticProps } from "next";
import { comments } from "../../data/comment";
import { CommentType } from "../../types/types";


const Comment = ({ comment } : { comment: CommentType }) => {

    if (!comment) {
        return <h1> no comment</h1>
    }

    return (
        <>
            <h1> Comment {comment.id}</h1>
            <p>{comment.comment}</p>
        </>
    )
};


export const getStaticProps: GetStaticProps = async (context) => {

    const { params } = context;
    const { commentId } = params as { commentId: string };

    // if (!commentId) {
    //     return { notFound: true }
    // }

    // const res = await fetch(`http://localhost:3000/api/comments/${commentId}`);
    // const comment = await res.json();
    const comment = comments.find((item) => item.id === commentId);
    if (!comment) {
        return { notFound: true }
    }

    return {
        props: { comment }
    }
};


export const getStaticPaths: GetStaticPaths = async () => {

    // const res = await fetch ('http://localhost:3000/api/comments');
    // const comments: CommentType[] = await res.json();

    const paths = comments.map(({ id }) => ({ params: { commentId: id.toString() } }));

    return { paths, fallback: true };
}

export default Comment;