import {myRequest} from "../utils/utils";
module.exports={
  getlunbo:()=>myRequest('/home/swiperdata') ,
  getCates:()=>myRequest('/categories'),
  getSwiperList:()=>myRequest('/home/catitems'),
  getfloorData:()=>myRequest('/home/floordata')
}
