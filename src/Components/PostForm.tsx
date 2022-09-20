import React, {ChangeEvent, useState} from 'react';
import {MyInput} from "../UI/MyInput";
import {MyButton} from "../UI/MyButton";



type PropsPostFormType = {
    addPost: (newTitle: string, newBody: string) => void
}

export const PostForm = (props: PropsPostFormType) => {

    const [post, setPost] = useState({title: '', body: ''})

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const onChangeBody = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({...post, body: e.currentTarget.value})
    }

    const addPostHandler = () => {
        props.addPost(post.title, post.body)
        setPost({title: '', body: ''})
    }


    return (
        <form>
            <MyInput value={post.title} onChange={onChangeTitle} title={'Название постов'}/>
            <MyInput value={post.body} onChange={onChangeBody} title={'Описание постов'}/>
            <MyButton addPost={addPostHandler}/>
        </form>
    );
};

