<template>
    <div class="home-guess">
        <h3 class="youGuess">- 猜你喜欢 -</h3>
        <div class="hot-top">
            <div class="t_3column" v-for="item in goodsHot1" :key="item.id">
                <a href="javascript:;">
                    <img :src="connectImg(item.img_name)" alt="">
                    <footer>
                        <h4>{{item.goods_name}}</h4>
                        <em>￥ {{item.price}}</em>
                    </footer>
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
            // console.log(data,this.goodsHot1);
        })
    }
}
</script>

<style lang="scss" scoped>
    .home-guess{
        .youGuess{
            width: 100%;
            color: #828282;
            font-size: 16px;
            text-align: center;
            line-height: 44px;
        }
        .hot-top{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            
            .t_3column{ 
                width:49%;
                margin-bottom: 6px;
                a{
                    display: block;
                    background:#fff;
                    height:266px;
                    img{
                        height: 184px;
                        width:100%;    
                    }
                    footer{
                        padding:6px;
                        h4{
                            font-size: 13px;
                            height: 46px;
                            line-height: 23px;
                            overflow: hidden;
                            color: #828282;
                        }
                        em{
                            color:#ec5196;
                            font-size: 15px;
                        } 
                    }
                    
                }
            }

        }   
    }
</style>


