import {useMutation, useQueryClient} from 'react-query'
import {createType} from '../../deviceAPI'

const useCreateType = () => {
  const client = useQueryClient()

  const mutate = useMutation(createType, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
      //можно return и пробрасывать контекст в следющие onError, onSuccess, onSettled
    },
    onError(error, vars, context) {
      // console.log(error.response.data.message)
      //   console.log('onError:', error, vars, context)
    },
    onSuccess(data, vars, context) {
      client.invalidateQueries('deviceType')

      //обновление get запроса
      //   console.log('onSuccess:', data, vars, context)
    },
    onSettled(data, error, vars, context) {
      //   console.log('onSettled:', data, error, vars, context)
    },
  })
  return mutate
}

export default useCreateType
