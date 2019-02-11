<template>
    <div class="home-banner">
        <div class="carousel">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in recommend" :key="item.id">
                    <img :src="connectImg(item.img_name)"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            recommend:[],
        }
    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        }
    },

    created(){
        this.$axios.get('dbapi/index.php?api=index.index').then(res=>{
            let data = res.data.response.advert.top;
            this.recommend = data;
        })
    }
};
</script>
<style lang="scss" scoped>
    .home-banner{
        background: #fff;
        margin-top:50px;
        .carousel{
            height: 168px;
            .mint-swipe-item img{
                width:100%;
            }
        }
    }
</style>
