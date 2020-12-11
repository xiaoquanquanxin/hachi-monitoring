<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <Slider/>
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
<style scoped lang="less">
    #components-layout-demo-custom-trigger {
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
