import { View } from '@tarojs/components';
import { NavBar } from '@ww-applets/components';
import { warningMessage, successToast } from '@ww-applets/shared/utils/messages';
import { messageDialog } from '@ww-applets/shared/utils/dialog';

export default function IndexPage () {
  return (
    <View>
      <NavBar
        title='这里是首页啊'
        linearStart='#7394DC'
        linearEnd='#3775D7'
      >
      </NavBar>
      <van-button
        onClick={() => { warningMessage('长文本长文本长文本长文本长文本提示') }}
        customStyle='margin-right: 8px'
        type='primary'
      >
        非阻塞提示
      </van-button>
      <van-button
        onClick={() => { successToast('短文本') }}
        customStyle='margin-right: 8px'
        type='info'
      >
        短文本提示
      </van-button>
      <van-button
        onClick={() => { messageDialog('长文本长文本长文本长文本长文本提示') }}
        type='info'
      >
        长文本提示
      </van-button>
      {/** 用到 message 和 dialog 的页面，需要在页面根组件手动引入 */}
      <van-notify id='van-notify' />
      <van-dialog id='van-dialog' />
      <van-toast id='van-toast' />
    </View>
  )
}
