'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel from '@/components/home/carousel'
import Series from '@/components/home/series'
import { seriesData } from '@/data/series'

export default function Home() {
  return (
    <main className="bg-bg text-white p-4 px-7 md:h-screen">
      <div className="max-w-7xl m-auto mt-[70px]">
        <Carousel />
        <Series series={seriesData} />
      </div>
    </main>
  )
}
