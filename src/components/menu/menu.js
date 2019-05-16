import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showDrawer } from '../../actions/menu'
import './menu.less';

@connect(function (store) {
  return { ...store.menu }
}, function (dispatch) {
  return { showMenu(){
    dispatch(showDrawer())
  }}
})
class Menu extends Component {
  // 显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }
  render() {
    return (
      <View className='topiclist-menu'>
        <Image onClick={this.showDrawer.bind(this)} className='img' src={require('../../assets/img/cata.png')}></Image>
        <Text className='title'>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
        <Image className='img' src={require('../../assets/img/login.png')}></Image>
      </View>
    )
  }
}

export default Menu;
