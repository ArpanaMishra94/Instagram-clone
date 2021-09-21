import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import {Avatar} from '@material-ui/core';
export default function Header() {
    return (<div className="header">
        <div className="header__left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU" alt=""/>
        </div>

        <div className="header__middle">
            <input placeholder="Search" type="text"/>
        </div>

        <div className="header__right">
            <HomeIcon style={
                    {
                        width: "2vw",
                        height: "3vh"
                    }
                }
                className=" header__menuOption"/>
            <MessageIcon style={
                    {
                        width: "2vw",
                        height: "3vh"
                    }
                }
                className=" header__menuOption"/>
            <ExploreIcon style={
                    {
                        width: "2vw",
                        height: "3vh"
                    }
                }
                className=" header__menuOption"/>
            <FavoriteBorderIcon style={
                    {
                        width: "2vw",
                        height: "3vh"
                    }
                }
                className=" header__menuOption"/>
        </div>
        <Avatar style={
                {
                    width: "2vw",
                    height: "4vh",
                }
            }
            className=" header__menuOption"
            src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
    </div>)
}
