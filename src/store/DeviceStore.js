import {makeAutoObservable} from 'mobx'

class DeviceStore {
  //пока нет базы используем просто массивы с данными
  type = [
    {id: 1, name: 'Холодильник'},
    {id: 2, name: 'Смартфоны'},
    {id: 3, name: 'Ноутбуки'},
    {id: 4, name: 'Телевизоры'},
  ]
  brand = [
    {id: 1, name: 'Samsung'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Saturn'},
    {id: 4, name: 'Panasonic'},
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
    {
      id: 5,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
    {
      id: 6,
      name: 'Iphone 12 pro',
      price: 10000,
      rating: 5,
      img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
    },
  ]

  selectedType = {}
  selectedBrand = {}

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

  setSelectedType(type) {
    this.selectedType = type
  }

  setSelectedBrand(brand) {
    this.selectedBrand = brand
  }
}

export default new DeviceStore()
