import { configureStore, combineReducers } from '@reduxjs/toolkit'
import redditReducer from './redditSlice';
import subRedditReducer from './subredditSlice';



const store = configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddit: subRedditReducer,
    })
});

export default store;