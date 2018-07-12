import {Module} from 'vuex'

interface AppSession {
  shouldAnimateHome: boolean
}
const appSession: Module<AppSession, any> = {
  state: {
    shouldAnimateHome: true
  },
  mutations: {
    homeAnimated(state: AppSession) {
      state.shouldAnimateHome = false
    }
  }
}

export default appSession