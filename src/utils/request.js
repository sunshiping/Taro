import Taro from '@tarojs/taro';
// import api from '../constants/api';
export function getJson(url, data) {
  return Taro.request({ url: url, data: data, method: 'GET' });
}
export function postJson(url, data) {
  return Taro.request({ url: url, data: data, method: 'POST' });
}
// export async function getTopicList(url, data) {
//   let result = await getJson(api.topics).catch(message => {
//     console.log('出错了:' + message)
//   })
//   return result;
// }
