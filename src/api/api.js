

const api2 = 'https://tickets.sanbinit.cn/api/' ;
// const api2 = 'https://pre2.bigxingxing.com/api/v2/';
// const api2 = 'https://www.bigxingxing.com/api/v2/';


const api = 'https://tickets.sanbinit.cn' ;
// const api = 'https://pre2.bigxingxing.com';
// const api = 'https://www.bigxingxing.com';
//登录 注册

const login = api2+'user/mp_login';//登录
const bind_phone = api2 +'user/bind_phone';//获取手机号

const product_list = api2 + 'product/list';//获取商品
const product_get = api2 + 'product/get';//商品详情
const order_pay = api2 + 'order/pay';//创建订单
const product_get_promotion = api2 + 'product/get_promotion' ;//票务分享
const get_home = api2 + 'user/get_home';//个人中心
const update_usinfo = api2 +'user/update_usinfo';//编辑个人信息
const my_wallet = api2 +'user/my_wallet';//我的钱包
const apply_cash = api2 +'user/apply_cash';//提现
const list_omstatus = api2 + 'order/list_omstatus';//订单状态
const order_list = api2 + 'order/list';//订单列表
const order_list_trade = api2 + 'order/list_trade';//订单详情
const user_certification = api2 + 'user/user_certification';// 信用认证
const product_verify = api2 + 'product/verify'; //商品核销
const list_mp_banner = api2 +'index/list_mp_banner';//获取轮播图
const user_identification = api2 +'user/identification';//信用认证获取
const order_get = api2 + 'order/get';//订单详情
const secret_usid = api2 + 'user/secret_usid'; //分享id
const get_params = api2 + 'play/get_params';//



const img_src = 'https://tickets.sanbinit.cn/icon/';

// const img_src = 'https://www.bigxingxing.com/icon/';
// const img_src = '../../images/';
//评价
module.exports = {
  api,img_src,login,bind_phone,product_list,product_get,order_pay,product_get_promotion,get_home,update_usinfo,my_wallet,apply_cash,list_omstatus,order_list,
  order_list_trade,user_certification,product_verify,list_mp_banner,user_identification,order_get,secret_usid,get_params



}