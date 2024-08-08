import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Header.css';
import { SlMagnifier } from 'react-icons/sl';
import { RiRedditLine } from "react-icons/ri";

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onHandleSearchTerm = (e) => {
        setSearchTermLocal(e.target.value);
    }

    useEffect(() => {
    setSearchTermLocal(searchTerm)
    }, [searchTerm])

    const handleSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTermLocal(searchTerm))
    }

    return (
      <header>
        <div className='logo'>
        <RiRedditLine className="logo-icon" />
         <p>
            <span> Nu</span>Reddit
         </p>
        </div>
       <form className='search' onSubmit={handleSearchTermSubmit}>
        <input 
         type="text"
         placeholder='search' 
         value = {searchTermLocal}
         onChange={onHandleSearchTerm}
         aria-label="Search posts" />
       </form>

       <button type="submit" onClick={handleSearchTermSubmit}> 
        <SlMagnifier />
       </button>
      </header>
    )
    
}

export default Header;