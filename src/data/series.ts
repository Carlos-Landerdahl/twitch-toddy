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
    title: 'Lives',
    videos: [
      {
        videoId: '1uLGPJSb3t7esAdZylCS2cMwaIdtL1N7L',
        title: 'Live - 13/01/24',
      },
      {
        videoId: '1u0AxkCkZFS6LvcQaMDse2ZZ7U9CHJvPE',
        title: 'Live - 15/01/24',
      },
      {
        videoId: '1rqE2WM1WV70wk_MIcMzHoWZMgTCyIEJ3',
        title: 'Live - 16/01/24',
      },
      {
        videoId: '1Y6EgIi5qD8j_FgjjaroBhsZsXgxAfhes',
        title: 'Live - 17/01/24',
      },
      {
        videoId: '1C2OOqWKjJZUZzajbwKbmQE9W7yUI24De',
        title: 'Live - 18/01/24',
      },
      {
        videoId: '1UQ5VQfGWAB36n_up-8Pt669phJFtXGRV',
        title: 'Live - 19/01/24 PARTE 1',
      },
      {
        videoId: '1K8QkdmHipdh8zF9cb29XNmDzZdZxjfyt',
        title: 'Live - 19/01/24 PARTE 2',
      },
      {
        videoId: '1v-KcMcW8AdbeaaUwZV8uHrLcQk2VT5Sm',
        title: 'Live - 22/01/24',
      },
      {
        videoId: '1vb554EbPN4qIiMj51h2UgXiDMEWQiyGA',
        title: 'Live - 23/01/24',
      },
      {
        videoId: '1HUEn_hI9sA0v9L7W31ObWKN1G7CxLJlr',
        title: 'Live - 24/01/24',
      },
      {
        videoId: '1G7lXqWQgAuxukKx9Vu9e_jaS0lBfk96n',
        title: 'Live - 25/01/24',
      },
    ],
  },
]
