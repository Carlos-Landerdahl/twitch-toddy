import { MdMovieCreation } from 'react-icons/md'
import SerieComponent from './serieComponent'
import { Spinner } from '@nextui-org/react'

interface Video {
  videoId: string
  title: string
}

interface Serie {
  id: string
  title: string
  videos: Video[]
}

interface SeriesProps {
  series: Serie[]
}

export default function Series({ series }: SeriesProps) {
  return (
    <div className="flex flex-col mt-10 gap-10">
      <h1 className="text-2xl font-bold text-white flex items-center gap-2">
        Seriados
        <MdMovieCreation size={20} className="text-icons" />
      </h1>

      {!series ? (
        <div className="flex items-top gap-2 m-auto h-dvh">
          <span className="animate-pulse text-2xl font-bold">
            TodynnPJL
            <Spinner size="sm" className="pl-2" />
          </span>
        </div>
      ) : (
        series.map((serie) => (
          <div key={serie.id}>
            <SerieComponent serie={serie} />
          </div>
        ))
      )}
    </div>
  )
}
