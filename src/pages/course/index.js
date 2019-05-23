import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtNoticebar, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
// import { getTopicList } from '../../utils/request'

import './index.less'

class Course extends Component {

  config = {
    navigationBarTitleText: '约课列表'
  }
  state = {
    windowHeight: 'height:750px;',
    selectIndex: 0,
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
      .selectAll('.index >>> .notice, .index > .course-time')
      .boundingClientRect();
    query.exec(res => {
      let heightAll = 0;
      res[0].map((item,index)=>{
        console.log(item.height);
        heightAll+=item.height
      })
      let windowHeight = phone.windowHeight - heightAll - 20
      console.log(windowHeight);
      this.setState({
        windowHeight: 'height:' + windowHeight + 'px;'
      })
    });
  }
  componentDidShow() {
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
  render() {
    let { daysList, selectIndex, windowHeight } = this.state;
    return (
      <View className='index'>
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
                                <Button className="btn">预约</Button>
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
      </View>
    )
  }
}

export default Course
