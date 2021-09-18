import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
export default function Post({username, userImg, caption, imageUrl, timespan}) {
    return (
        // <div className="post">
           
                    <div className="left__feed">
                        <div className = "feed__header">
                          <Avatar  src = {userImg} alt = ""/>
                          <h3>{username}</h3>
                        </div>
                        <div >
                            <img id = "feed__image" src = {imageUrl} alt = ""/>
                           <div className = "postIcons">
                           <FavoriteBorderOutlinedIcon style={{ width: "2vw", height: "6vh" }} className = "postIconss"/>
                           <ModeCommentOutlinedIcon style={{ width: "2vw", height: "6vh" }} className = "postIconss"/>
                           <SendOutlinedIcon style={{ width: "2vw", height: "6vh" }} className = "postIconss"/>
                           </div>
                           <div className = "likeTab">
                              <Avatar id = "avatar" src = {userImg} alt = ""/>
                              <span>Liked by <strong> kaur_simran93</strong> and <strong>34 others</strong></span>
                           </div>
                           <h4 className = "feed__text"> <strong> { username}</strong>  {caption}</h4>
                           <span className = "postTime">{timespan}</span>
                           <div>
                           {/* <SentimentSatisfiedOutlinedIcon style={{ width: "2vw", height: "6vh" }} className = "commentIcon"/> */}
                           <input  className = "comment" placeholder = "Add a comment..." type = "text"/>

                           </div>
                        </div>
                    </div>
                
        // {/* </div> */}
    )
}
