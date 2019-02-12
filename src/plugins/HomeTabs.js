export default {
    install(Vue,options){
        // 创建全局组件
        Vue.component('HomeTabs',{
            template:`<header>
                <div class="home-tabs">
                    <slot name="left"></slot>
                    <slot name="centen"></slot>
                    <slot name="right"></slot>
                </div>
        </header>`
        })
    }
}