import React from 'react';
import './Timeline.css';
import StoryReels from './StoryReels';
import './StoryReels.css';
import Post from './Post';
export default function Timeline() {
    return(
        <div className = "timeline">
        <div className = "storyReels" >
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
             <StoryReels username = "arp" imageUrl = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
        </div>
        <Post
        userImg="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        username="arpana"
        caption="Woww! what a beautiful city..."
        imageUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg&w=1100&h=737&c=sc&poi=face&q=85"
        timespan = "4 HOURS AGO"

      />
      <Post
        userImg="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        username="arpana"
        caption="woww"
        imageUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg&w=1100&h=737&c=sc&poi=face&q=85"
        timespan = "2 HOURS AGO"
      />
      <Post
        userImg="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        username="arpana"
        caption="woww"
        imageUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg&w=1100&h=737&c=sc&poi=face&q=85"
        timespan = "7 HOURS AGO"

        />
           
            

      </div>
    )
}