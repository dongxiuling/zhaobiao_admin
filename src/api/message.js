
import request from '@/utils/request'
// 获取列表
export function getList(data) {
    return request({
        url: '/tender/admin/get_message',
        method: 'post',
        data
    })
}
// 编辑页 通过id获取
export function getById(params) {
    return request({
        url: '/tender/admin/get_message_id',
        method: 'get',
        params
    })
}