import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comment";

export default function handler ( req: NextApiRequest, res: NextApiResponse ) {

    const commentId = req.query.commentId;
    const comment = comments.find((item) => item.id === commentId);

    if  (req.method === 'DELETE') {
        if (comment) {
            const index = comments.findIndex((item) => item.id === commentId);
            comments.splice(index, 1);
            res.status(200).json(comment)
        }
        
    } else if (req.method === 'GET') {
        if (comment) {
            res.status(200).json(comment)
        } else {
            res.status(404).json({ error: `there is not comment with id === ${commentId} ` })
        }
    } else if (req.method === 'PATCH') {
        if (comment) {
            const newComment = req.body.value.trim();
            if (newComment) {
                const index = comments.findIndex((item) => item.id === commentId);
                const fullNewComment = { id: comment.id, comment: newComment }
                comments.splice(index, 1, fullNewComment);
                console.log(comments)
                res.status(201).json(fullNewComment);
            }

        } else {
            res.status(404).json({ error: `there is not comment with id === ${commentId} ` })
        }
    }



}