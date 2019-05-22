import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss'
import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/course/index',
      'pages/mycourse/index',
      'pages/list/index',
      'pages/my/index',
      'pages/admin/index',
      'pages/setting/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/img/tab/icon-Main.png",
        selectedIconPath: "./assets/img/tab/icon-Main_HL.png"
      }, {
        pagePath: "pages/course/index",
        text: "约课",
        iconPath: "./assets/img/tab/icon-Message.png",
        selectedIconPath: "./assets/img/tab/icon-Message_HL.png"
      },{
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/img/tab/icon-Mine.png",
        selectedIconPath: "./assets/img/tab/icon-Mine_HL.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'black'
    }
  }

  componentDidMount () {
    Taro.getSystemInfo({
      success: res => {
        console.log(res);
        Taro.setStorageSync('phone',res)
      }
    }).then(res =>{

    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
