/**
  * 接口域名的管理
  */
//
let domainurl="";
let restPath="";
let componentsPath="/ArtAppComponents/rest";
let artappPath = "/artapp"
let version = "6_4_0";
if (process.env.NODE_ENV == 'development') {
  domainurl = '/proxy';//代理跨域
  restPath = '/ArtAppWebTest/rest';

} else if (process.env.NODE_ENV == 'production') {
  domainurl = 'https://ceshi.artapp.cn';
  restPath = '/ArtAppWebTest/rest';
  // domainurl = 'https://www.artapp.cn';
  // restPath = '/ArtAppWeb'+version+'/rest';
}

 const base = {
    default: domainurl+restPath,
}

export default base;