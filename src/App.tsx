import React, {useMemo, useState} from 'react';
import './App.css'
import {PostList} from "./Components/PostList";
import {PostForm} from "./Components/PostForm";
import {PostFilter} from "./Components/PostFilter";


export type ContentType = {
    id: number,
    title: string,
    body: string,
}

export const App = () => {

    const [content, setContent] = useState<ContentType []>([
        {id: 1, title: 'JS', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'React', body: 'Библиотека для создания пользоваткльских интерфейсов'},
        {id: 3, title: 'OOP', body: 'объектно-ориентированное программирование'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [search, setSearch] = useState('')


    const sortList = (sort: string) => {
        setSelectedSort(sort)
           setContent([...content]
               .sort((a, b) => {
                   if (sort === 'По названию') {
                       return a.title.localeCompare(b.title)
                   }
                   return a.body.localeCompare(b.body)
               }))
        return content
    }

    const sortedAndSearchedPosts = useMemo(()=>{
        return content.filter(contentFilter => contentFilter.title.toLowerCase().includes(search.toLowerCase()))
    },[search, sortList])


    const addPost = (newTitle: string, newBody: string) => {
        let newPost = {id: Date.now(), title: newTitle, body: newBody}
        setContent([...content, newPost])
    }

    const removePost = (id: number) => {
        setContent(content.filter(el => el.id !== id))
    }


    return (
        <div className={'App'}>
            <PostForm addPost={addPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter sortList={sortList} selectedSort={selectedSort} setSearch={setSearch}/>
            <PostList removePost={removePost} content={sortedAndSearchedPosts} title={'Список постов'}/>
        </div>
    );
};


