import React from 'react';
import {MySelect} from "../UI/MySelect";
import TextField from "@mui/material/TextField";

type PropsPostFilterType = {
    sortList: (sort: string) => void
    selectedSort: string
    setSearch: (search: string) => void
}



export const PostFilter = (props: PropsPostFilterType) => {

    return (
        <div>
            <MySelect sortList={props.sortList} selectedSort={props.selectedSort}/>

            <TextField sx={{ ml: 55, flex: 1, width: 177.5 }}
                       id="standard-basic"
                       label="Поиск"
                       variant="standard"
                       onChange={event => props.setSearch(event.currentTarget.value)}
            />
        </div>
    );
};

