import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import User from '@/models/User'
import * as settings from 'tns-core-modules/application-settings'
import store from '@/store'

@Module({dynamic: true, name: 'userAuth', namespaced: true, store})
class UserAuth extends VuexModule {
  authToken: string | null
  user: User

  @Mutation
  setAuthToken(token: string) {
    settings.setString('auth_token', token)
    this.authToken = token
  }

  @Mutation
  saveUser (userToSave: User) {
    settings.setString('user', JSON.stringify(userToSave))
    this.user = userToSave
  }

  @Mutation
  retrieveUser () {
    this.authToken = settings.getString('auth_token', null)
    this.user = JSON.parse(settings.getString('user', null))
  }
}

const userAuth: UserAuth = getModule(UserAuth)
userAuth.retrieveUser()

export default userAuth