import { request } from '../utils/request';

export function apiLogin(data) {
  const app = getApp();
  return request({
    isNeedToken: false,
    url: `***`,
    method: 'post',
    data,
  });
}
