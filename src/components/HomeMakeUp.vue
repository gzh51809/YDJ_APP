<template>
    <section class="home-makeUp">
        <HomeTitle class="HomeTitle">美妆</HomeTitle>
        <div class="makeUpTop">
            <div class="t_4column">
                <a href="javascript:;" v-for="item in goodsHot1" :key="item.id">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
        <div class="makeUpBtm">
            <div class="t_3column" v-for="item in goodsHot2" :key="item.id">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
        <HomeRecommend/>
    </section>
</template>

<script>
//引入推荐
import  HomeRecommend from './HomeRecommend';
export default {
    data(){
        return {
            goodsHot1:[],
            goodsHot2:[]
        }
    },
    components:{HomeRecommend},
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.index').then(res=>{
            let data = res.data.response.makeUp;
            let dataT = data;
            this.goodsHot1 = dataT.splice(0,3);
            // console.log(data,this.goodsHot1);
            this.goodsHot2 = data;
            // console.log(this.goodsHot2)
        })
    }
}
</script>

<style lang="scss" scoped>
    .home-makeUp{
        height: 544px;
        margin-top: 12px;
            .makeUpTop{
            display: flex;
                .t_4column{
                a{
                    width:50%;
                    img{
                        width:49.5%;
                        border-bottom: 1px solid #f0f0f0;
                        vertical-align: top
                    }
                }
                a:first-child{
                    float: left;
                    img{
                        width:99.5%;       
                    }
                }

            }
        } 
        .makeUpBtm{
            display: flex;
            .t_3column{ 
                a{
                    display: flex;
                    img{
                        height: 165px;
                        width:100%;
                    } 
                }
            }
        }
    }
</style>

