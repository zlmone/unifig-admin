import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/rm/home/advertise/list',
    method:'get',
    params:params
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/rm/home/advertise/update/status/'+id,
    method:'post',
    params:params
  })
}
export function deleteHomeAdvertise(data) {
  return request({
    url:'/rm/home/advertise/delete',
    method:'post',
    data:data
  })
}
export function createHomeAdvertise(data) {
  return request({
    url:'/rm/home/advertise/create',
    method:'post',
    data:data
  })
}
export function getHomeAdvertise(id) {
  return request({
    url:'/rm/home/advertise/'+id,
    method:'get',
  })
}

export function updateHomeAdvertise(id,data) {
  return request({
    url:'/rm/home/advertise/update/'+id,
    method:'post',
    data:data
  })
}
