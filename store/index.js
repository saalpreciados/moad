export const state = () => ({
  showModal: false,
  showMap: false,
  currentSlide: 0,
  currentExpo: '',
  currentArt: {}
})

export const mutations = {
  toggleModal (state, payload) {
    if (payload === open) {
      state.showModal = true
    } else if (payload === close) {
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

  toggleMap (state) {
    state.showMap = !state.showMap
  },

  changeCurrentSlide (state, newSlide) {
    state.currentSlide = newSlide
  },

  changeCurrentArt (state, art) {
    state.currentArt = art
  }
}
