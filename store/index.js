export const state = () => ({
  showModal: false,
  showMap: false,
  currentSlide: {
    number: 0,
    id: ''
  },
  currentExpo: '',
  currentArt: {}
})

export const mutations = {
  toggleModal (state, payload) {
    if (payload === 'open') {
      state.showModal = true
    } else if (payload === 'close') {
      state.showModal = false
    } else {
      state.showModal = !state.showModal
    }
  },

  resetExpo (state) {
    state.showModal = false
    state.showMap = false
    state.currentSlide = 0
  },

  toggleMap (state, payload) {
    if (payload === 'open') {
      state.showMap = true
    } else if (payload === 'close') {
      state.showMap = false
    } else {
      state.showMap = !state.showMap
    }
  },

  changeCurrentSlide (state, newCurrentSlide) {
    state.currentSlide = newCurrentSlide
  },

  changeCurrentArt (state, art) {
    state.currentArt = art
  }
}
