import {useQuery} from 'react-query'
import {getOneDevice} from '../../deviceAPI'

const useDeviceDevicesGET = id => {
  const query = useQuery(['getOneDevice', id], () => getOneDevice(id), {
    /* placeholderData() {
      return {}
    }, */
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
  })
  return query
}

export default useDeviceDevicesGET
