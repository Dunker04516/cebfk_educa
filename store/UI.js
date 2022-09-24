export const state = () => ({
  Sidebar: {
    collapsed: false,
  },
  Window: {
    width: window.innerWidth
  }
})

export const getters = {
  getSidebarInfo() {
    return state.Sidebar
  },
}

export const mutations = {
  sidebarToggle(state) {
    state.Sidebar.collapsed = !state.Sidebar.collapsed
  },
  windowResize(state, windowWidth) {
    state.Window.width = windowWidth
    if (windowWidth < 700) {
      state.Sidebar.collapsed = true
    } else {
      state.Sidebar.collapsed = false
    }
  }
}

export const actions = {}
