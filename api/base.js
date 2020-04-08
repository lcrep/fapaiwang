/**
  * 接口域名的管理
  */
//
let domainurl="";
let restPath="";

if (process.env.NODE_ENV == 'development') {
  domainurl = '/proxy';//代理跨域 http://c18l443134.51mypc.cn/
  restPath = '';

} else if (process.env.NODE_ENV == 'production') {
  domainurl = '/proxy';//代理跨域 http://c18l443134.51mypc.cn/
  restPath = '';
}

 const base = {
    default: domainurl,
}

export default base;