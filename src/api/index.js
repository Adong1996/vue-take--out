import myAxios from './myAios.js'
//根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) => myAxios.get(`/position/${longitude},${latitude}`)
//获取食品分类列表
export const reqCategory = () => myAxios.get('/index_category')
//根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => myAxios.get('/shops',{params:{latitude,longitude}})

