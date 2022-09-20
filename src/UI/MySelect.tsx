import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type PropsMySelectType = {
    sortList: (sort: string)=> void
    selectedSort: string
}


export const MySelect = (props: PropsMySelectType) => {

    const onChangeHandler = (e: SelectChangeEvent) => {
        props.sortList(e.target.value)
    }


    return (
        <FormControl sx={{minWidth: 182.5, marginTop: 1 }} size="small">
            <InputLabel id="demo-select-small" >Сортировка</InputLabel>
            <Select
                value={props.selectedSort}
                label="Сортировка"
                onChange={onChangeHandler}
            >
                <MenuItem value={'По названию'}>По названию</MenuItem>
                <MenuItem value={'По описанию'}>По описанию</MenuItem>
            </Select>
        </FormControl>
    );
};
