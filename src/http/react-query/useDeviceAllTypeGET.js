import {useQuery} from 'react-query'
import {getType} from '../deviceAPI'

const useDeviceAllTypeGET = () => {
  const query = useQuery('deviceType', getType, {
    placeholderData() {
      return []
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
  })
  return query
}

export default useDeviceAllTypeGET
