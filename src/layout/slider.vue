<template>
    <a-layout-sider class="layout-slider">
        <div class="logo">
            <img :src="homeLogo" class="img" alt="">
            <span class="description">Hachi监控平台</span>
        </div>
        <a-menu theme="dark"
                mode="inline"
                :defaultOpenKeys="defaultOpenKeys"
                :selectedKeys="selectedKeys"
                v-if="selectedKeys.length"
        >
            <template v-for="item in syncRouteList">
                <a-sub-menu :key="item.name"
                            v-if="item.children"
                >
                    <span slot="title">
                        <a-icon type="unordered-list"/>
                        <span>{{item.meta.chName}}</span>
                    </span>
                    <a-menu-item v-for="_item in item.children"
                                 :key="_item.name"
                                 v-if="!_item.meta.hidden"
                    >
                        <router-link :to="{name:_item.name}">
                            <a-icon type="bar-chart"/>
                            <span>{{_item.meta.chName}}</span>
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item
                        :key="item.name"
                        v-else-if="!item.meta.hidden"
                >
                    <router-link :to="{name:item.name}">
                        <a-icon type="bar-chart"/>
                        <span>{{item.meta.chName}}</span>
                    </router-link>
                </a-menu-item>
            </template>
        </a-menu>
    </a-layout-sider>
</template>
<script>
    import homeLogo from '@/assets/home-logo.png';
    import { syncRouteList } from '@/router/syncRouteList';

    export default {
        name: 'Slider',
        computed: {},
        watch: {
            $route(val){
                const { name, matched } = val;
                this.selectedKeys = [name || ''];
                //  console.log(matched);
                if (matched.length > 1) {
                    this.defaultOpenKeys = [matched[0].name];
                }
                //  console.log(this.defaultOpenKeys);
            }
        },
        data(){
            return {
                homeLogo,
                syncRouteList,
                selectedKeys: [],
                defaultOpenKeys: [],
            };
        },
        created(){

        },
        methods: {}
    };
</script>
<style scoped lang="less">
    /*整体*/
    .layout-slider {
        overflow: auto;
        height: 100vh;
        
        /*图标logo*/
        
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
    }
</style>