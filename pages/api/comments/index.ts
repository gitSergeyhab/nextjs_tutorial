import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "data/comment";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    if ( req.method === 'POST' ) {
        const comment = req.body.comment;

        if (comment && comment.trim()) {
            const newComment = {
                id: Date.now().toString(),
                comment: comment.trim() as string,
            }
            comments.push(newComment)
            res.status(201).json(newComment)
        }

    } else {
        res.status(200).json(comments);
    }
    
}