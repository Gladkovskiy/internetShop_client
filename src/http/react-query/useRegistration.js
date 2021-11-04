import {useMutation} from 'react-query'
import {registration} from '../userAPI'
import {useHistory} from 'react-router-dom'

import {SHOP_ROUTE} from '../../utils/consts'
import user from '../../store/UserStore'

const useRegistration = () => {
  const {push} = useHistory()

  const mutate = useMutation(registration, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
    },
    onError(error, vars, context) {
      // console.log(error.response.data.message)
      //   console.log('onError:', error, vars, context)
      return error.response.data.message
    },
    onSuccess(data, vars, context) {
      user.setUser(data)
      user.setIsAuth(true)
      push(SHOP_ROUTE)
      //обновление get запроса
      //   console.log('onSuccess:', data, vars, context)
    },
    onSettled(data, error, vars, context) {
      //   console.log('onSettled:', data, error, vars, context)
    },
  })
  return mutate
}

export default useRegistration
