export const state = () => ({
  showModal: false,
  showMap: false,
  currentSlide: 1,
  currentExpo: '',
  currentArt: {}
})

export const mutations = {
  toggleModal (state) {
    state.showModal = !state.showModal
  },

  resetExpo (state) {
    state.showModal = false
    state.showMap = false
    state.currentSlide = 1
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
