import {makeAutoObservable} from 'mobx'

class UserStore {
  isAuth = true
  user = {}

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.isUser = user
  }
}

export default new UserStore()
