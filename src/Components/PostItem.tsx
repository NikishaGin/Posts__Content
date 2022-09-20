import React from 'react';
import {Button} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {ContentType} from "../App";



type PropsPostItemType = {
    content: ContentType
    number: number
    removePost: () => void
}


export const PostItem = (props: PropsPostItemType) => {
    return (
        <div className={'post'}>
            <div className={'post__content'}>
                <strong>{props.number}. {props.content.title}</strong>
                <div>
                    {props.content.body}
                </div>
            </div>
            <div className={'post__btns'}>
                <Button variant="outlined"
                        startIcon={<Delete/>}
                        onClick={props.removePost}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
};

