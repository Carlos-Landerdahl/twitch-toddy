import React from 'react'
import EpisodesList from '@/components/series/episodes'
import { seriesData } from '@/data/series'

interface PageParams {
  title: string
}

interface SeriesPageProps {
  params: PageParams
}

const SeriesPage: React.FC<SeriesPageProps> = ({ params }) => {
  const { title } = params

  const decodedTitle = decodeURIComponent(title)

  const selectedSerie = seriesData.find((serie) => serie.title === decodedTitle)

  return (
    <div className="bg-bg text-white p-4 px-7">
      <div className="max-w-7xl mt-[70px] flex flex-col justify-center m-auto">
        <h1 className="font-bold text-2xl">{selectedSerie?.title} 🔥</h1>
        {selectedSerie ? (
          <EpisodesList videos={selectedSerie.videos} />
        ) : (
          <p>Série não encontrada</p>
        )}
      </div>
    </div>
  )
}

export default SeriesPage
