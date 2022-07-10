const getters = {
  step: (state) => state.step,
  count: (state) => state.count,
};

const actions = {
  increment({ commit }) {
    commit('increment');
  },
};

const mutations = {
  increment(state) {
    state.count += state.step;
  },
};

const state = {
  step: 1,
  count: 0,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
