import {VuexModule, Module, Mutation} from 'vuex-module-decorators'

@Module
export default class AppSession extends VuexModule {
  shouldAnimateHome = true

  @Mutation
  homeAnimated() {
    this.shouldAnimateHome = false
  }
}