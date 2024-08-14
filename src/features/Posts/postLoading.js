import React from 'react';
import "./postLoading.css";
import './Posts.css';
import 'ldrs/ring2';
import {    LuArrowUp, LuArrowDown, LuMessageSquare} from 'react-icons/lu';


const PostLoading = () => {
    return (
        <article className="posts">
            <div className="posts-vote-container">
                <button
                 type="button"
                 className="icon-action-button-up-vote"
                 aria-label="Up vote"
                >
                    <LuArrowUp className="icon-action" />
                </button>

                <l-ring-2 
                    size="45"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="orange"
                    className="posts-votes-value posts-votes-value-loading"
                >
                </l-ring-2>
            
                <button
                 type="button"
                 className= "icon-action-button-down-vote"
                 aria-label="down vote"
                 >
                    <LuArrowDown className="icon-action" />
                 </button>

                 <l-ring-2
                  size="100"
                  stroke="5"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="orange"
                  >
                 </l-ring-2>

                <div className="post-container">
                    <h3 className="post-title">
                    <l-ring-2
                    size="100"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="orange"
                    >
                 </l-ring-2>
                    </h3>

                <div className="post-details">
                    <span>
                        <l-ring-2
                        size="150"
                        stroke="5"
                        stroke-length="0.25"
                        bg-opacity="0.1"
                        speed="0.8"
                    color="orange"
                    ></l-ring-2>
                    </span>

                <span className="post-comments-container">
                    <button 
                     type="button"
                     className="icon-action-button"
                     aria-label="Show-comments"
                     >
                        <LuMessageSquare className="icon-action" />
                     </button>
                    <l-ring-2
                    size="100"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="orange">
                   </l-ring-2>
                </span>
                </div>
                </div>
            
            </div>

        </article>
    )

}

export default PostLoading;