// 用来包装接口调用方法
import { api } from 'ddkjonduty/src/api'
import qs from 'qs'
export const getLoginData = (params: any) => {
  return api({
    url: '/login',
    method: 'post',
    data: qs.stringify(params)
  })
}
export const getRightApi = () => {
  return api({
    url: '/cms/board-right/right-info',
    method: 'get'
  })
}
