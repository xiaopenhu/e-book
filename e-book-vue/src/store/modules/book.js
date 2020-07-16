const book = {
  state: {
    fileName: '',
    menuVisible: true
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    }
  },
  actions: {
    setFileName: ({ commit, state }, fileName) => {
      commit('SET_FILENAME', fileName)
    },
    setMenuVisible: ({ commit, state }, menuVisible) => {
      commit('SET_MENUVISIBLE', menuVisible)
    }
  },
  modules: {
  }
}
export default book
