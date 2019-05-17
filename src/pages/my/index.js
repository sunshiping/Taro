import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui";

import './index.less'

class My extends Component {

  config = {
    navigationBarTitleText: '个人中心'
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
      case 'setting':
        Taro.navigateTo({
          url: '/pages/setting/index'
        })
        break;
        case 'admin':
        Taro.navigateTo({
          url: '/pages/admin/index'
        })
        break;
      default:
        Taro.navigateTo({
          url: '/pages/mycourse/index'
        })
        break;
    }
  }
  render() {
    return (
      <View className="my-box">
        <View className="personal">
          <Image className="avatar-icon" src={require('../../assets/img/swiper/3.jpg')}></Image>
          <View className="personal-con">
            <View className="name">钢铁侠</View>
            <View className="tel">18937112672</View>
          </View>
          <Button className="btn-bd">绑定手机</Button>
        </View>
        <AtList>
          <AtListItem title='个人设置' onClick={this.navigation.bind(this, 'setting')} arrow='right' />
          <AtListItem title='我的预约' onClick={this.navigation.bind(this, 'course')} arrow='right' />
          <AtListItem title='后台管理' onClick={this.navigation.bind(this, 'admin')} arrow='right' />
        </AtList>
      </View>
    )
  }
}

export default My
