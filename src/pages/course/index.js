import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, Image, SwiperItem, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtNoticebar, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.less'
import { Login } from '../../actions/login';


@connect(function (store) {
  return { user: store.login }
}, function (dispatch) {
  return {
    Login(params) {
      return dispatch(Login(params))
    }
  }
})

class Course extends Component {

  config = {
    navigationBarTitleText: '约课列表',
    enablePullDownRefresh: false,
    onReachBottomDistance: 50
  }
  state = {
    windowHeight: 'height:750px;',
    selectIndex: 0,
    isOpened: false,
    daysList: [
      {
        week: '三',
        day: '22',
        courseList: [
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '张老师',
            time: '10:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '儿童'
          },
          {
            name: '王老师',
            time: '09:00--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '张老师',
            time: '10:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '儿童'
          },
          {
            name: '王老师',
            time: '09:00--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '张老师',
            time: '10:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '儿童'
          },
          {
            name: '王老师',
            time: '09:00--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          }
        ]
      },
      {
        week: '四',
        day: '23',
        courseList: [
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '张老师',
            time: '10:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '儿童'
          },
          {
            name: '王老师',
            time: '09:00--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          }
        ]
      },
      {
        week: '五',
        day: '24',
        courseList: [
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '张老师',
            time: '10:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '儿童'
          },
          {
            name: '王老师',
            time: '09:00--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          },
          {
            name: '李老师',
            time: '09:30--11:00',
            desc: '专业舞蹈，舞出精彩瞬间',
            dance_name: '东方舞蹈',
            crowd: '成年人'
          }
        ]
      },
      {
        week: '六',
        day: '25',
        courseList: []
      },
      {
        week: '七',
        day: '26',
        courseList: []
      },
      {
        week: '一',
        day: '27',
        courseList: []
      },
      {
        week: '二',
        day: '28',
        courseList: []
      }
    ]
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  componentDidMount() {
    const phone = Taro.getStorageSync('phone');

    const query = Taro.createSelectorQuery()
      .selectAll('.course-box >>> .notice, .course-box > .course-time')
      .boundingClientRect();
    query.exec(res => {
      let heightAll = 0;
      res[0].map((item, index) => {
        heightAll += item.height
      })
      let windowHeight = phone.windowHeight - heightAll - 20
      console.log(windowHeight);
      this.setState({
        windowHeight: 'height:' + windowHeight + 'px;'
      })
    });
  }
  componentDidShow() {
    console.log('redux',this.props.user);
    const user = Taro.getStorageSync('user');
    if (!user) {
      this.setState({
        isOpened: true
      })
    }
  }

  componentDidHide() { }
  // 选择课程时间
  selectCourseList(index, e) {
    this.setState({
      selectIndex: index
    })
  }
  // swiper改变
  swiperChange(e) {
    this.setState({
      selectIndex: e.detail.current
    })
  }
  appointment(item, e) {
    console.log(item);
    Taro.showModal({
      title: '确定要预约？',
      content: item.name + '-' + item.dance_name + '-' + item.crowd,
    })
      .then(res => {
        if (res.confirm) {
          // TODO 确定预约接口
          Taro.showLoading({
            mask: true,
            title: '预约中...'
          })
          setTimeout(() => {
            Taro.showToast({
              title: '预约成功',
              mask: true,
              icon: 'success',
              duration: 2000
            })
              .then(res => {
                console.log(res)
                Taro.hideLoading
              })
          }, 2000);
        }
      })
  }

  // 授权
  getUserInfo = (userInfo) => {
    console.log('userinfo', userInfo)
    const self = this;
    if (userInfo.detail.errMsg != "getUserInfo:fail auth deny") {
      Taro.login({
        success(res) {
          if (self.props.Login) {
            let params = {
              'scene': undefined,
              'userInfo': userInfo.detail.userInfo,
              'code': res.code
            };
            self.props.Login(params).then(result => {
              if (result) {
                Taro.showToast({
                  title: '授权成功',
                  icon: 'success',
                  duration: 2000
                }).then(()=>{
                  setTimeout(()=>{
                    self.setState({
                      isOpened: false
                    });
                  }, 2100)
                });
              }else{
                Taro.showToast({
                  title: '授权失败',
                  icon: 'none',
                  duration: 2000
                });
              }
            })
          }
        },
        fail(error) {
          Taro.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
            .then(res => console.log(res));
        }
      }).then(() => {

      })
    }
  }
  onClose() {
    console.log(66666)
    this.setState({
      isOpened: false
    }, () => {
      console.log(this.state)
    })
  }
  render() {
    let { daysList, selectIndex, windowHeight, isOpened } = this.state;
    return (
      <View className='course-box'>
        <AtNoticebar className="notice" marquee={false} icon='volume-plus' close={false}>上课时间前1个小时，停止约课。</AtNoticebar>
        <View className="course-time">
          <View className='at-row course-time_box'>
            {
              daysList.map((item, index) => {
                return (
                  <View key={index} className='at-col' onClick={this.selectCourseList.bind(this, index)}>
                    <View className="week">{item.week}</View>
                    <View className={"date " + (index == selectIndex ? "active" : "")}>{item.day}</View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className="course-list">
          <Swiper
            className='test-h'
            style={windowHeight}
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular={false}
            current={selectIndex}
            onChange={this.swiperChange.bind(this)}
            indicatorDots={false}
            autoplay={false}>
            {
              daysList.map((item, index) => {
                return (
                  <SwiperItem key={index} className="swiper-item">
                    {
                      item.courseList.length > 0 ?
                        item.courseList.map((item2, i) => {
                          return (
                            <View key={i} className='course-list_con'>
                              <View className="left">
                                <View className="time">{item2.time}</View>
                                <View className="name">{item2.dance_name}-{item2.name}</View>
                                <View className="desc">内容: {item2.desc}</View>
                                <View className="crowd">适合: {item2.crowd}</View>
                              </View>
                              <View className="right-btn">
                                <Button className="btn" onClick={this.appointment.bind(this, item2)}>预约</Button>
                              </View>
                            </View>
                          )
                        }) : <View className="no-data"><View className='at-icon at-icon-bell'></View>正在排课中</View>
                    }
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </View>
        <AtModal closeOnClickOverlay={false} isOpened={isOpened}>
          <AtModalHeader>微信授权登录</AtModalHeader>
          <AtModalContent>
            <View className="model-box">
              <Image className="model-box_img" src={require('../../assets/img/tab/icon-wx_xcx.png')}></Image>
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button className="share-btn" open-type="getUserInfo" onGetUserInfo={this.getUserInfo}>授权登录</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}

export default Course
