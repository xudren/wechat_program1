import {myRequest} from "../utils/utils";
module.exports={
  getlunbo:()=>myRequest('/home/swiperdata') ,//轮播图||首页的第一部分
  getCates:()=>myRequest('/categories'),//分类，秒杀，超市购，母婴品||首页的第二部分
  getSwiperList:()=>myRequest('/home/catitems'),  //分类页面的商品分类数据
  getfloorData:()=>myRequest('/home/floordata'), //首页的第三部分
  getGoodsList:(data)=>myRequest('/goods/search','GET',data), //商品列表页面
  getGoodsDetail:(data)=>myRequest('/goods/detail','GET',data)
}
