import { BiArrowToBottom } from 'react-icons/bi'
import { MdMovieCreation } from 'react-icons/md'

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
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

export default function Series() {
  const videosRioChore = [
    { videoId: '7GigqFsxiBk', title: 'Temporada 01' },
    { videoId: 'uSAE3xSzrEQ', title: 'Temporada 02' },
    { videoId: 'bBbboX5j8ao', title: 'Temporada 03' },
    { videoId: 'PqCxa4RAQjI', title: 'Temporada 04' },
  ]

  const videosFeriasEx = [
    { videoId: 'K8too_LSCzM', title: 'Temporada 01' },
    { videoId: 'ltn_EXQttro', title: 'Temporada 02' },
    { videoId: 'jSTI2iAf5iA', title: 'Temporada 03' },
    { videoId: 'QOj_yktN2Nc', title: 'Temporada 04' },
  ]

  return (
    <div className="flex flex-col mt-10 gap-10">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          Seriados
          <MdMovieCreation size={20} className="text-icons" />
        </h1>
        <div className="flex flex-col justify-between mt-6">
          <h2 className="font-bold flex items-center gap-1 uppercase">
            <span className="animate-pulse">(+18)</span> Rio chore
            <BiArrowToBottom size={20} className="text-icons" />
          </h2>
          <div className="flex gap-4 w-full flex-wrap">
            {videosRioChore.map((video, index) => (
              <div key={index}>
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between mt-6">
          <h2 className="font-bold flex items-center gap-1 uppercase">
            <span className="animate-pulse">(+18)</span>De Férias com o Ex
            Brasil
            <BiArrowToBottom size={20} className="text-icons" />
          </h2>
          <div className="flex gap-4 w-full flex-wrap">
            {videosFeriasEx.map((video, index) => (
              <div key={index}>
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
