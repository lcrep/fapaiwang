import base from './base'; // 导入接口域名列表
import request from '@/common/request.js'; // 导入request实例
import qs from 'qs';
const api = {}
// 登录
api.login = params => request.globalRequest(`${base.default}/api/auth/login`, 'POST', params);
//注册
api.bymobile = params => request.globalRequest(`${base.default}/api/register/bymobile`, 'POST', params);
//校验手机号
api.isphonecanuse = params => request.globalRequest(`${base.default}/api/register/isphonecanuse`, 'POST', params);
//发送验证码
api.sendvcode = params => request.globalRequest(`${base.default}/api/mobile/sendvcode`, 'POST', params);
//修改密码
api.updatepassword = params => request.globalRequest(`${base.default}/api/password/update`, 'POST', params);

export default api;


// that.$api.sendvcode({
// 	"mobile": that.mobile
// }).then(res => {
// 	if (res.success) {

// 	} else {
// 		uni.showToast({
// 			title: res.message,
// 			icon: "none"
// 		})
// 	}
// })
