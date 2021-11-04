import {useQuery} from 'react-query'
import {getBrand} from '../deviceAPI'

const useDeviceAllBrandGET = () => {
  const query = useQuery('deviceBrand', getBrand, {
    placeholderData() {
      return []
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
  })
  return query
}

export default useDeviceAllBrandGET
