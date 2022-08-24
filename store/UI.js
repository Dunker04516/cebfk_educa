export const state = () => ({
  Sidebar: {
    collapsed: false,
  },
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
}

export const actions = {}
