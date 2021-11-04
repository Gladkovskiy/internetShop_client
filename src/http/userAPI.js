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
