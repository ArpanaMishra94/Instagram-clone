import React from 'react';
import './SidebarSuggestions.css';
import { Avatar } from '@material-ui/core';
export default function SidebarSuggestions({suggestionsAvatar, suggestionsUsername}) {
    return (
        <div className = "sidebarSuggestions">
          
         <Avatar className="avatar" src = {suggestionsAvatar}/>
              <div className = "sidebarSuggestions__text">
              <h3>{suggestionsUsername}</h3>
              <p>New to Instagram</p>
              </div>
              <h4>Follow</h4>
         </div>
    
    )
}