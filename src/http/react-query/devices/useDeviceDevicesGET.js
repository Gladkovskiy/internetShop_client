import {useQuery} from 'react-query'
import {getDevice} from '../../deviceAPI'

const useDeviceDevicesGET = (brandId, typeId, page, limit) => {
  const query = useQuery(
    ['devices', brandId, typeId, page, limit],
    () => getDevice(brandId, typeId, page, limit),
    {
      placeholderData() {
        return {count: 0, rows: []}
      },
      onError(err) {},
      onSuccess(data) {},
      onSettled(data, err) {},
      // staleTime: 0,
    }
  )
  return query
}

export default useDeviceDevicesGET
