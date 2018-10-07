import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '..'

@Module({dynamic: true, name: 'appSession', store})
class AppSession extends VuexModule {
  shouldAnimateHome = true

  @Mutation
  homeAnimated() {
    this.shouldAnimateHome = false
  }
}
export default getModule(AppSession)