// pages/goods_list/index.js
import{getGoodsList} from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[ //tab组件中的标题
      {
        id:0,
        value:'综合',
        isActive:true
      },
      {
        id:1,
        value:'销量',
        isActive:false
      },      
      {
        id:2,
        value:'价格',
        isActive:false
      }
    ],
    //页面数组
    goodsList:[]
  },
  //接口参数
  QueryParams:{
    query:'',
    cid:"",
    pagenum:1,
    pagesize:10
  },
   //总页数
   totalPages:1,
  handleTabsItemChange(e){
    const index=e.detail
    const {tabs}=this.data
    tabs.forEach((v,i)=>
    v.id===index?v.isActive=true:v.isActive=false
    )
    this.setData({
      tabs
    })
  },

  async getGoodsLiist(){
    const res=await getGoodsList(this.QueryParams)
    // res.goods=[...this.data.goodsList,...res.goods]
    const {total}=res
    this.totalPages=Math.ceil(total/this.QueryParams.pagesize)
    this.setData({
      goodsList:[...this.data.goodsList,...res.goods]
    })
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.QueryParams.cid=options.cid
    this.getGoodsLiist()
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
      this.QueryParams.pagenum=1
      this.setData({
        goodsList:[]
      })
      this.getGoodsLiist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log('触底了')
      if(this.QueryParams.pagenum>=this.totalPages){
        wx.showToast({
          title: '没有下一页数据了',
        })
        return
      }
      this.QueryParams.pagenum++
      this.getGoodsLiist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})