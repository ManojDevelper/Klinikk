import React, { useState } from "react";
import { VideoSection } from "./styles";
import video from "../../../data/assets/bannerpop.mp4";

const Video = () =>
{



    return (
        <VideoSection >
            <div id="banner_pop_video">
                <video autoPlay controls id="player">
                    <source src={ video } type="video/mp4" />
                    <track src="" kind="captions" srclang="en" label="english_captions"></track>
                </video>
            </div>
        </VideoSection>
    );
};

export default Video;