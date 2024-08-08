import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Home.css';
import Post from '../Posts/Posts';
import PostLoading from '../Posts/postLoading';
import {fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments} from '../../store/redditSlice';


const Home = () => {
    let posts = useState('');
    const reddit = useSelector((state) => state.reddit);
    const {isLoading, error, searchTerm, selectedSubreddit } = reddit;
    posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();


   useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        return getComments;
      }

        if (isLoading) {
          return (
            <l-line-wobble
              size="80"
              stroke="5"
              bg-opacity="0.1"
              speed="1.75" 
              color="black" 
            >
              <PostLoading />
            </l-line-wobble>
            
          );
        }
      
        if (error) {
          return (
            <div className="error">
              <h2>Failed to load posts.</h2>
              <button
                type="button"
                onClick={() => dispatch(fetchPosts(selectedSubreddit))}
              >
                Try again
              </button>
            </div>
          );
        }
      
        if (posts?.length === 0) {
          return (
            <div className="error">
              <h2>No posts matching "{searchTerm}"</h2>
              <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
                Go home
              </button>
            </div>
          );
        }
      
        return (
          <>
            {posts?.map((post, index) => (
              <Post
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
              />
            ))}
          </>
        );
    }

export default Home;