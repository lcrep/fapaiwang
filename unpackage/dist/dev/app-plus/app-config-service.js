
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/consultant/index","pages/my/index","pages/my/login","pages/my/register","pages/my/setPassword","pages/home/searchDetail","pages/home/goodsDetail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"APP","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#555555","selectedColor":"#CD282F","borderStyle":"black","backgroundColor":"#ffffff","height":"54px","fontSize":"12px","iconWidth":"24px","spacing":"3px","list":[{"pagePath":"pages/home/index","iconPath":"static/images/homeIcon.png","selectedIconPath":"static/images/homeIcon_sel.png","text":"首页"},{"pagePath":"pages/consultant/index","iconPath":"static/images/consIcon.png","selectedIconPath":"static/images/consIcon_sel.png","text":"咨询"},{"pagePath":"pages/my/index","iconPath":"static/images/myIcon.png","selectedIconPath":"static/images/myIcon_sel.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"fapaiwang","compilerVersion":"2.6.5","entryPagePath":"pages/home/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","color":"#FD575C","offset":"60px"}}},{"path":"/pages/consultant/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"咨询"}},{"path":"/pages/my/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/my/login","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/my/register","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/my/setPassword","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/home/searchDetail","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","color":"#FD575C","offset":"60px"}}},{"path":"/pages/home/goodsDetail","meta":{},"window":{"navigationBarTitleText":"拍品详情页"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
