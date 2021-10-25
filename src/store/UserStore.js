const {makeAutoObservable} = require('mobx')

class UserStore {
  isAuth = false
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
