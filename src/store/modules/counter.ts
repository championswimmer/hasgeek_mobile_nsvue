import {ActionTree} from 'vuex'

interface CounterState {
  count: number
}
const state = {
  count: 0,
};

const mutations = {
  decrement (state: CounterState) {
    state.count--;
  },
  increment (state: CounterState) {
    state.count++;
  },
};

const actions = <ActionTree<CounterState, any>>{
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
};

export default {
  state,
  mutations,
  actions,
};
