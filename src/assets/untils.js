/** jinx qy
 * auth 2018.06.08
 * h5调起高德、腾讯、百度地图组件
 */

let _option = {
    type: 'gd',
    point: {},
    key: '',
    pointname: '终点'
};

/**
 * 每个地图软件配置的map 对象
 */
let getSchemeUrl = () => {
    let urlObj = {
        'gd': {
            'androind': `androidamap://navi?sourceApplication=appname&poiname=${_option.pointname}&lat=${_option.point.lat}&lon=${_option.point.lng}&dev=1&style=2`,
            'ios': `iosamap://navi?sourceApplication=test&poiname=${_option.pointname}&lat=${_option.point.lat}&lon=${_option.point.lng}&dev=1&style=2`
        },
        'bd': {
            'androind': `baidumap://map/navi?location=${_option.point.lat},${_option.point.lng}&type=TIME`,
            'ios': `bdapp://map/navi?location=${_option.point.lat},${_option.point.lng}&type=TIME`
        },
        'tx': {
            'androind': `qqmap://map/routeplan?type=drive&fromcoord=CurrentLocation&tocoord=${_option.point.lat},${_option.point.lng}&referer=${_option.key}`,
            'ios': `qqmap://map/routeplan?type=drive&fromcoord=CurrentLocation&tocoord=${_option.point.lat},${_option.point.lng}&referer=${_option.key}`
        }
    };
    return urlObj[_option.type][isAndroin()];
};

//判断手机机型
let isAndroin = () => {
    return (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) ? "androind" : "ios";
}

//打开app
let isError = () => {
    return new Promise((resolve, reject) => {
        let startTime = Date.now();
        let t = setInterval(() => {
			let endTime = Date.now()
			//如果没有超市
			if(endTime - startTime < 4010) {
				resolve();
			} else {
                clearInterval(t);
			}
		}, 4000)
    });
}

/**
 * 外部暴露方法
 * @param {object} option 
 * option参数：option.type 地图类型 gd 高德，tx 腾讯，bd 百度
 *          option.point 经度和纬度 { lat: 104.06, lng:  30.67} 
 *          key 对应开发者平台的key，没有就不传
 */
export function mapNav(option = {}) {
    //默认的option
    Object.assign(_option, option);
    //跳转的schemeUrl
    let schemeUrl = getSchemeUrl();

    isError().then(() => {
        let ifr = document.createElement('iframe')
        ifr.src = schemeUrl;
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
    });
}