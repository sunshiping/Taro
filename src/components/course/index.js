import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showDrawer } from '../../actions/menu'
import './index.less';

@connect(function (store) {
  return { ...store.menu }
}, function (dispatch) {
  return { showMenu(){
    dispatch(showDrawer())
  }}
})
class List extends Component {
  // 显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }
  render() {
    return (
      <View className='course-list'>

      </View>
    )
  }
}

export default List;
