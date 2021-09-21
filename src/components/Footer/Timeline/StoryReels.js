import React, { useState } from 'react';
import './StoryReels.css';
export default function StoryReels({username, imageUrl}){
  
    return(
        // <div className = "storyReels">
           <div className = "stories__info">
              <div className = "stories__image">
              <span>
                 <img  className = "stories__img" src = {imageUrl} alt = ""/>
              </span>
            </div>
              <div className = "stories__name">{username}</div>
           </div>
        // </div>
    )
}