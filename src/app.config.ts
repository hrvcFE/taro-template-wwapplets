function getVantComponents (list) {
  const VANT_PREFIX = 'van-'
  const VANT_PATH = component => `./components/vant-weapp/dist/${component}/index`
  return list.reduce((acc, item) => {
    acc[VANT_PREFIX + item] = VANT_PATH(item)
    return acc
  }, {})
}

const vantComponents = [
  'button',
  'nav-bar'
]

export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    // 导航栏背景颜色
    navigationBarBackgroundColor: '#3876d7',
    // 导航栏标题文字内容
    navigationBarTitleText: '审批',
    // 导航栏标题颜色
    navigationBarTextStyle: 'white',
    // 下拉 loading 的样式
    backgroundTextStyle: 'light',
    // 开启下拉刷新
    enablePullDownRefresh: true,
    navigationStyle: 'custom'
  },
  usingComponents: getVantComponents(vantComponents),
  styleIsolation: 'shared'
}
