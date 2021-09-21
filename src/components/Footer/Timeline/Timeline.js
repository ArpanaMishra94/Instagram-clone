import React from 'react';
import './Timeline.css';
import StoryReels from './StoryReels';
import './StoryReels.css';
import Post from './Post';
import {StoryReelsData} from './StoryReelsData';
import {PostData} from './PostData';
export default function Timeline() {
    return (<div className="timeline">
        <div className="storyReels"> {
            StoryReelsData.map((val) => {
                return (<StoryReels username={
                        val.username
                    }
                    imageUrl={
                        val.imageUrl
                    }/>)
            })
        } </div>
        {
        PostData.map((val) => {
            return (<Post userImg={
                    val.userImg
                }
                username={
                    val.username
                }
                caption={
                    val.caption
                }
                imageUrl={
                    val.imageUrl
                }
                timespan={
                    val.timespan
                }
                like={
                  val.like
                }  
                noOflikes={
                  val.noOfLikes
                }
                />)
        })
    } </div>)
}
