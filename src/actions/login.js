import Taro from '@tarojs/taro';
import api from '../constants/api';
import {postJSON} from '../utils/request';

export  function  Login(params){
  return  async dispatch=>{
     let result= await  postJSON(api.login,params);
     if(result&&result.data&&result.statusCode == 200){
         dispatch({type:"loginSuccess",user:result.data})
         return result.data;
     }else{
        dispatch({type:"loginFail",user:''})
     }
     return false;
  }
}
