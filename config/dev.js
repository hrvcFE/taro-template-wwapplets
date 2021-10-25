module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    API_GATEWAY: '"http://alpha.hrvc.cc:9999"',
    REAL_ENV: '"DEV"',
    AGENT_CODE: '"test"'
  },
  plugins: [
    '@tarojs/plugin-platform-weapp-qy'
    // '@tarojs/plugin-react-devtools'
  ],
  mini: {},
  h5: {}
}
