import {useQuery} from 'react-query'
import {getDevice} from '../deviceAPI'
import device from '../../store/DeviceStore'

const useDeviceDevicesGET = (brandId, typeId, page, limit) => {
  const query = useQuery(
    ['devices', brandId, typeId, page, limit],
    () => getDevice(brandId, typeId, page, limit),
    {
      placeholderData() {
        return {count: 0, rows: []}
      },
      onError(err) {},
      onSuccess(data) {
        device.setCount(data.count)
      },
      onSettled(data, err) {},
    }
  )
  return query
}

export default useDeviceDevicesGET
