<template>
    <div class="smart-home-enabled-statistics" data-msg="智能家居启用统计">
        <a-card style="width: 600px"
                :bordered="false">
            <h2 class="card-component-title">智能家居启用统计</h2>
            <a-divider/>
            <div v-for="item in smartHomeEnabledStatisticsData"
                 :key="item.key"
                 class="list"
            >
                <div class="item-name">{{item.name}}</div>
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="18" class="item-list">
                        <div class="item-rate" :style="`width:${item.rate}%`"></div>
                        <div class="item-content"
                             :data-text="`当前已启用户数：${item.enable} / ${item.total}，使用占比：${item.rate}%`"
                        >当前已启用户数：{{item.enable}} / {{item.total}}，使用占比：{{item.rate}}%
                        </div>
                    </a-col>
                    <a-col :span="5" :offset="1">
                        使用人数{{item.userNum}}
                    </a-col>
                </a-row>
            </div>
        </a-card>
    </div>
</template>
<script>
    import { smartHomeEnabledStatisticsData } from '../../utils/staticData';
    //  智能家居启用统计
    export default {
        name: 'smartHomeEnabledStatistics',
        data(){
            return {
                smartHomeEnabledStatisticsData: null,
            };
        },
        created(){
            this.smartHomeEnabledStatisticsData = smartHomeEnabledStatisticsData;
            this.smartHomeEnabledStatisticsData.forEach(item => {
                const { total, enable } = item;
                item.rate = (enable / total * 100).toFixed(0);
            });
        },
    };
</script>
<style scoped lang="less">
    .smart-home-enabled-statistics {
        .item-name {
            font-size: 16px;
        }
        
        .list {
            font-size: 12px;
            
            .item-list {
                background-color: var(--border-color-split);
                position: relative;
                height: 20px;
                
                .item-rate {
                    background-color: var(--c03FFCC);
                    height: 20px;
                }
                
                .item-content {
                    color: var(--c03FFCC);
                    mix-blend-mode: difference;
                    position: absolute;
                    top: 0;
                    left: 0;
                    vertical-align: middle;
                    
                    &::after {
                        /*content: attr(data-text);*/
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        /*color: red;*/
                        color: white;
                        /*mix-blend-mode: difference;*/
                        filter: revert;
                    }
                }
            }
        }
    }
</style>