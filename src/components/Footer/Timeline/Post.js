import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
export default function Post({
    username,
    userImg,
    caption,
    imageUrl,
    timespan,
    like,
    noOflikes
}) {
    return (<div className="post">
        <div className="post__header">
            <Avatar src={userImg}
                alt=""/>
            <h3> {username}</h3>
        </div>
        <img id="post__image"
            src={imageUrl}
            alt=""/>
        <div className="post__icons">
            <FavoriteBorderOutlinedIcon style={
                    {
                        width: "2vw",
                        height: "6vh"
                    }
                }
                className="post__iconss"/>
            <ModeCommentOutlinedIcon style={
                    {
                        width: "2vw",
                        height: "6vh"
                    }
                }
                className="post__iconss"/>
            <SendOutlinedIcon style={
                    {
                        width: "2vw",
                        height: "6vh"
                    }
                }
                className="post__iconss"/>
        </div>
        <div className="post__likeTab">
            <Avatar id="avatar"
                src={userImg}
                alt=""/>
            <span>Liked by {' '}
                <strong> {like}</strong>
                {' '}
                and {' '}
                <strong> {noOflikes}</strong>
            </span>
        </div>
        <h4 className="post__text">
            <strong> {username}</strong>
            {caption}</h4>
        <span className="post__time"> {timespan}</span>
        <div className="post__footer">
            <SentimentSatisfiedOutlinedIcon style={
                    {
                        width: "2vw",
                        height: "3vh"
                    }
                }
                className="postFooter__commentIcon"/>
            <input className="postFooter__comment" placeholder="Add a comment..." type="text"/>
        </div>

    </div>)
}
