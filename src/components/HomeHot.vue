<template>
    <div class="m_hot">
        <div class="hot-top">
            <div class="t_3column" v-for="item in goodsHot1" :key="item.id" @click="toDetails(item.goods_id)">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
        <div class="hot-btm">
            <div class="t_4column">
                <a href="javascript:;" v-for="item in goodsHot2" :key="item.id" @click="toDetails(item.goods_id)">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
            </div>
        </div>
    </div>
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
        },
        toDetails(id){
            this.$router.push({path:'/details/'+id})
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.index').then(res=>{
            let data = res.data.response.top;
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
    .m_hot{
        .hot-top{
            margin-top: 12px;
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
        .hot-btm{
            margin-top: 6px;
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


