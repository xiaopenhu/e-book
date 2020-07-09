const book = {
  state: {
    fileName: ''
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName: ({ commit, state }, fileName) => {
      commit('SET_FILENAME', fileName)
    }
  },
  modules: {
  }
}
export default book
