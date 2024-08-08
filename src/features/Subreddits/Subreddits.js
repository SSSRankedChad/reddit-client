import {React, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../components/Card/card';
import './Subreddits.css';
import {fetchSubreddits, selectSubreddits} from '../../store/subredditSlice';
import {setSelectedSubreddit, selectSelectedSubereddit} from '../../store/redditSlice';


const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddits = useSelector(selectSelectedSubereddit);


    useEffect(() => {
        dispatch(fetchSubreddits)
    }, [dispatch]);


    return (
        <Card className="subreddit-card">
            <h2> Subreddits </h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li
                     key={subreddit.id}
                     className={`${selectedSubreddits === subreddit.url && `selected-subreddit`}`}
                     >
                      <button
                       type="button"
                       onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                      >
                       <img 
                        src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                        alt={subreddit.display_name}
                        />
                         {subreddit.display_name}
                      </button>

                     </li>
                ))}
            </ul>
        </Card>
    )
}

export default Subreddits;