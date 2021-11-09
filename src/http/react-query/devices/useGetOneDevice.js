import {useQuery} from 'react-query'
import {getOneDevice} from '../../deviceAPI'
import user from '../../../store/UserStore'
import devices from '../../../store/DeviceStore'

const useDeviceDevicesGET = id => {
  const query = useQuery(['getOneDevice', id], () => getOneDevice(id), {
    /* placeholderData() {
      return {}
    }, */
    onError(err) {},
    onSuccess(data) {
      const item = data.ratings.find(item => item.userId === user.user.id)
      devices.setIsRayting(!!item)

      const totalRating = data.ratings.reduce((sum, item) => sum + item.rate, 0)

      if (totalRating !== 0) {
        devices.setRating(totalRating / data.ratings.length)
      } else {
        devices.setRating(0)
      }
    },
    onSettled(data, err) {},
  })
  return query
}

export default useDeviceDevicesGET
