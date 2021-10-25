import Admin from './page/Admin'
import Basket from './page/Basket'
import Shop from './page/Shop'
import Auth from './page/Auth'
import DevicePage from './page/DevicePage'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  DEVICE_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts'

//файл для разгрничения роутов
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
]
