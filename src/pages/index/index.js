import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtSearchBar, AtDivider } from 'taro-ui'
import { connect } from '@tarojs/redux'
import Menu from '../../components/menu/menu'
import throttle from '../../utils/throttle';

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

  constructor() {
    super(...arguments)
    this.state = {
      searchValue: '',
      isFixed: false,
      swiperList: [
        swiper1,
        swiper2,
        swiper3,
        swiper4,
        swiper5,
      ]
    }
    this.pageScrollFn = throttle(this.scrollFn, 200, this)
  }
  scrollFn = (scrollTop) => {
    // do something
    let menuTop = 27;  //当距离不确定时,可以用createSelectorQuery来测量
    if (scrollTop > menuTop) {
      this.setState({
        isFixed: true
      })
    } else {
      this.setState({
        isFixed: false
      })
    }
  }

  // 在H5或者其它端中，这个函数会被忽略
  onPageScroll(e) {
    this.pageScrollFn(e.scrollTop)
  }

  componentDidMount() {
    // 只有编译为h5时下面代码才会被编译
    if (process.env.TARO_ENV === 'h5') {
      window.addEventListener('scroll', this.pageScrollFn)
    }
    // getTopicList().then(data => {
    //   console.log('取到的数据', data)
    // })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

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
  //这个分享的函数必须写在入口中，写在子组件中不生效
  onShareAppMessage(e) {
    return {
      title: 'Taro小程序实践',
      path: `/pages/index/index`,
      // imageUrl: '自定义转发的图片',
    }
  }

  render() {
    let { swiperList,isFixed } = this.state;
    return (
      <View className='main'>
        <View className={"search-box "+(isFixed?"search-fixed":"")}>
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
