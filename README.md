# h5导航插件使用说明
> * 安装依赖
`` npm install ``
> * 运行
`` npm run dev ``
> * 调用
``import { mapNav } from until.js;
mapNav({
   type: 'gd', // gd：高德 bd：百度 tx：腾讯
   point: { //对应的终点坐标,百度地图请传百度坐标系
         lat: 104.068993,
         lng: 30.546820
   },
   pointname: 'test', //高德地图必传重点名称
   key: 'XXXXX'//开发者平台申请的key，调用腾讯地图时使用
})``
