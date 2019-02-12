<template>
    <section class="home-nutrition">
        <HomeTitle class="HomeTitle">营养</HomeTitle>
        <div class="fashionTop">
            <div class="t_3column" v-for="item in goodsHot1" :key="item.id">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
        <div class="fashionTop">
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
            let data = res.data.response.nutrition;
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
   .home-nutrition{
        margin-top: 12px;
        .fashionTop{
            display: flex;
            .t_3column{ 
                a{
                    display: flex;
                    width:100%;
                    img{
                        height: 165px;
                        width:100%;
                        
                    } 
                }
            }
        }   
    }
</style>

