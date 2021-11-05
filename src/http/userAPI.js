import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async info => {
  const {data} = await $host.post('api/user/registration', {
    ...info,
    role: 'ADMIN',
  })
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

//info = {email,password}
export const login = async info => {
  const {data} = await $host.post('api/user/login', info)
  //закинули токен в локал сторедж и разобрали его для информации
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

//Basket - необходимо было пернести в отдельный файл basketApi
export const getBasket = async basketId => {
  const {data} = await $authHost.get('api/user/basket', {params: {basketId}})
  return data
}

export const addDevicetoBasket = async info => {
  const {data} = await $authHost.post('api/user/basket', info)
  return data
}

export const getDeviceInBasket = async basketId => {
  const {data} = await $authHost.get('api/user/basketDevices', {
    params: {basketId},
  })
  return data
}

export const deleteDeviceInBasket = async info => {
  const {data} = await $authHost.delete('api/user/basket', {data: info})
  return data
}
