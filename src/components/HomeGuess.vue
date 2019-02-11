<template>
    <div class="m_hot">
        <div class="hot-top">
            <div class="t_3column" v-for="item in goodsHot1" :key="item.id">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                </a>
                <footer>
                    <h4></h4>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodsHot1:[],
        }

    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.index').then(res=>{
            let data = res.data.response.guess;
            this.goodsHot1 = data;
            console.log(data,this.goodsHot1);
        })
    }
}
</script>

<style lang="scss" scoped>
    .m_hot{
        .hot-top{
            margin-top: 12px;
            .t_3column{ 
                display:inline-block;
                width:49%;
                a{
                    img{
                        height: 184px;
                        width:100%;
                        
                    } 
                }
            }
        }   
    }
</style>


