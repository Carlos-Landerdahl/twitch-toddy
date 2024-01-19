import React from 'react'
import IFrameEmbed from '../utils/iframe-embed'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { Serie } from '@/data/series'

interface SerieComponentProps {
  serie: Serie
}

const SerieComponent: React.FC<SerieComponentProps> = ({ serie }) => {
  return (
    <div>
      <h2 className="font-bold px-4 flex justify-start items-center gap-1">
        <span className="animate-pulse uppercase">(+18)</span>
        {serie.title}
        <Link
          href={`/series/${encodeURIComponent(serie.title)}`}
          as={`/series/${encodeURIComponent(serie.title)}`}
          className="flex items-top gap-1 text-sm text-subtitle pl-5 underline"
        >
          ver todos <MdArrowOutward size={10} />
        </Link>
      </h2>
      <div className="flex justify-center gap-4 w-full flex-wrap md:justify-start">
        {serie.videos.map((video, index) => (
          <div key={index}>
            <IFrameEmbed videoId={video.videoId} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SerieComponent
