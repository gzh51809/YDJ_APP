<template>
    <div id="container">
        <router-view/>
    </div>
</template>
<script>
import Vue from 'vue';

// 引入base.css文件
import './sass/base.css'

//引入图片懒加载
// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//     preLoad: 1.3,
//     error: require('@/assets/img/imgLoading.gif'),
//     loading: require('@/assets/img/imgLoading.gif'),
//     attempt: 1
// })

// 引入并使用MintUI
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 引入并使用vant-ui
import Vant from 'vant';
Vue.use(Vant)

// 引入common.scss
import './sass/common.scss';

//引入字体图标
import './assets/iconfont/iconfont.css';

//引入title插件
import HomeTitle from '@/plugins/HomeTitle';
//使用插件
Vue.use(HomeTitle);

//引入HomeTabs插件并使用
import HomeTabs from '@/plugins/HomeTabs';
Vue.use(HomeTabs);

import axios from 'axios';
//把axios写入Vue的原型对象，后面方便调用
Vue.prototype.$axios = axios;


// // loading效果
// // 利用axios拦截器全局设置
// import { Indicator } from 'mint-ui';
// // http请求拦截器
// axios.interceptors.request.use(config=>{
//     Indicator.open('加载中...');
//     return config;
// }), error => {
//     Indicator.close();
//     return Promise.reject(error);
// }
// // http响应拦截器
// axios.interceptors.response.use(data=>{
//     Indicator.close();
//     return data;
// }), error => {
//     Indicator.close();
//     return Promise.reject(error);
// }


export default {
    data(){
        return {
        }
    },
    methods:{
    }
}
</script>
