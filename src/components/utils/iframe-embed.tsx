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
        className="w-full h-full"
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
