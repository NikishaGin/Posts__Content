import React from 'react';
import {Button} from "@mui/material";
import {Send} from "@mui/icons-material";

type PropsMyButtonType = {
    addPost: () => void
}

export const MyButton = (props: PropsMyButtonType) => {
    return (
        <Button
            variant="contained"
            endIcon={<Send/>}
            onClick={props.addPost}
        >
            Добавить пост
        </Button>
    );
};

