module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    API_GATEWAY: '"http://www.hrvc.cc:9999"',
    REAL_ENV: '"PROD"',
    AGENT_CODE: '"inner_work_shedule"'
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
