// API GET
// API POST

import { FormEvent, useState } from "react";
import { CommentType } from "../../types/types";

const Comment = ({comment, fetchComments} : { comment: CommentType, fetchComments: () => Promise<void> }) => {

    const [value, setValue] =  useState<string>('');
    const [currentName, setCurrentName] =  useState<string>(comment.comment);

    const handleValueChange = (evt: FormEvent<HTMLInputElement>) => setValue(evt.currentTarget.value);

    const handleDelClick = async() => {
        try {
            console.log(`/api/comments/${comment.id}`)
            const res = await fetch(`/api/comments/${comment.id}`, {
                method: 'DELETE',

            });

            const data = await res.json();
            console.log(data);
            fetchComments();

        } catch {
            console.warn('Something wrong with delete comments!');
        }

    }

    const handleRenameClick = async() => {
        try {
            const res = await fetch(`/api/comments/${comment.id}`,  {
                method: 'PATCH',
                headers: { 'Content-type': ' application/json' },
                body: JSON.stringify({ value }),
            })

    
            const data = await res.json();
            console.log(data);

            setCurrentName(data.comment);
            setValue('');
        } catch {
            console.warn('Something wrong with patch comment!');
        }


    } 

    
    return (
        <li key={comment.id}>
            {comment.id}. {currentName} 
            <button type="button" onClick={handleDelClick}>Delete</button> 
            <input value={value} onChange={handleValueChange} placeholder={'enter new name here'}/>
            <button type="button" onClick={handleRenameClick}>Rename</button> 
         </li>
    )
}

const Comments = () => {

    const [comments, setComments] = useState<CommentType[]>([]);
    const [comment, setComment]= useState<string>('');

    

    const fetchComments = async () => {
        try {
            const res = await fetch('/api/comments');
            const data = await res.json();
            setComments(data);
        } catch {
            console.warn('Something wrong with get comments!');
        }
    }

    const handleBtnClick = () => fetchComments();

    const handleCommentInput = (evt: FormEvent<HTMLInputElement>) => setComment(evt.currentTarget.value);

    const handleCommentAdd = async () => {

        try {
            if (comment.trim()) {
                const res = await fetch('/api/comments', { 
                    method: 'POST',
                    headers: { 'Content-type': ' application/json' },
                    body: JSON.stringify({ comment }),
                 })
    
                 const data = await res.json();
                 console.log(data);
                 setComment('');
                 handleBtnClick();
            }
        } catch {
            console.warn('Something wrong with Post comment!');
        }
    }

    const commentList = comments.map((item) => <Comment key={item.id} comment={item} fetchComments={fetchComments}/>)

    return (
        <>
            <h1>Comments</h1>
            <button onClick={handleBtnClick} type={'button'}>
                load comments
            </button>
            <ul>
                {commentList}
            </ul>
            <input type={'text'} onChange={handleCommentInput} value={comment}/>
            <button type={'button'} onClick={handleCommentAdd}> add your comment </button>
        </>
    );
}

export default Comments;