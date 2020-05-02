import request from '@/utils/request'
// 添加业绩
export function setData(data) {
    return request({
        url: '/tender/admin/add_performance',
        method: 'post',
        data
    })
}
// 获取
export function getData(data) {
    return request({
        url: '/tender/admin/get_performance',
        method: 'post',
        data
    })
}

// 删除 
export function deletePer(data) {
    return request({
        url: '/tender/admin/del_performance',
        method: 'post',
        data
    })
}

// 编辑页 通过id获取资质
export function getPerById(params) {
    return request({
        url: '/tender/admin/get_performance_id',
        method: 'get',
        params
    })
}
// 编辑
export function editPer(data) {
    return request({
        url: '/tender/admin/update_performance',
        method: 'post',
        data
    })
}