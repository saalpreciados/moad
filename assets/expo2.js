import aerialTrams from '~/assets/art/elvin-aliyev/aerial-trams.jpg'
import station from '~/assets/art/elvin-aliyev/celestial-station.jpg'
import thePlanet from '~/assets/art/elvin-aliyev/the-planet.png'

const expo2 = [
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
  }
]

export default expo2
