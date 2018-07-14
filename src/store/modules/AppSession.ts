import {VuexModule, Module, Mutation} from 'vuex-module-decorators'

@Module
export default class AppSession extends VuexModule {
  shouldAnimateHome = false

  @Mutation
  homeAnimated() {
    this.shouldAnimateHome = true
  }
}