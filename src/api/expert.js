import request from '@/utils/request'
// 获取列表
export function getList(data) {
  return request({
    url: '/tender/admin/get_expert',
    method: 'post',
    data
  })
}
