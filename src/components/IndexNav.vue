<template>
    <div class="index-nav">
        <div class="nav-bar">
            <mt-tabbar v-model="selected">
                <mt-tab-item :id="tab.id" v-for="tab in tabs" :key="tab.id" @click.native="goto(tab.path)">
                    <i :class="tab.icom" :style="{background:tab.icomColor}"></i>
                    <span>{{tab.text}}</span>    
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>   
</template>

<script>
export default {
    data(){
        return {
            selected:0,
            tabs:[
                {
                    id:'00',
                    text:'类目',
                    icom:'iconfont icon-sousuoleimu',
                    path:'/list',
                    icomColor:'#ffc107'
                },{
                    id:'01',
                    text:'活动馆',
                    icom:'iconfont icon-Shapecopy',
                    path:'/activitylist',
                    icomColor:'#91a7ff'

                },{
                    id:'02',
                    text:'伊日惠',
                    icom:'iconfont icon-huodong',
                    path:'/yirihui',
                    icomColor:'#ef5388'
                },{
                    id:'03',
                    text:'视频中心',
                    icom:'iconfont icon-weishipin',
                    path:'/video/index',
                    icomColor:'#a36feb'
                },{
                    id:'04',
                    text:'个人中心',
                    icom:'iconfont icon-gerenzhongxin',
                    path:'/user/index',
                    icomColor:'#ff8861'
                }

            ]
        }
    },
    methods:{
        goto(path){
            console.log(path)
            this.$router.push({path})
        }
    }
}
</script>

<style lang="scss" scoped>
    .index-nav{
        .nav-bar{
            .mint-tabbar{
                position: static;
                a{
                    display:inline-block;
                    height: 75px;
                    width: 71px;
                    span{
                        display: block;
                        height:30px;
                        line-height: 30px;
                        color: #828282;
                        font-size:16px;
                    }
                    i{
                        display:inline-block;
                        margin-bottom: 5px;
                        height:41px;
                        width: 41px;
                        line-height: 41px;
                        font-size:26px;
                        color:#fff;
                        background:#91a7ff;
                        border-radius: 21px;
                    }
                    
                }
                
            }
        }
    }
</style>
