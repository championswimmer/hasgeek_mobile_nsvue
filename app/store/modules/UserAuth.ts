import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import User from '@/models/User'
import * as settings from 'tns-core-modules/application-settings'
import store from '@/store'

@Module({ dynamic: true, name: 'userAuth', namespaced: true, store })
class UserAuth extends VuexModule {
  _token: string = ''
  user: User | {fullname: string} = {fullname: 'Guest'}

  get authToken(): string {
    return this._token
  }

  get username(): string {
    return this.user.fullname
  }

  @Mutation
  setAuthToken(token: string) {
    settings.setString('auth_token', token)
    this._token = token
  }

  @Mutation
  saveUser(userToSave: User) {
    settings.setString('user', JSON.stringify(userToSave))
    this.user = userToSave
  }

  @Mutation
  retrieveUser() {
    this._token = settings.getString('auth_token', '')
    const savedUser = JSON.parse(settings.getString('user', null))
    if (savedUser) {
      this.user = savedUser
    }
  }
}

const userAuth = getModule(UserAuth)
export default userAuth