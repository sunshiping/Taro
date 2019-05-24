import  {setCahce,getCache}  from  '../utils/cache';
const cacheKey='user';
const user_cache=getCache(cacheKey)?getCache(cacheKey):{};//读取缓存
const  USER_STATE={...user_cache}
export  default  function  login(prestate=USER_STATE,action){
  console.log('action',action);
    switch(action.type){
        case 'loginSuccess':
        let  successState={...prestate,...action.user};
        setCahce(cacheKey,successState)//设置到缓存中
        return successState
        case 'loginFail':
        let failState= action.user
        setCahce(cacheKey,failState)//设置到缓存中
        return failState;
        default:
        return  {...prestate};
    }
}
