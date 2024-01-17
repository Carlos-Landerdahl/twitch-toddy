'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Series from '@/components/home/series'
import { seriesData } from '@/data/series'
import TwitchPlayer from '@/components/utils/twitch-embed'

export default function Home() {
  return (
    <main className="bg-bg text-white px-7 py-5">
      <div className="max-w-7xl m-auto mt-[70px]">
        <TwitchPlayer channel="todynnpjl" />
        <Series series={seriesData} />
      </div>
    </main>
  )
}
