import {useQuery} from 'react-query'
import {getDeviceInBasket} from '../../userAPI'

const useDeviceInBasket = basketId => {
  const query = useQuery(
    ['getDeviceInBasket', basketId],
    () => getDeviceInBasket(basketId),
    {
      placeholderData() {
        return []
      },
      onError(err) {},
      onSuccess(data) {},
      onSettled(data, err) {},
      retry: 1,
    }
  )
  return query
}

export default useDeviceInBasket
