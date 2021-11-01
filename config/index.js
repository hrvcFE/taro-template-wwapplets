const path = require('path')

const VANT_BASE = 'src/components/vant-weapp/dist'
const TARGET_BASE = 'dist/components/vant-weapp/dist'
const vantComponents = [
  'button',
  'notify',
  'icon',
  'loading',
  'transition',
  'nav-bar',
  'cell',
  'field',
  'tabs',
  'sticky',
  'empty',
  'divider',
  'popup',
  'picker',
  'picker-column',
  'switch'
]
const copyList = [
  'wxs',
  'common/style',
  'common/index.wxss',
  ...vantComponents.map(component => `${component}/index.wxs`)
]

const config = {
  projectName: 'ww-applets/<%= projectName %>',
  date: '<%= date %>',
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-platform-weapp-qy'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
      ...copyList.map(item => ({ from: `${VANT_BASE}/${item}`, to: `${TARGET_BASE}/${item}` }))
    ],
    options: {
    }
  },
  framework: 'react',
  weapp: {
    npm: {
      dir: '../dist'
    },
    module: {
      postcss: {
        // css modules 功能开关与相关配置
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('linaria/loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@/<%= projectName %>': path.resolve(__dirname, '../src'),
    '@vant-weapp': path.resolve(__dirname, '../src/components/vant-weapp')
  }
}

module.exports = function (merge) {
  const base = merge({}, config, require('../../../config/base'))
  switch (process.env.NODE_ENV) {
  case 'development':
    return merge({}, base, require('./dev'))
  case 'uat':
    return merge({}, base, require('./uat'))
  default:
    return merge({}, base, require('./prod'))
  }
}
