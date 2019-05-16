import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Template extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }
  componentDidMount() {
  }
  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>Template</View>
    )
  }
}

export default Template;
