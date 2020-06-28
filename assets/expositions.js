import aerialTrams from './art/elvin-aliyev/aerial-trams.jpg'
import untitled1 from './art/motocross-saito/untitled-1.png'
import epsg from './epsg.js'
import expo1 from './expo1.js'
import expo2 from './expo2.js'

const expositions = [
  {
    title: 'Art digital de la gent de Gandia',
    img: epsg[7].src.url,
    description: "L'exposició inaugural del MOAD exposa art digital d'alumnes i ex-alumnes del Campus de Gandia. Molts d'ells han realitzat aquestes peces durant la quarantena, periode en el qual els mitjans expositius tradicionals no estaven disponibles.",
    url: 'epsg',
    id: 'epsg',
    expo: epsg
  },
  {
    title: 'Aerial Trams',
    img: aerialTrams,
    description: 'Elvin Aliyev',
    url: 'expo',
    id: 'expo1',
    expo: expo1
  },
  {
    title: 'Untitled 1',
    img: untitled1,
    description: 'Motocross Saito',
    url: '',
    id: 'expo2',
    expo: expo2
  }
]

export default expositions
