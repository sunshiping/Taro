import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Menu from '../../components/menu/menu'
import { AtNoticebar, AtSearchBar, AtDivider } from 'taro-ui'
// import { getTopicList } from '../../utils/request'
import swiper1 from '../../assets/img/swiper/1.jpg'
import swiper2 from '../../assets/img/swiper/2.jpg'
import swiper3 from '../../assets/img/swiper/3.jpg'
import swiper4 from '../../assets/img/swiper/4.jpg'
import swiper5 from '../../assets/img/swiper/5.jpg'

import './index.less'
import "taro-ui/dist/style/components/flex.scss";

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    searchValue: '',
    swiperList: [
      swiper1,
      swiper2,
      swiper3,
      swiper4,
      swiper5,
    ]
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
  // 搜索内容赋值
  onChange(value) {
    console.log(value);
    this.setState({
      searchValue: value
    })
  }
  // 点击查询按钮
  actionClick(value) {
    console.log(value)
    let { searchValue } = this.state;
    Taro.navigateTo({
      url: '/pages/list/index?searchValue=' + searchValue,
      success: (result) => {
        this.setState({
          searchValue: ''
        })
      },
      fail: () => { },
      complete: () => { }
    });
  }
  render() {
    let { swiperList } = this.state;
    return (
      <View className='main'>
        <AtNoticebar marquee={false} icon='volume-plus' close={false}>上课时间前1个小时，停止约课。</AtNoticebar>
        <View className="search-box">
          <AtSearchBar
            value={this.state.searchValue}
            onChange={this.onChange.bind(this)}
            onActionClick={this.actionClick.bind(this)}
          />
        </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {
            swiperList.map((item, index) => {
              return (
                <SwiperItem key={index}>
                  <Image className="swiper-item_img" src={item} />
                </SwiperItem>
              )
            })
          }
        </Swiper>
        <View className="module-box">
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5 module-box_con'>
              <View className="left">
                <View className="title">精选课程</View>
                <View className="desc">精选课程学习模块</View>
              </View>
              <View className="right">
                <Image className="icon" src={require('../../assets/img/module/catalog-expand.png')} />
              </View>
            </View>
            <View className='at-col at-col-5 module-box_con'>
              <View className="left">
                <View className="title">约课记录</View>
                <View className="desc">精选课程学习模块</View>
              </View>
              <View className="right">
                <Image className="icon" src={require('../../assets/img/module/catalog-law.png')} />
              </View>
            </View>
          </View>
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5 module-box_con'>
              <View className="left">
                <View className="title">视频课程</View>
                <View className="desc">精选课程学习模块</View>
              </View>
              <View className="right">
                <Image className="icon" src={require('../../assets/img/module/catalog-store.png')} />
              </View>
            </View>
            <View className='at-col at-col-5 module-box_con'>
              <View className="left">
                <View className="title">更多课程</View>
                <View className="desc">精选课程学习模块</View>
              </View>
              <View className="right">
                <Image className="icon" src={require('../../assets/img/module/catalog-more.png')} />
              </View>
            </View>
          </View>
        </View>
        <View className="recommend-list">
          <View className="recommend-list_title">推荐课程</View>
          <View className='at-row at-row--wrap'>
            <View className='at-col at-col-4 course-box'>
              <Image className="course-img" src={require('../../assets/img/swiper/1.jpg')} />
              <View className="text">精选课程值得学习</View>
            </View>
            <View className='at-col at-col-4 course-box'>
              <Image className="course-img" src={require('../../assets/img/swiper/2.jpg')} />
              <View className="text">精选课程值得学习</View>
            </View>
            <View className='at-col at-col-4 course-box'>
              <Image className="course-img" src={require('../../assets/img/swiper/3.jpg')} />
              <View className="text">精选课程值得学习</View>
            </View>
            <View className='at-col at-col-4 course-box'>
              <Image className="course-img" src={require('../../assets/img/swiper/4.jpg')} />
              <View className="text">精选课程值得学习学习学习</View>
            </View>
            <View className='at-col at-col-4 course-box'>
              <Image className="course-img" src={require('../../assets/img/swiper/5.jpg')} />
              <View className="text">精选课程值得学习</View>
            </View>
          </View>
        </View>
        <View className="support-box">
          <AtDivider content='Taro提供技术支持' fontColor='#e1e1e1' lineColor='#e1e1e1' fontSize='24' />
        </View>
      </View>
    )
  }
}

export default Index
