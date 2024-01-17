'use client'

import { BsCollectionPlayFill } from 'react-icons/bs'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Series from './components/home/series'

interface YouTubeEmbedProps {
  videoId: string
}

function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 mt-4">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?si=1f1wzNOxpcYd7YRk`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

export default function Home() {
  const videos = ['7GigqFsxiBk', '7GigqFsxiBk', '7GigqFsxiBk']

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  }

  return (
    <main className="bg-bg text-white p-4 px-7 md:h-screen">
      <div className="flex flex-col max-w-7xl m-auto mt-[70px]">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          Últimas streams
          <BsCollectionPlayFill size={18} className="text-icons" />
        </h1>
        <div className="p-2">
          <Slider {...settings}>
            {videos.map((videoId) => (
              <YouTubeEmbed key={videoId} videoId={videoId} />
            ))}
          </Slider>
        </div>
        <Series />
      </div>
    </main>
  )
}
