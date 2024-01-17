import dynamic from 'next/dynamic'

const ReactTwitchEmbedVideo = dynamic(
  () => import('react-twitch-embed-video'),
  {
    ssr: false,
  },
)

interface TwitchPlayerProps {
  channel: string
}

export default function TwitchPlayer({ channel }: TwitchPlayerProps) {
  return (
    <div>
      <ReactTwitchEmbedVideo
        channel={channel}
        width="100%"
        height="450px"
        layout="video"
      />
    </div>
  )
}
