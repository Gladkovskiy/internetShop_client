import {useQuery} from 'react-query'
import {getBasket} from '../../userAPI'
import user from '../../../store/UserStore'

const useDeviceAllBrandGET = basketId => {
  const query = useQuery(
    ['getBasketDevices', basketId],
    () => getBasket(basketId),
    {
      placeholderData() {
        return {}
      },
      onError(err) {},
      onSuccess(data) {
        user.setBasketCountDevices(data.count)
      },
      onSettled(data, err) {},
      retry: 1,
    }
  )
  return query
}

export default useDeviceAllBrandGET
