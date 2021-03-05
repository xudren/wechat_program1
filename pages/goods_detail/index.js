// pages/goods_detail/index.js
import {getGoodsDetail} from "../../utils/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
  },
  GoodsInfo:{

  },
  /**
   * 生命周期函数--监听页面加载
   */
  async getGoodsDetail(goods_id){
    const goodsObj=await getGoodsDetail({goods_id})
    this.GoodsInfo=goodsObj
    this.setData({
      goodsObj:{
        goods_name:goodsObj.goods_name,
        goods_price:goodsObj.goods_price,
        //iphone部分手机不识别 webp图片格式
        goods_introduce:goodsObj.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics:goodsObj.pics
      }
    })
  },
  onLoad: function (options) {
    const {goods_id}=options
    console.log(goods_id,'goodis')
    this.getGoodsDetail(goods_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handlePreview(e){
    const urls=this.GoodsInfo.pics.map((v)=>v.pics_mid)
    const current=e.currentTarget.dataset.url
    wx.previewImage({
      urls,
      current
    })
  },
  handleCartAdd(e){ //加入购物车
    //获取缓存中的购物车， 数组
    let cart=wx.getStorageSync('cart') || []
    let index=cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id)
    if(index===-1){
      this.GoodsInfo.num=1
      cart.push(this.GoodsInfo)
    }else{
      cart[index].num++
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入成功',
      mask:true
    })
  }
})