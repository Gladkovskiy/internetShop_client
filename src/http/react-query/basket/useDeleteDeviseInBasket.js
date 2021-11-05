import {useMutation, useQueryClient} from 'react-query'
import {deleteDeviceInBasket} from '../../userAPI'

const useDeleteDeviceInBasket = () => {
  const client = useQueryClient()

  const mutate = useMutation(deleteDeviceInBasket, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
      //можно return и пробрасывать контекст в следющие onError, onSuccess, onSettled
    },
    onError(error, vars, context) {
      // console.log(error.response.data.message)
      //   console.log('onError:', error, vars, context)
    },
    onSuccess(data, vars, context) {
      client.invalidateQueries('getBasketDevices')
      client.invalidateQueries('getDeviceInBasket')

      //обновление get запроса
      //   console.log('onSuccess:', data, vars, context)
    },
    onSettled(data, error, vars, context) {
      //   console.log('onSettled:', data, error, vars, context)
    },
  })
  return mutate
}

export default useDeleteDeviceInBasket
