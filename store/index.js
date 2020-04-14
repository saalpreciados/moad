export const state = () => ({
  showModal: false,
  currentSlide: 0,
  currentExpo: ''
})

export const mutations = {
  toggleModal (state) {
    state.showModal = !state.showModal
  },

  changeCurrentSlide (state, payload) {
    state.currentSlide = state.currentSlide + payload
  }
}
