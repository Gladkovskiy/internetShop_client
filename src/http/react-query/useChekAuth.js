import {useQuery} from 'react-query'
import {check} from '../userAPI'
import user from '../../store/UserStore'

const useCheckAuth = () => {
  const query = useQuery('checkAuth', check, {
    onError(err) {
      localStorage.removeItem('token')
      user.setIsAuth(false)
    },
    onSuccess(data) {
      user.setUser(data)
      user.setIsAuth(true)
    },
    onSettled(data, err) {},
    retry: false,
    refetchOnWindowFocus: false,
  })
  return query
}

export default useCheckAuth
