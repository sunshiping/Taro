import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Menu from '../../components/menu/menu'
// import { getTopicList } from '../../utils/request'

import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '约课'
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
        <Menu />
        <Text>约课</Text>
      </View>
    )
  }
}

export default Index
