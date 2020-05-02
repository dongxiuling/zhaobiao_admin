import request from '@/utils/request'
// 获取列表
export function getList(data) {
  return request({
    url: '/tender/admin/get_policy',
    method: 'post',
    data
  })
}
// 添加
export function addEle(data) {
  return request({
    url: '/tender/admin/add_policy',
    method: 'post',
    data
  })
}
// 编辑页 通过id获取
export function getById(params) {
  return request({
    url: '/tender/admin/get_policy_id',
    method: 'get',
    params
  })
}
// 编辑
export function editEle(data) {
  return request({
    url: '/tender/admin/update_policy',
    method: 'post',
    data
  })
}
// 删除 
export function deleteEle(data) {
  return request({
    url: '/tender/admin/del_policy',
    method: 'post',
    data
  })
}