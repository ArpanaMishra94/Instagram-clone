import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import SidebarSuggestions from './SidebarSuggestions';
import { SidebarSuggestionsData} from './SidebarSuggestionData';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar">
        <div className="sidebar__top">
            <Avatar className="avatar"
                src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
            <div className="sidebar__name">
                <h3> _a_r_p_a_n_a_</h3>
                <p> Arpana Mishra</p>
            </div>
            <h4>Switch</h4>
        </div>
        <div className="sidebar__mid">
            <h3>Suggestions For You</h3>
            <h5>See All</h5>
        </div>
            {SidebarSuggestionsData.map ((val) => {
                return(
            <SidebarSuggestions 
            suggestionsAvatar = {val.suggestionsAvatar} 
            suggestionsUsername = {val.suggestionsUsername}/> 
                )
            })}
        </div>
</div>
    )
}
