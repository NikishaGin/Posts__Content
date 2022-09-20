import React from 'react';
import {PostItem} from "./PostItem";
import {Alert} from "@mui/material";

export type ContentType = {
    id: number,
    title: string,
    body: string,
}

type PropsPostListType = {
    content: ContentType []
    title: string
    removePost: (id: number) => void
}

export const PostList = (props: PropsPostListType) => {

    if (!props.content.length) {
        return <Alert sx={{marginTop: 2}} severity="error">Посты не найдены!</Alert>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {props.title}
            </h1>
            {props.content.map((contentMap,index)=>
                <PostItem key={contentMap.id}
                          number={index + 1}
                          content={contentMap}
                          removePost={()=>props.removePost(contentMap.id)}
                />
            )}
        </div>
    );
};

