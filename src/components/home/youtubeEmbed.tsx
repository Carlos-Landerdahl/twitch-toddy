import React from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 mt-4">
      <h3 className="text-subtext mt-2 pb-1">{title}</h3>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?si=1f1wzNOxpcYd7YRk`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
