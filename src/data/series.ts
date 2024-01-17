export interface Video {
  videoId: string
  title: string
}

export interface Serie {
  id: string
  title: string
  videos: Video[]
}

export const seriesData: Serie[] = [
  {
    id: '1',
    title: 'RIO CHORE',
    videos: [
      { videoId: 'rmZlzQJDLL8', title: 'Episódio 1' },
      { videoId: 'rmZlzQJDLL8', title: 'Episódio 2' },
      { videoId: 'rmZlzQJDLL8', title: 'Episódio 3' },
      { videoId: 'uSAE3xSzrEQ', title: 'Episódio 4' },
    ],
  },
  {
    id: '2',
    title: 'DE FÉRIAS COM O EX',
    videos: [
      { videoId: 'K8too_LSCzM', title: 'Episódio 1' },
      { videoId: 'ltn_EXQttro', title: 'Episódio 2' },
      { videoId: 'ltn_EXQttro', title: 'Episódio 3' },
      { videoId: 'ltn_EXQttro', title: 'Episódio 4' },
    ],
  },
]