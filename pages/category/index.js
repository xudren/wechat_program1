// pages/category/index.js
import{getCates} from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[], //左侧菜单数据
    rightMenList:[], //右侧菜单数据
    currentIndex:0,  //被点击左侧的菜单的索引
    scrollTop:0      //右侧内容的滚动条距离顶部的距离
  },
Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const Cates=wx.getStorageSync('cates')
    if(Cates){
      if(Date.now()-Cates.time>1000*20){
        this.getTableData()
      }else{
        this.Cates=Cates.data
        let leftMenuList=this.Cates.map((v)=>v.cat_name)
        let rightMenList=this.Cates[0].children
        this.setData({
          leftMenuList,
          rightMenList
        })
      }
    }else{
      this.getTableData()
    }
  },
  handleItemTap(e){
    console.log(e,'e')
    const {index}=e.currentTarget.dataset
    this.setData({
      currentIndex:index,
      rightMenList:this.Cates[index].children,
      scrollTop:0
    })
  },
    async getTableData(){
      this.Cates= await getCates()
      wx.setStorageSync('cates', {time:Date.now(),data:this.Cates})
      let leftMenuList=this.Cates.map((v)=>v.cat_name)
      let rightMenList=this.Cates[0].children
    this.setData({
      leftMenuList,
      rightMenList
    })
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

  }
})