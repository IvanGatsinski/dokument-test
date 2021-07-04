const state = () => ({
  loading: false
});

const mutations = {
  START_LOADER(state) {
    state.loading = true;
  },
  STOP_LOADER(state) {
    state.loading = false;
  },
};

const actions = {
  start_loader({ commit }) {
    commit('START_LOADER');
  },
  stop_loader({ commit }) {
    commit('STOP_LOADER');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}