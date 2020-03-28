const common = {
  phoneTest: /^1[0-9]{10}$/,//手机号正则表达式
  passwordTest:/^[0-9A-Za-z]{8,14}$/,//密码正则表达式
  emailTest: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,//邮箱正则表达式
  idCardTest: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,//身份证正则表达式

  // 测试环境
  APPID: "wx56ebf3046951056c",//公众号APPID
  baseUrl: "https://ceshi.artapp.cn/artappWeChat",//项目目录

  //正式环境
  // APPID:"wx54e02f329915084c",//公众号APPID
  // baseUrl:"https://www.artapp.cn/artappWeChat",//项目目录
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//时间戳转换
function formatTime(date, type) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();

  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  switch (type) {
    case "YYYY-MM-DD":
      return [year, month, day].map(formatNumber).join('-');
    case "YYYY.MM.DD":
      return [year, month, day].map(formatNumber).join('.');
    case "YYYY.MM.DD hh:mm":
      return [year, month, day].map(formatNumber).join('.') + ' ' + [hour, minute].map(formatNumber).join(':');
    default:
      return [year, month, day].map(formatNumber).join('.') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  }
}
//获取url参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
//倒计时
function timeCount(endtimestr,type) {
  let str="";
  if (!endtimestr && endtimestr === undefined) {
    return false;
  }
  let endTimer = new Date(endtimestr).getTime();
  let curDate = new Date().getTime();
  var ts = endTimer - curDate;
  if (ts > 0) {
    let dd = formatNumber(parseInt(ts / 1000 / 60 / 60 / 24, 10));
    let hh = formatNumber(parseInt(ts / 1000 / 60 / 60 % 24, 10));
    let mm = formatNumber(parseInt(ts / 1000 / 60 % 60, 10));
    let ss = formatNumber(parseInt(ts / 1000 % 60, 10));
    switch (type) {
      case "DD天hh时mm分ss秒":
        str = dd + '天' + hh + '时' + mm + '分' + ss + '秒';
      case "DD天":
        str = dd + '天';
      case "hh:mm:ss":
        str = hh + ':' + mm + ':' + ss;
      default:
        str = dd + '天' + hh + '时' + mm + '分' + ss + '秒';
    }
  } else {
    str = '00天00时00分00秒';
  }
  return str;
}
export default {
  common,
  formatTime,
  getUrlParam,
  timeCount
};