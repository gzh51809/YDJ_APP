<template>
    <div class="page">
        <HomeTabs class="home-tabs">
            <span slot="left" class="left iconfont icon-fanhui" @click="back"></span>
            <span slot="centen" class="text">
                伊日惠
            </span>
            <span slot="right" class="more iconfont icon-caidan"></span> 
        </HomeTabs>
        <div class="main">
            <section v-for="item in yirihui" :key="item.goods_id">
                <header>
                    <span>距离结束时间0天0时0分0秒</span>
                    <span class="status">已结束</span>
                </header>
                <div class="goodsItem">
                    <a href="javascript:;"><img :src="connectImg(item.img_1)" alt=""></a>
                    <h3>{{item.rule_name}}</h3>
                    <em>￥ {{item.goods_price}}</em>
                    <b>剩余0件</b>
                    <span><img :src="connectImg(item.img_2)" alt=""></span>
                </div>
                
                
            </section>
            <div class="backTop">
                <i class="iconfont icon-shuaxin"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            yirihui:[]
        }
    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        },
        back(){
            this.$router.back();
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.active.yirihui&type=2').then(res=>{
            let data = res.data.response;
            this.yirihui = data;
            console.log(data)
        })
    },
}
</script>
<style lang="scss" scoped>
    #container{height: 100%;}
    .page{
        height: 100%;
        display: flex;
        flex-direction:column;
        .main{
            width: 100%;
            section{
                margin-top: 10px;
                background: #fff;
                header{
                    display: flex;
                    justify-content: space-between;
                    height: 38px;
                    line-height: 38px;
                    font-size: 17px;
                    padding: 0 12px;
                    border-bottom: 1px solid #f0f0f0;
                    .status{
                        color:#909090;
                    }
                }
                .goodsItem{
                    position: relative;
                    padding: 12px 0;
                    height: 116px;
                    a{
                        margin-right: 10px;
                        float: left;
                        img{
                            width: 116px;
                        }
                    }
                    h3{
                        height: auto;
                        font-size: 16px;
                    }
                    em{
                        display: block;
                        font-size: 15px;
                        font-weight: 700;
                        color:#ec5196;
                        margin-top: 10px;
                    }
                    b{
                        font-size: 15px;
                        height: 60px;
                        line-height: 60px;
                        color:#909090;
                    }
                    span{
                        position: absolute;
                        right: 10px;
                        bottom: 5px;
                        img{
                           height: 58px; 
                        }
                    }
                }
                    
            }
            .backTop{
                position: fixed;
                bottom: 30px;
                right: 15px;
                height: 45px;
                width: 45px;
                background: #fff;
                line-height: 45px;
                text-align: center;
                border-radius: 50%;
                display: none;
                i{
                    font-size: 35px;
                    color: #58bc58;
                }
            }
                
        } 
    }
    
</style>
