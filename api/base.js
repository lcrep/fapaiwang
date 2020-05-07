/**
  * 接口域名的管理
  */
//
let domainurl="";
let restPath="";

if (process.env.NODE_ENV == 'development') {
	 domainurl = '/proxy';//代理跨域 http://c18l443134.51mypc.cn/
	// #ifdef MP-WEIXIN
		domainurl = 'https://mobile.fpw365.cn'
	// #endif
  restPath = '';

} else if (process.env.NODE_ENV == 'production') {
 domainurl = 'https://mobile.fpw365.cn'
  restPath = '';
}

 const base = {
    default: domainurl,
}

export default base;