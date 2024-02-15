import React from 'react'
import IFrameEmbed from '../utils/iframe-embed'
import { Video } from '@/data/series'

interface EpisodesListProps {
  videos: Video[]
}

export default function EpisodesList({ videos }: EpisodesListProps) {
  return (
    <div className="flex gap-6 items-center justify-center flex-wrap">
      {videos.map((video, index) => (
        <div key={index} className="">
          <IFrameEmbed videoId={video.videoId} title={video.title} />
        </div>
      ))}
    </div>
  )
}
