import Taro from '@tarojs/taro';
import '@tarojs/async-await'
export function getJSON(url, data) {
  Taro.showLoading({
    title: '加载中...'
  }).then(res=>{
    console.log(66666,res)
  });
  return Taro.request({ url: url, data: data, method: 'GET' }).then(result => {
    Taro.hideLoading();
    return result;
  });
}
export function postJSON(url, data) {
  Taro.showLoading({
    title: '加载中...'
  });
  return Taro.request({
    header: {
      'content-type': 'application/json'
    },
    url: url,
    data: data,
    method: 'POST'
  }).then(result => {
    Taro.hideLoading();
    return result;
  });
}
