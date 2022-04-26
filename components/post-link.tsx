import Link from "next/link"
import { PostType } from "../types/types"

export const PostLink = ({post}: {post: PostType}) => {
    return (
        <Link href={`/posts/${post.id}`}>
            <a>
                <li>
                    <h2>{post.title}</h2>
                </li>
            </a>
        </Link>
    )
}