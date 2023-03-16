import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg';
import { setLocalStorage } from '../../utils/LocalStorage';
import "./SearchField.css";

export default function SearchField (props) {
    const {setSearch, search, setPageNum} = props;

    function handleSubmit(e) {
        e.preventDefault();  
    }

    function handleChange(e){
        setPageNum(1);
        setSearch(e.target.value);
        setLocalStorage("search", e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="input-field">
            <SearchIcon />
            <input className="user-unput" type="text" placeholder="Filter by name ..." onChange={handleChange} value={search}/>
        </form>
    );
}


