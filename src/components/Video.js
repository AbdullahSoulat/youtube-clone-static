import React from "react";
import verfiedChannelSVG from "../images/icons/verified-channel.svg"

export default function Video(props) {
    console.log(props.item.channelProfilePath)
    return (
        <div className="video-container">
            <div className="thumbnail-container">
                <img src={props.item.imgPath} alt="thumbnail" className="thumbnail" />
                <p className="video-runtime">{props.item.videoRunTime}</p>
            </div>
            <div className="video-bottom">
                <img src={props.item.channelProfilePath} alt="channel profile image" className="channel-image"/>
                <div>
                    <p className="video-title">{props.item.videoTitle}</p>
                    <div className="channel">
                        <p className="channel-name">{props.item.channelName}</p>
                        {props.item.isVerified && <img src={verfiedChannelSVG} />}
                    </div>
                    <p className="views">{`${props.item.views} views • ${props.item.releaseTime} ago`}</p>
                </div>
            </div>
        </div>
    )
}