<template>
    <div class="page">
        <HomeTabs class="home-tabs">
            <span slot="left" class="left iconfont icon-fanhui"></span>
            <span slot="centen" class="text">
                活动馆
            </span>
            <span slot="right" class="more iconfont icon-caidan"></span> 
        </HomeTabs>
        <div class="main">
            <section v-for="item in activity" :key="item.id">
                <header>
                    <span>{{item.title}}</span>
                    <span class="status">{{item.status}}</span>
                </header>
                <a href="javascript:;"><img :src="connectImg(item.img)" alt=""></a>
                <footer>
                    <span>活动时间：{{item.the_date}}</span>
                </footer>
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
            activity:[]
        }
    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        },
        scrollToTop() { 
        　　var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        　　console.log(111) 
        }
    },
    created(){
        this.$axios.get('dbapi/index.php?api=index.active.getList').then(res=>{
            let data = res.data.response;
            this.activity = data;
            console.log(data)
        })
    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop)
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
                    .status{
                        color:#909090;
                    }
                }
                a{
                    display: block;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                footer{
                    text-align: right;
                    padding-right: 10px;
                    span{
                        font-size: 14px;
                        color: #909090;
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
