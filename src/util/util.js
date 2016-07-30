import $ from 'zepto'
import wx from 'wx'

// 打印钩子函数运行的时间
export const hookTime = (component, hookFnName) => {
  let date = new Date()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let ms = date.getMilliseconds()
  console.log(`${component} ${hookFnName} ${m}-${s}-${ms}`)
}

// 加载动画
export const loader = {
  show () {
    if ($('.ball-beat')[0]) {
      return
    }
    let modalContainer = document.body
    $(modalContainer).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')
  },
  hide () {
    $('.ball-beat').remove()
  }
}

// 微信分享配置
export const wxShareConfig = ({title, desc, link, imgUrl}, success, fail) => {
  console.log('wxShare Config')
  wx.ready(() => {
    // “分享给朋友”
    wx.onMenuShareAppMessage({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: success,
      fail: fail
    })
    // “分享到朋友圈”
    wx.onMenuShareTimeline({
      title: title,
      link: link,
      imgUrl: imgUrl,
      success: success,
      fail: fail
    })

    // 分享到QQ
    wx.onMenuShareQQ({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: success,
      fail: fail
    })
    // 分享到腾讯微博
    wx.onMenuShareWeibo({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: success,
      fail: fail
    })
    // 分享到QQ空间
    wx.onMenuShareQZone({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: success,
      fail: fail
    })
  })
}
