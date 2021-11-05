import {makeAutoObservable} from 'mobx'

class UserStore {
  isAuth = false
  user = {}
  basketCountDevices = 0

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }

  setBasketCountDevices(number) {
    this.basketCountDevices = number
  }
}

export default new UserStore()
