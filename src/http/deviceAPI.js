import {$host, $authHost} from './index'

// TYPE-api
export const getType = async () => {
  const {data} = await $host.get('api/type')
  return data
}

export const createType = async name => {
  const {data} = await $authHost.post('api/type', name)
  return data
}

export const deleteType = async name => {
  //в delete нет body, из-за этого прописуется {data: {тутданные}} как боди
  const {data} = await $authHost.delete('api/type', {data: name})
  return data
}

// BRAND-api
export const getBrand = async () => {
  const {data} = await $host.get('api/brand')
  return data
}

export const createBrand = async name => {
  const {data} = await $authHost.post('api/brand', name)
  return data
}

export const deleteBrand = async name => {
  //в delete нет body, из-за этого прописуется {data: {тутданные}} как боди
  const {data} = await $authHost.delete('api/brand', {data: name})
  return data
}

//DEVICE-api
export const getDevice = async (brandId, typeId, page, limit = 5) => {
  const {data} = await $host.get('api/device', {
    params: {brandId, typeId, page, limit},
  })
  return data
}

export const getOneDevice = async id => {
  const {data} = await $host.get(`api/device/${id}`)
  return data
}

//когда передаём в form-data - и есть уже объект
export const createDevice = async device => {
  const {data} = await $authHost.post('api/device', device)
  return data
}

export const deleteDevice = async name => {
  //в delete нет body, из-за этого прописуется {data: {тутданные}} как боди
  const {data} = await $authHost.delete('api/device', {data: {name}})
  return data
}

export const createRayting = async rating => {
  const {data} = await $authHost.post('api/rayting', rating)
  return data
}
