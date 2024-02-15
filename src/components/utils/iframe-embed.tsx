import React from 'react'

interface EmbedProps {
  videoId: string
  title: string
}

export default function IFrameEmbed({ videoId, title }: EmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 mt-4">
      <h3 className="text-subtext mt-2 pb-1">{title}</h3>
      <iframe
        width="100%"
        height="100%"
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  )
}
