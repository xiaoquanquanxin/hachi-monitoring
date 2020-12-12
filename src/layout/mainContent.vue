<template>
    <a-layout class="main-layout">
        <a-layout-content class="layout-content">
            <router-view></router-view>
        </a-layout-content>
    </a-layout>
</template>
<script>
    export default {
        name: 'MainContent'
    };
    //  todo    这里 .main-layout 的min-width有问题
</script>
<style scoped lang="less">
    .main-layout {
        overflow: auto;
        height: 100vh;
        min-width: 1280px;
        
        .layout-content {
            margin: 0;
            padding: 24px;
        }
    }
</style>