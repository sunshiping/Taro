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
  state = {
    searchValue:''
  }
  componentWillMount () {
   let {searchValue} = this.$router.params;
   this.setState({
    searchValue:searchValue
   })
    console.log(searchValue)
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
        <Text>{this.state.searchValue}</Text>
      </View>
    )
  }
}

export default Index
