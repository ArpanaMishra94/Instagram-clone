import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SidebarSuggestions from './SidebarSuggestions';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
            
            <SidebarRow  src= "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" username = 'arpana' fullname = 'Arpana Mishra'/>
            <SidebarSuggestions suggestionsAvatar = "https://171rental.com/images/stu.png" suggestionsUsername = 'sonal'/>
            <SidebarSuggestions suggestionsAvatar = "https://171rental.com/images/stu.png" suggestionsUsername = 'sonal'/>
            <SidebarSuggestions suggestionsAvatar = "https://171rental.com/images/stu.png" suggestionsUsername = 'sonal'/>
            <SidebarSuggestions suggestionsAvatar = "https://171rental.com/images/stu.png" suggestionsUsername = 'sonal'/>
            </div>
            
        </div>
    )
}
