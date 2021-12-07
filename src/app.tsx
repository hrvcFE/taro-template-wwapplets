import { useEffect, Component } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { queryUserList } from '@ww-applets/shared/store/actions/user'
import checkUpdateVersion from '@ww-applets/shared/utils/check-update'
import polyfills from '@ww-applets/shared/utils/polyfills'

import './app.scss'
import store from './store'


function AppRoot (props) {
  const token = useSelector((state: any) => state.user.token)
  // 登录
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      // 登录之后，获取系统所需的全局状态
      // 获取员工数据
      dispatch(queryUserList())
    }
  }, [token])
  return props.children
}

class App extends Component {
  onLaunch () {
    checkUpdateVersion()
    polyfills()
  }

  // props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        <AppRoot>
          {this.props.children}
        </AppRoot>
      </Provider>
    )
  }
}

export default App
