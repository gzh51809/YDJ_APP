<template>
    <div class="page">
        <header class="detail-tabs">
            <span class="left iconfont icon-fanhui" @click="back"></span>
            <p class="text">
               <span class="active">详情</span>
               <span>图文</span>
               <span>评价</span> 
            </p> 
        </header>
        <div class="main">
            <section>
                <div class="detailImg">
                    <img :src="connectImg(goodsItem.imgname)" alt=""/>
                    <h3>{{goodsItem.goods_name}}</h3>
                    <p>
                        <b>￥ {{goodsItem.price}}</b>
                        <span>{{goodsItem.spec}}</span>
                    </p>
                </div>
                <div class="select">
                    <p>
                        <span>选择: </span>
                        <b>1件</b> 
                    </p>
                    <i class="iconfont icon-jiantou"></i>
                </div>
                <div class="about">
                    <span>
                        <i class="iconfont icon-choosehandle"></i>
                        <b>正品保证</b>
                    </span>
                    <span>
                        <i class="iconfont icon-choosehandle"></i>
                        <b>实物拍摄</b>
                    </span>
                    <span>
                        <i class="iconfont icon-choosehandle"></i>
                        <b>299包邮</b>
                    </span>
                </div>
                <section class="estimate">
                    <div class="estimateTop">
                        <p>
                            <span>累计评价: </span>
                            <b>({{goodsItem.remarks}})</b> 
                        </p>
                        <p class="right">
                            <span>已售{{goodsItem.sells}}</span>
                            <i class="iconfont icon-jiantou"></i>
                        </p>
                    </div>
                    <div class="content">
                        <ol>
                            <li>
                                <img src="https://img2.yidejia.com/3/2012/09/11/6743f40fd545.jpg!100" alt="">
                                <div class="user">
                                    <b>商城用户</b>
                                    <span>
                                        <i class="iconfont icon-stars"></i>
                                        <i class="iconfont icon-stars"></i>
                                        <i class="iconfont icon-stars"></i>
                                        <i class="iconfont icon-stars"></i>
                                        <i class="iconfont icon-stars"></i>
                                    </span>
                                    <p>很好和那hi</p>
                                    <time>2018-10-11</time>
                                </div>        
                            </li>
                        </ol>
                    </div>
                </section>
            </section>
        </div>
        <footer>
            <span :class="this.show== true ?'collectF':'collect'" @click="show=!show"><i class="iconfont icon-stars"></i>{{show?'收藏':'已收藏'}}</span>
            <span class="addCart">加入购物车</span>
            <span class="liji">立即购买</span>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodsItem:[],
            // collect:'collect',
            show:true
        }
    },
    methods:{
        connectImg(url){
            // console.log('123',url)
            let Url =  url!=undefined  ? url:this.goodsItem.carousel_image[0];
            // console.log('456',Url)
            return "https://img2.yidejia.com/"+Url
        },
        back(){
            this.$router.back();
        },
    },
    created(){
        console.log(this.$route.params.id);
        this.$axios.get(`dbapi/index.php?api=index.product.get&goods_id=${this.$route.params.id}`).then(res=>{
            let data = res.data;
            this.goodsItem = data.response;
            // console.log(this.goodsItem)
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
        .detail-tabs{
            height: 51px;
            background: #fff;
            padding: 0 10px;
            line-height: 51px;
            color: #909090;
            border-bottom: 1px solid #909090;
            .left{
                font-size: 25px;
                width: 10%;
            }
            .text{
                display: inline-block;
                width: 90%;;
                text-align: center;
                span{
                    display: inline-block;
                    font-size: 22px;
                    height: 100%;
                    width: 60px;
                }
                .active{
                    border-bottom: 2px solid #ec5196;
                    color: #ec5196; 
                }
            }
        }
        .main{
            width: 100%; 
            .detailImg{
                background: #fff;
                
                img{
                    width: 100%;
                    display: block;
                }
                h3{
                    padding: 12px;
                }
                p{
                    padding: 0 12px 12px 12px;
                    b{
                        font-weight: 600;
                        color: #ec5196;
                        display: inline-block;
                        width: 40%
                    }
                    span{
                        display: inline-block;
                        width: 57%;
                        color: #909090;
                        font-size: 15px;
                        text-align: right;
                    }
                }    
            } 
            .select{
                height: 51px;
                background: #fff;
                margin-top: 6px;
                padding: 0 12px;
                width: 100%;
                line-height: 51px;
                font-size: 16px;
                p{
                    display: inline-block;
                    width: 50%;
                    b{
                        color: #ec5196;
                        font-weight: 500;
                    }
                }
                i{
                    display: inline-block;
                    width: 40%;
                    font-size: 23px;
                    font-weight: 600;
                    text-align: right;
                    color: #909090;
                }
            }
            .about{
                height: 51px;
                line-height: 51px;
                padding: 0 12px;
                background: #fff;
                margin-top: 6px;
                span{
                    margin-right: 10px;
                    i{
                        font-size: 25px;
                        color: #ec5196;
                        vertical-align: middle;
                    }
                    b{
                        color: #909090;
                        font-size:16px;
                        font-weight: 500;
                    }
                }
            } 
            .estimate{
                background: #fff;
                margin-top: 6px;
                padding: 0 12px; 
                .estimateTop{
                    height: 50px;
                    line-height: 50px;
                    width: 100%;
                    margin-bottom: 1px;
                    p{
                        display: inline-block;
                        font-size: 17px;
                        width: 50%;
                        b{
                            font-weight: normal;
                        }
                    }
                    .right{
                        width: 48%;
                        text-align: right;
                        span{
                            color: #909090;
                        }
                        i{
                            font-size: 25px;
                            vertical-align: middle;
                            color: #909090;
                            font-weight: 600;
                        }
                    }
                }
                .content{
                    ol{
                        li{
                            border-top: 1px solid #909090;
                            padding: 12px 0;
                            img{
                                height: 46px;
                                border-radius: 50%;
                                margin-right: 15px;
                            }
                            .user{
                                display:inline-block;
                                vertical-align: middle;
                                width: 80%;
                                b{
                                    font-weight: 500;
                                    display: inline-block;
                                    width: 35%;
                                    font-size: 16px;
                                }
                                span{
                                    display: inline-block;
                                    text-align: right;
                                    width: 62%;
                                    i{
                                        font-size: 25px;
                                        color: #ec5196;
                                    }
                                }
                                p{
                                    color: #909090;
                                    font-size: 16px;
                                    line-height: 20px;
                                }
                                time{
                                    display: block;
                                    color: #909090;
                                    font-size: 14px;
                                    width:100%;
                                    text-align: right;
                                }
                            }
                        }
                    }    
                }
            } 
        } 
        footer{
            height: 50px;
            line-height: 50px;
            display: flex;
            background: #fff;
            
            span{
                display: inline-block;
                width: 33.33%;
                text-align: center;
                
                font-size: 16px;
                color: #fff;
            }
            .collectF{
                color: #909090;
            }
            .collect{
                color: #ec5196;
                
                i{
                    font-size: 25px;
                }
            }
            .addCart{
                background: orange;
            }
            .liji{
                background: #ec5196;
            }
        }
    }
    
</style>
