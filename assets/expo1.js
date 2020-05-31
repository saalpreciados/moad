import aerialTrams from '~/assets/art/elvin-aliyev/aerial-trams.jpg'
import station from '~/assets/art/elvin-aliyev/celestial-station.jpg'
import stairs from '~/assets/art/elvin-aliyev/stairs.jpg'
import thePlanet from '~/assets/art/elvin-aliyev/the-planet.png'
import untitled1 from '~/assets/art/motocross-saito/untitled-1.png'

const expo1 = [
  {
    id: 'whatever-title',
    html: '<h1>Expo 1</h1>',
    title: 'Whatever title',
    description: '',
    custom: true
  }, {
    id: 'aerial-trams',
    title: 'Aerial Trams',
    src: {
      type: 'img',
      url: aerialTrams,
      thumbnail: aerialTrams
    },
    author: 'Elvin Aliyev',
    tags: ''
  },
  {
    id: 'test',
    title: 'Test',
    src: {
      type: '3d',
      url: '../models/test.obj'
    },
    author: 'Test',
    tags: ''
  },
  {
    id: 'custom-1',
    html: '<h1>Commodo consequat.</h1>',
    title: 'Whatever title',
    description: '',
    custom: true
  },
  {
    id: 'html',
    title: 'HTML',
    src: {
      type: 'html',
      url: 'https://wwwwwwwww.jodi.org/100cc/index.html',
      thumbnail: untitled1
    },
    author: 'Test',
    tags: ''
  },
  {
    id: 'video',
    title: 'Video',
    src: {
      type: 'video',
      url: '../video/mov_bbb.mp4',
      thumbnail: untitled1
    },
    author: 'Test',
    tags: ''
  },
  {
    id: 'station',
    title: 'Station',
    src: {
      type: 'img',
      url: station,
      thumbnail: station
    },
    author: 'Elvin Aliyev',
    tags: ''
  },
  {
    id: 'the-planet',
    title: 'The Planet',
    src: {
      type: 'img',
      url: thePlanet,
      thumbnail: thePlanet
    },
    author: 'Elvin Aliyev',
    tags: ''
  },
  {
    id: 'stairs',
    title: 'Stairs',
    src: {
      type: 'img',
      url: stairs,
      thumbnail: stairs
    },
    author: 'Elvin Aliyev',
    tags: ''
  },
  {
    id: 'custom-2',
    html: '',
    title: '',
    details: '',
    custom: true
  },
  {
    id: 'untitled',
    title: 'Untitled 1',
    src: {
      type: 'img',
      url: untitled1,
      thumbnail: untitled1
    },
    author: 'Motocross Saito',
    tags: ''
  }
]

export default expo1
