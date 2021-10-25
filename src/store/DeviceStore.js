const {makeAutoObservable} = require('mobx')

class DeviceStore {
  //пока нет базы используем просто массивы с данными
  type = [
    {id: 1, name: 'Холодильник'},
    {id: 2, name: 'Смартфоны'},
  ]
  brand = [
    {id: 1, name: 'Samsung'},
    {id: 2, name: 'Apple'},
  ]
  devices = [
    {
      id: 1,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
    {
      id: 2,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
    {
      id: 3,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
    {
      id: 4,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  setType(type) {
    this.isAuth = type
  }

  setBrand(brand) {
    this.isUser = brand
  }

  setDevices(devices) {
    this.isUser = devices
  }
}

export default new DeviceStore()
