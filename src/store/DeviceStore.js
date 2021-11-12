import {makeAutoObservable} from 'mobx'

class DeviceStore {
  selectedType = {id: null}
  selectedBrand = {id: null}

  page = 1
  limit = 2

  isRayting = false
  rating = 0

  constructor() {
    makeAutoObservable(this)
  }

  setRating(rate) {
    this.rating = rate
  }

  setIsRayting(trueFalse) {
    this.isRayting = trueFalse
  }

  setSelectedType(type) {
    this.selectedType = type
    this.page = 1
  }

  setSelectedBrand(brand) {
    this.selectedBrand = brand
    this.page = 1
  }

  setDefaultFilters() {
    this.selectedType = {id: null}
    this.selectedBrand = {id: null}
  }

  setPage(page) {
    this.page = page
  }
}

export default new DeviceStore()
