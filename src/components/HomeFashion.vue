<template>
    <section class="home-fashion">
        <HomeTitle class="HomeTitle">时装</HomeTitle>
        <div class="fashionTop">
            <div class="t_3column" v-for="item in goodsHot1" :key="item.id">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
        <div class="fashionBtm">
            <div class="t_4column">
                <a href="javascript:;" v-for="item in goodsHot2" :key="item.id">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            goodsHot1:[],
            goodsHot2:[]
        }
    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.index').then(res=>{
            let data = res.data.response.fashion;
            let dataT = data;
            this.goodsHot1 = dataT.splice(0,3);
            console.log(data,this.goodsHot1);
            this.goodsHot2 = data;
            console.log(this.goodsHot2)
        })
    }
}
</script>

<style lang="scss" scoped>
    .home-fashion{
        height: 331px;
        margin-top: 12px;
        .fashionTop{
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
            .fashionBtm{
            margin-top: 3px;
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
    }
</style>

