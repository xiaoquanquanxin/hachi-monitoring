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
</script>
<style scoped lang="less">
    .main-layout {
        min-width: 1920px;
        
        .layout-content {
            margin: 0;
            padding: 24px;
            background: #fff;
        }
    }
</style>