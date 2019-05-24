// api: 'https://test-tools.1fangxin.cn/api/customer-auth/',
    // wss: 'wss://tools.1fangxin.cn:8087',

const rootPath='https://test-tools.1fangxin.cn/api/customer-auth';
const apiObject={
  gettopics:rootPath+'/login',//登录
  gettopicinfo:rootPath+'/topic/',//获取话题详情
  checkusertoken:rootPath+'/accesstoken',//验证用户token
  getuserinfo:rootPath+'/user/',//获取用户信息
  createtopic:rootPath+'/topics',//新建话题
  replytopic:rootPath+'/topic/',//回复话题消息
  upreply:rootPath+'/reply/',//点赞
  updatetopic:rootPath+'/topics/update'  //更新主题
}
export default apiObject ;
