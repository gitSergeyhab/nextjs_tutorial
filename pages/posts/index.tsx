// SG - static generation

import { GetStaticProps } from "next";
import { PostLink } from "components/post-link";
import { PostType } from "types/types"

const PostList = ({posts} : {posts: PostType[]}) => {

    const postList = posts.map((item) => <PostLink post={item} key={item.id}/>);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {postList}
            </ul>
        </>
    )
};


export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json()

    return {
        props: {
            posts: data,
        }
    }
}


export default PostList;