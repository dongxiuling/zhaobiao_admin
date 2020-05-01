import request from '@/utils/request'
// 公司简介
export function getData(params) {
  return request({
    url: '/tender/admin/get_company',
    method: 'get',
    params
  })
}

export function setData(data) {
  return request({
    url: '/tender/admin/update_company',
    method: 'post',
    data
  })
}
// 获取资质列表
export function getQua(params) {
  return request({
    url: '/tender/admin/get_qualification',
    method: 'get',
    params
  })
}
// 添加资质
export function addQua(data) {
  return request({
    url: '/tender/admin/add_qualification',
    method: 'post',
    data
  })
}
// 编辑页 通过id获取资质
export function getQuaById(params) {
  return request({
    url: '/tender/admin/get_qualification_id',
    method: 'get',
    params
  })
}
// 编辑
export function editQua(data) {
  return request({
    url: '/tender/admin/update_qualification',
    method: 'post',
    data
  })
}
// 删除 del_qualificatio
export function deleteQua(data) {
  return request({
    url: '/tender/admin/del_qualification',
    method: 'post',
    data
  })
}