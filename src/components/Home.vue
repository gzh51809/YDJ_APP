<template>
    <div class="page">
        <header>
            <mt-header title="伊的家" class="mt-header" fixed>
                <i slot="left" class="logoImg"></i>
                <i class="server" slot="right" @click="goto('Contact')"></i>
            </mt-header>
            <div class="search">
                <input type="text" placeholder="搜索伊的家商品">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </header>
        <div class="main">
            <HomeBanner/>
            <IndexNav/>
            <HomeHot/>
            <HomeFashion/>
            <HomeMakeUp/>
            <HomeNutrition/>
            <HomeGuess/>
        </div>
    </div>    
</template>
<script>
import { Indicator} from 'mint-ui';
//引入轮播组件
import HomeBanner from './HomeBanner';
//引入首页导航组件
import IndexNav from './IndexNav';
//引入热门推荐
import HomeHot from './HomeHot';
//引入时装模块
import HomeFashion from './HomeFashion';
//引入美妆模块
import HomeMakeUp from './HomeMakeUp';
//引入营养模块
import HomeNutrition from './HomeNutrition';
//引入喜欢模块
import HomeGuess from './HomeGuess';
// import '@/sass/home.scss';

export default {
    data(){
        return {

        }
    },
    components:{HomeBanner,IndexNav,HomeHot,HomeFashion,HomeMakeUp,HomeNutrition,HomeGuess}
}
</script>
<style lang="scss" scoped>
    .page{
       &>header{
            .mt-header{
                background: #ec5196;
                height: 51px;
                .logoImg{
                    display: block;
                    width: 44px;
                    height: 27px;
                    background:url(../assets/img/logo.png) no-repeat;
                    background-size: 44px;
                }
            }   
            
       }
       .search{
                box-sizing: border-box;
                position:fixed;
                top:6px;
                left:15%;
                z-index:11;
                width:70%;
                input[type="text"]{
                    box-sizing: inherit;
                    height: 38px;
                    border-radius:5px;
                    font-size:16px;
                    width:100%;
                    padding:0 15%;
                }
                i{color:#555555;position:absolute;top:50%;left:10px;transform:translateY(-50%);}
            }
    }
</style>
