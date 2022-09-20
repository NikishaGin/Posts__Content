import React, {ChangeEvent} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type PropsMyInputType = {
    title: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    value: string
}

export const MyInput = (props: PropsMyInputType) => {
    return (
        <>
            <Box
                sx={{
                    marginTop: 2,
                    width: 1000,
                    maxWidth: '100%',
                    height: 65
                }}
            >
                <TextField value={props.value} onChange={props.onChange} fullWidth label={props.title} id="fullWidth" />
            </Box>
        </>
    );
};

