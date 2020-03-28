import base from './base'; // 导入接口域名列表
import request from '@/common/request.js'; // 导入request实例

const api = {}
// 登录
api.login = params => request.globalRequest(`${base.default}/user/login`, 'POST', params)


export default api;
