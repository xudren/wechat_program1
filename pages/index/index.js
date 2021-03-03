//index.js
//获取应用实例
const app = getApp()
import {getlunbo,getSwiperList,getfloorData} from "../../utils/index"
Page({
  data:{
    swiperList:[],
    catesList:[],
    floorList:[]
  },
  onLoad(options){
    this.getTableData()
    this.getCateList()
    this.getFloorList()
  },
  async getFloorList(){
    const data= await getfloorData()
    this.setData({
      floorList:data
    })
  },
  async getCateList(){
    const data= await getSwiperList()
    this.setData({
      catesList:data
    })
  },
    async getTableData(){
      const data= await getlunbo()
      this.setData({
        swiperList:data
      })
    }
})
