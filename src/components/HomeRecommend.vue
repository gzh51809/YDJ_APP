<template>
    <div class="home-recommend" @click="toDetails(goods.goods_id)">
            <img :src="connectImg(goods.img_name)" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return {
            goods:[]
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
            let data = res.data.response.advert.middle[0];
            this.goods = data;
        })
    }
}
</script>
<style lang="scss" scoped>
    .home-recommend{
        height: 94px;
        width:100%;
        img{
            width: 100%;
        }
    }
</style>

