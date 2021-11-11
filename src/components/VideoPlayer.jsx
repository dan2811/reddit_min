import React from 'react'
import ReactPlayer from 'react-player'

export function Video(videoUrl) {    

        return (
            <ReactPlayer url={videoUrl.videoUrl} controls width="100%" height="100%"/>
        )
}