import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui";

import './index.less'
import { stringify } from 'postcss';

class My extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }
  state = {
    user: {}
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  componentDidMount() {
    const user = Taro.getStorageSync('user');
    this.setState({
      user: user
    })
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
  callPhone(phone, e) {
    Taro.makePhoneCall({
      phoneNumber: phone
    }).then((res) => {

    })
  }
  // formId
  onSubmit(e) {
    console.log('formId', e);
  }
  bindPhone(e) {
    console.log('获取手机号', e);
  }
  render() {
    let {user} = this.state;
    return (
      <View className="my-box">
        <View className="personal">
          {/* <AtAvatar circle size="large" image='https://jdc.jd.com/img/200'></AtAvatar> */}
          <Image className="avatar-icon" src={user.customer.avatarUrl}></Image>
          <View className="personal-con">
            <View className="name">{user.customer.nickName}</View>
            <View className="tel">18937112672</View>
          </View>
          <Form report-submit='true' onSubmit={this.onSubmit.bind(this)}>
            <Button className="btn-bd" formType="submit" open-type="getPhoneNumber" onClick={this.bindPhone.bind(this)}>绑定手机</Button>
          </Form>
        </View>
        <AtList>
          <AtListItem title='个人设置' onClick={this.navigation.bind(this, 'setting')} arrow='right' />
          <AtListItem title='我的预约' onClick={this.navigation.bind(this, 'course')} arrow='right' />
          <AtListItem title='后台管理' onClick={this.navigation.bind(this, 'admin')} arrow='right' />
          <AtListItem title='联系我们' onClick={this.callPhone.bind(this, '18339933123')} data-phone={'18339933123'} arrow='right' />
        </AtList>
      </View>
    )
  }
}

export default My
