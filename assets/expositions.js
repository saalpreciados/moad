import epsg from './expositions/epsg.js'
// import expo1 from './expositions/expo1.js'
// import expo2 from './expositions/expo2.js'

const expositions = [
  {
    title: 'Universitat en quarantena: art digital del Campus de Gandia',
    img: epsg[5].src.url,
    description: "L'exposició inaugural del MOAD exposa art digital d'alumnes i ex-alumnes del Campus de Gandia. Molts d'ells han realitzat aquestes peces durant la quarantena, periode en el qual els mitjans expositius tradicionals no estaven disponibles.",
    url: 'epsg',
    id: 'epsg',
    expo: epsg
  },
  {
    title: 'Exposició en construcció',
    img: epsg[7].src.url,
    description: 'Esta exposició està en construcció.',
    url: '',
    id: '',
    expo: epsg
  }
  /* {
    title: 'Aerial Trams',
    img: expo1[0].src.url,
    description: 'Elvin Aliyev',
    url: 'expo',
    id: 'expo1',
    expo: expo1
  },
  {
    title: 'Untitled 1',
    img:  expo2[0].src.url,
    description: 'Motocross Saito',
    url: '',
    id: 'expo2',
    expo: expo2
  } */
]

export default expositions
