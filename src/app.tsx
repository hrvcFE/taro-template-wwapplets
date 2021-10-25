import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { queryUserList } from '@ww-applets/shared/store/actions/user'

import './app.scss'
import store from './store'


function AppRoot (props) {
  // Taro.clearStorageSync()
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

function App (props) {
  // props.children 是将要会渲染的页面
  return (
    <Provider store={store}>
      <AppRoot>
        {props.children}
      </AppRoot>
    </Provider>
  )
}

export default App
