import {Module, VuexModule} from 'vuex-module-decorators'

@Module
export default class UserAuth extends VuexModule {
  authToken: string
}