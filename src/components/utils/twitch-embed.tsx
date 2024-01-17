import React from 'react'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

interface TwitchPlayerProps {
  channel: string
}

const TwitchPlayer: React.FC<TwitchPlayerProps> = ({ channel }) => {
  return (
    <div className="flex flex-col gap-2 my-8 border-dashed border-1 border-border1 p-4 rounded hover:border-white transition-all ease-in-out">
      <h1 className="flex items-center gap-1 text-2xl font-bold p-2">
        Stream ao vivo
        <HiOutlineStatusOnline className="text-[#d35858] animate-pulse" />
      </h1>
      <ReactTwitchEmbedVideo
        channel={channel}
        width="100%"
        height="450px"
        layout="video"
      />
    </div>
  )
}

export default TwitchPlayer
