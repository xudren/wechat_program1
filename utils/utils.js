const BASE_URL='https://api-hmugo-web.itheima.net/api/public/v1'
let ajaxTimes=0
const myRequest=(url,method,data={})=>{
  ajaxTimes++
  wx.showLoading({
    title: '加载中',
    mask:true
  })
  return new Promise((resolve,reject)=>{
    // wx.showToast({title: '加载中', icon: 'loading', duration: 10000});
    wx.request({
      url:BASE_URL+url,
      method:method||'GET',
      data,
      success:(res)=>{
        if(res.data.meta.status!==200){
          wx.showToast({
            title: '获取借口失败',
          })
        }else{
          resolve(res.data.message)
        }
      },
      fail: () => {
        wx.showToast({
          title:"请求数据失败"
        })
        reject(res)
      },
      complete:()=>{
        ajaxTimes--
        if(!ajaxTimes){
          wx.hideLoading()
        }
      }
    })
  })
}
  module.exports={
    myRequest
  }