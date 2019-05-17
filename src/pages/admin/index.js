import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtGrid } from "taro-ui";

import './index.less'

class Admin extends Component {

  config = {
    navigationBarTitleText: '后台管理'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  componentDidMount() {
    // getTopicList().then(data => {
    //   console.log('取到的数据', data)
    // })
  }
  componentDidShow() { }

  componentDidHide() { }
  navigation(type) {
    console.log(type);
    switch (type) {
      case 'admin':
        Taro.navigateTo({
          url: '/pages/admin/index'
        })
        break;

      default:
        Taro.navigateTo({
          url: '/pages/admin/index'
        })
        break;
    }
  }
  selectType(item){
    console.log(item);
  }
  render() {
    return (
      <View className="admin">
        <View className="my-box">
          <View className="personal">
            <Image className="avatar-icon" src={require('../../assets/img/swiper/3.jpg')}></Image>
            <View className="personal-con">
              <View className="name">钢铁侠</View>
              <View className="tel">剩余消息通知: 57次</View>
              <View className="remark">(多操作可提高消息次数)</View>
            </View>
          </View>
          <View className="admin-type">
            <AtGrid onClick={this.selectType.bind(this)} mode='square' data={
              [
                {
                  image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                  value: '排课'
                },
                {
                  image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                  value: '课程管理'
                },
                {
                  image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                  value: '时间管理'
                },
                {
                  image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                  value: '会员管理'
                },
                {
                  image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                  value: '新客户管理'
                },
                {
                  image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                  value: '会员卡管理'
                },
                {
                  image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                  value: '老师管理'
                },
                {
                  image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                  value: '假期管理'
                },
                {
                  image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                  value: '店铺二维码'
                },
                {
                  image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                  value: '返回首页'
                }
              ]
            } />
          </View>
        </View>
      </View>
    )
  }
}

export default Admin
