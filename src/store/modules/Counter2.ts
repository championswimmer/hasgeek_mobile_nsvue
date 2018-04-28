import {Action, Mutation, Module, VuexModule} from '../lib/vuex-ts-helpers'
import {Payload} from 'vuex'

const counterModule = new VuexModule({
  state: {
    count: 0
  },
  mutations: {
    decrement: (state, delta) => { state.count-=delta },
    increment: (state, delta) => { state.count+=delta }
  },
  actions: {
    incr: ({commit}) => commit('increment', 5),
    decr: ({commit}) => commit('decrement', 5),
  }
})

@Module
export default class Counter2 extends VuexModule {
  count = 0

  @Mutation increment(delta: number) {this.count+=delta}
  @Mutation decrement(delta: number) {this.count-=delta}

  @Action({commit: 'increment'}) incr() {return 5}
  @Action({commit: 'decrement'}) decr() {return 5}
}
// export default counterModule