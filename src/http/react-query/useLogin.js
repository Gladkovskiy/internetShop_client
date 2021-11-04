import {useMutation} from 'react-query'
import {login} from '../userAPI'
import {useHistory} from 'react-router-dom'

import {SHOP_ROUTE} from '../../utils/consts'
import user from '../../store/UserStore'

const useLogin = () => {
  const {push} = useHistory()

  const mutate = useMutation(login, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
      //можно return и пробрасывать контекст в следющие onError, onSuccess, onSettled
    },
    onError(error, vars, context) {
      // console.log(error.response.data.message)
      //   console.log('onError:', error, vars, context)
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

export default useLogin
