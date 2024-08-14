import {React, useState} from 'react';
import Card from "../../components/Card/card";
import Comment from "../PostComments/Comment";
import Avatar from "../Avatar/Avatar";
import moment from 'moment';
import 'ldrs/ring2';
import './Posts.css';
import shortenNumber from "../../utils/shortenNumber"
import {LuArrowDown, LuArrowUp, LuArrowBigUp, LuArrowBigDown, LuMessageSquare} from 'react-icons/lu'




const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const [post, onToggleComments] = props;


    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        }
        else if (newValue === 1) {
            setVoteValue(1)
        }
        else {
            setVoteValue(-1)
        }
    }

    const renderUpVote = () => {
        if(voteValue === 1) {
            return <LuArrowBigUp className="icon-action" />
        }
    return <LuArrowUp className="icon-action" />
    }

    const renderDownVote = () => {
        if(voteValue === -1) {
            return <LuArrowBigDown className="icon-action" />
        }
     return <LuArrowDown className="icon-action" />
    }

    const getVote = () => {
        if(voteValue === 1) {
            return `Up vote`
        }
        if (voteValue === -1) {
            return 'Down vote'
        }
    return '';
    }

    const renderComments = () => {
        if(post.errorComments) {
            return (
             <div>
                <h3> Error loading comments </h3>
             </div>
            )
        }
        
        if (post.loadingComments)  {
            return (
                <div>
                 <l-ring-2
                    size="45"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="orange"
                >
                 </l-ring-2>
                </div>

            )
        }

        if (post.loadedComments) {
            return (
            <div>
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
            </div>
            )
        }
      return null; 
    }

        return (
          <article key = {post.id}>
            <Card>
                <div className="post-wrapper">
                    <div className="post-wrapper-container">
                        <button
                          type="button"
                          className={`icon-action-up-vote-button ${voteValue === 1 && 'active'}
                          }`}
                          onClick={onHandleVote(1)}
                          aria-label="Up vote"
                         >
                          {renderUpVote()}
                         </button>

                         <p className={`post-votes-value ${getVote()}`}>
                           {shortenNumber(post.ups, 1)}
                         </p>

                         <button 
                          type="button"
                          className={`icon-action-up-vote-button ${voteValue === -1 && 'active'}
                          }`}
                          onClick={onHandleVote(-1)}
                          aria-label="Down vote"
                          >
                            {renderDownVote()}
                          </button>

                        <div className="post-container">
                            <div className="post-title"> {post.title} </div>
                            <div className="post-image-container"> <img src={post.url} alt="" className="post-image" /></div>
                            <div className = "post-details">
                                <span className= "Author-details">
                                    <Avatar name= {post.author} />
                                    <span className="author-username"> {post.author} </span>
                                </span> 
                                <span> {moment.unix(post.created_utc).fromNow()} </span>
                                <span className="post-comment-container">
                                    <button 
                                     type="button"
                                     className={`icon-action-up-vote-button ${post.showingComments && 'showing comments'
                                        }`}
                                     onClick={() => onToggleComments(post.permalink)}
                                     aria-label="show-comments"
                                    >
                                 <LuMessageSquare className= "icon-action" />
                                    </button>
                                {shortenNumber(post.num_comments, 1)}
                                </span>
                            </div>

                        </div>

                    {renderComments()}

                    </div>
                </div>
            </Card>
          </article>
        )

}

export default Post;