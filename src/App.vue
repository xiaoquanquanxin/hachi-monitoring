<template>
    <a-layout id="components-layout-demo-custom-trigger">
<!--        <Slider/>-->
        <MainContent/>
    </a-layout>
</template>
<script>
    import Slider from '@/layout/slider.vue';
    import MainContent from '@/layout/mainContent.vue';

    export default {
        components: {
            Slider,
            MainContent,
        },

    };
</script>
<style lang="less">
    // 引入官方提供的 less 样式入口文件
    @import '~ant-design-vue/dist/antd.less';
    // 用于覆盖上面定义的变量
    @import '~@/css/color.less';
    
    #components-layout-demo-custom-trigger {
        background-color: #202428;
        
        .trigger {
            font-size: 18px;
            line-height: 64px;
            padding: 0 24px;
            cursor: pointer;
            transition: color 0.3s;
            
            &:hover {
                color: #2d3237;
            }
        }
    }
</style>
