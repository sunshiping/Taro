import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import { getTopicList } from '../../utils/request'

import './index.less'

class Course extends Component {

  config = {
    navigationBarTitleText: '我的预约'
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

  render() {
    return (
      <View className='index'>
        <Text>约课</Text>
      </View>
    )
  }
}

export default Course
