# 基于vue的h5导航插件使用说明
> * 安装依赖

``` npm install ```
> * 运行

``` npm run dev ```

> * 调用

```
import { mapNav } from until.js;
mapNav({
   type: 'gd',  // gd 高德 bd百度 tx 腾讯
   
    point: { 
   
         lat: 104.068993,
         
         lng: 30.546820
         
   },
   
   pointname: 'test', // 高德地图必传
  
   key: 'XXXXX'  // 腾讯地图必传，开发者平台申请的key
   
})
```
``` 如果您是使用其他框架，可以直接参考until.js```
