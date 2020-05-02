import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/tender/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}


// 获取列表
export function getList(data) {
  return request({
    url: '/tender/admin/get_user',
    method: 'post',
    data
  })
}
// 添加
export function addEle(data) {
  return request({
    url: '/tender/admin/add_user',
    method: 'post',
    data
  })
}
// 编辑页 通过id获取
export function getById(params) {
  return request({
    url: '/tender/admin/get_user_id',
    method: 'get',
    params
  })
}
// 编辑
export function editEle(data) {
  return request({
    url: '/tender/admin/update_user',
    method: 'post',
    data
  })
}
// 删除 
export function deleteEle(data) {
  return request({
    url: '/tender/admin/del_user',
    method: 'post',
    data
  })
}