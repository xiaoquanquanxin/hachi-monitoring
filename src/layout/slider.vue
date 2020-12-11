<template>
    <a-layout-sider>
        <div class="logo">
            <img :src="homeLogo" class="img" alt="">
            <span class="description">Hachi监控平台</span>
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item v-for="(item,index) in syncRouteList"
                         :key="index"
                         v-if="!item.meta.hidden"
            >
                <router-link :to="item.name">
                    <a-icon type="user"/>
                    <span>{{item.meta.chName}}</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
    import homeLogo from '@/assets/home-logo.png';
    import { syncRouteList } from '../router/syncRouteList';

    export default {
        name: 'Slider',
        computed: {
//            syncRouteList(){
//                return syncRouteList;
//            }
        },
        data(){
            return {
                homeLogo,
                syncRouteList,
            };
        },
        created(){
            console.log(this.syncRouteList);
        },
        methods: {
            getRenderRoute(item){
                if (item.children) {
                    item.renderChildren = item.children.filter(this.getRenderRoute);
                }
                return item.meta && !item.meta.hidden;
            }
        }
    };
</script>
<style scoped lang="less">
    /*图表*/
    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
        color: white;
        text-align: center;
        line-height: 32px;
        font-size: 16px;
        overflow: hidden;
        
        .img {
            vertical-align: baseline;
            width: 24px;
        }
        
        .description {
        
        }
    }
</style>