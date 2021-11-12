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

/* const UserStore = makeAutoObservable({
  isAuth: false,
  user: {},
  basketCountDevices: 0,

  setIsAuth: bool => (UserStore.isAuth = bool),
  setUser: user => (UserStore.user = user),
  setBasketCountDevices: number => (UserStore.basketCountDevices = number),
})

export default UserStore */
