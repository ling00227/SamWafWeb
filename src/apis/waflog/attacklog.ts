import request from '@/utils/request'
//查询攻击日志列表
export function attacklogList(params) {
  return request({
    url: '/waflog/attacklog/list',
    method: 'get',
    params: params
  })
}

//查询存档日志库列表
export function allsharedblist(params) {
  return request({
    url: 'waflog/attack/allsharedb',
    method: 'get',
    params: params
  })
}
//导出json数据
export function exportlog(data) {
  return request({
    url: 'waflog/attack/export',
    method: 'get',
  })
}
//下载已经生成好的数据
export function downloadlog() {
  return request({
    url: 'waflog/attack/download',
    method: 'get',
  })
}
//查看日志详情
export function geWebLogDetail(params) {
  return request({
    url: 'waflog/attack/detail',
    method: 'get',
    params: params
  })
}
// 复制脱敏后数据
export function getHeaderCopyDetail(params) {
  return request({
    url: 'waflog/attack/httpcopymask',
    method: 'get',
    params: params
  })
}
