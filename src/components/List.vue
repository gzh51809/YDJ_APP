<template>
    <div class="page">
        <HomeTabs class="home-tabs">
            <span slot="left" class="left iconfont icon-fanhui"></span>
            <div slot="centen" class="search">
                <input type="text" placeholder="搜索伊的家商品">
                <i class="iconfont icon-fangdajing"></i>
            </div>
            <span slot="right" class="more iconfont icon-caidan"></span> 
        </HomeTabs>
        <div class="main">
            <div class="listTabs">
                <nav>
                    <a href="javascript:;" @click="changeList(0)" :class="this.active== 0 ?'active':''">护肤品</a>
                    <a href="javascript:;" @click="changeList(1)" :class="this.active== 1 ?'active':''">彩妆</a>
                    <a href="javascript:;" @click="changeList(2)" :class="this.active== 2 ?'active':''">食品</a>
                    <a href="javascript:;" @click="changeList(4)" :class="this.active== 4 ?'active':''">时装</a>
                </nav>
            </div>
            <div class="listContent">
                <ul>
                    <li>
                        <a href="javascript:;" v-for="item in current" :key="item.id">
                            <img :src="connectImg(item.image)" alt="">
                            <div>
                                <h3>{{item.name}}</h3>
                                <h4>{{item.desc}}</h4>
                            </div>    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            allList:[{list:[]}],
            selectedIndex:0,
            active:0
        }
    },
    computed:{
        current(){
            return this.allList[this.selectedIndex].list;
        }
    },
    methods:{
        connectImg(url){
            return "https://img2.yidejia.com/"+url
        },
        changeList(idx){
            this.selectedIndex = idx;
            this.active=idx;
        }
    },

    created(){
        this.$axios.get('dbapi/index.php?api=index.index.getItems').then(res=>{
            let allList = res.data.response;
            this.allList = allList;
            console.log(this.allList)
        })
    }
    
}
</script>
<style lang="scss" scoped>
    .main{
        display: flex;
        .listTabs{
            width:25%;
            .active{
                background:#fff;
                color:#ec5196;
            }
            nav{
                position: fixed;
                width:25%;
                left:0;
                top:51px;
                a{
                    display: block;
                    width:100%;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    display: block;
                    border-bottom: 1px solid #e4e4e4;
                    font-size: 16px;
                    color: #a0a0a0;
                }
            }
        }
        .listContent{
            display: flex;
            width:74%;
            background: #fff;
            ul{
                li{
                    padding: 0 10px;
                    width:100%;
                    background: #fff;
                    a{
                        border-bottom: 1px solid #a0a0a0;
                        width:100%;
                        display: flex;
                        // height: 60px;
                        padding: 12px 0;
                        img{
                            height: 58px;
                            margin-right: 10px;
                            border: 1px solid #a0a0a0;
                        }
                        div{
                            width:100%;
                            h3{
                                font-size: 16px;
                                padding-top: 6px;
                                height: 32px;
                                color: #333;
                            }
                            h4{
                                font-size: 13px;
                                height: 16px;
                                color: #9f9f9f;
                                overflow: hidden;
                            }
                        }
                            
                    }
                }
            }
        }
    }
</style>


