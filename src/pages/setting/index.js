import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtList, AtListItem } from "taro-ui";

import './index.less'

class Setting extends Component {

  config = {
    navigationBarTitleText: '个人设置'
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
      <View className="setting">
        设置中心
      </View>
    )
  }
}

export default Setting
