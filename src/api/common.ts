import request from '@/utils/request'
import { ILoginInfo } from './types/common'

interface ResponseDate<T = any> {
    status: number;
    msg: string;
    data: T
}

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}
