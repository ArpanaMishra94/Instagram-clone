import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
export default function SidebarRow({src, username, fullname, suggestionsAvatar,suggestionsUsername}) {
    return(
        <div className = "sidebarRow">
        <div className = "sidebarRow__top">
            <Avatar className = "avatar" src = {src}/>
              <div className = "sidebarRow__name">
              <h3>{username}</h3>
              <p>{fullname}</p>
              </div>
              <h4>Switch</h4>
        </div>
         <div className = "sidebarRow__mid">
             <h3>Suggestions For You</h3> 
             <p>See All</p>
         </div>
         {/* <div className = "sidebarRow__bottom">
         <Avatar src = {suggestionsAvatar}/>
              <div className = "sidebarRow__bottomName">
              <h3>{suggestionsUsername}</h3>
              <p>New to Instagram</p>
              </div>
              <h4>Follow</h4>
         </div> */}
              
        </div>
    )
}   