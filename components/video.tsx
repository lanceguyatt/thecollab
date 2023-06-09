'use client'

import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

import { AspectRatio } from './ui/aspect-ratio'

interface IVideo {
  videoId: string
}

export default function Video({ videoId }: IVideo) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      enablejsapi: 1,
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      color: 'white',
      disablekb: 1,
      controls: 0,
      loop: 1,
      modestbranding: 1,
    },
  }

  return (
    <AspectRatio ratio={16 / 9} className="bg-[red]">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        className="absolute inset-0"
      />
    </AspectRatio>
  )
}
