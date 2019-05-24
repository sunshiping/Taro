import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui";
import avatar from "../../assets/img/head.png";
import './index.less';
import { Mobile } from '../../actions/login';


@connect(function (store) {
  return { user: store.login }
}, function (dispatch) {
  return {
    Mobile(params) {
      return dispatch(Mobile(params))
    }
  }
})


class My extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }
  state = {
    code: ''
  }

  componentWillReceiveProps(nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  componentDidMount() {
    const code = Taro.getStorageSync('Code');
    this.setState({
      code: code
    })
    // getTopicList().then(data => {
    //   console.log('取到的数据', data)
    // })
  }
  componentDidShow() { }

  componentDidHide() { }
  navigation(type) {
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
    //console.log('formId', e.detail.formId);
  }
  bindPhone(e) {
    //console.log('获取手机号', e.detail, this.props.user);
    debugger
    if (this.props.user) {
      Taro.showToast({
        title: '请先授权登录',
        icon: 'none',
        duration: 2000
      }).then(res => {
        setTimeout(() => {
          Taro.switchTab({
            url: '/pages/course/index'
          })
        }, 2100);
      })
    } else {
      const self = this;
      if (e.detail.errMsg !== "getPhoneNumber:ok") {
        return;
      }
      Taro.checkSession({
        success(res) {// session_key 未过期，并且在本生命周期一直有效
          //console.log('session_key 未过期', res);
          if (self.props.Mobile) {
            let params = {
              'code': self.state.code,
              'iv': e.detail.iv,
              'encryptedData': e.detail.encryptedData
            };

            self.props.Mobile(params).then(result => {
              if (result) {
                Taro.showToast({
                  title: '绑定成功',
                  icon: 'success',
                  duration: 2000
                })
                self.setState({
                  user: result
                })
              } else {
                Taro.showToast({
                  title: '绑定失败',
                  icon: 'none',
                  duration: 2000
                });
              }
            })

          }
        },
        fail() {
          // session_key 已经失效，需要重新执行登录流程
          //wx.login() // 重新登录
          Taro.login({
            success: res => {
              Taro.setStorageSync('Code', res.code)
            }
          })
        }
      }).then(res => {

      })
    }
  }
  render() {
    let { user } = this.props;
    return (
      <View className="my-box">
        <View className="personal">
          <Image className="avatar-icon" src={user && user.customer ? user.customer.avatarUrl : avatar}></Image>
          <View className="personal-con">
            <View className="name">{user && user.customer ? user.customer.nickName : '未登录'}</View>
            <View className="tel">{user && user.customer.mobile ? user.customer.mobile : ''}</View>
          </View>
          {
            user && !user.customer.mobile ? <Form report-submit='true' onSubmit={this.onSubmit.bind(this)}>
              <Button className="btn-bd" formType="submit" openType='getPhoneNumber' onGetPhoneNumber={this.bindPhone.bind(this)}>绑定手机</Button>
            </Form> : <Button disabled={true} className="btn-bd disabled">已绑定</Button>
          }
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
