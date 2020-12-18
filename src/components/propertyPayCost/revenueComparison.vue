<template>
    <div class="revenue-comparison" data-msg="营业收入对比">
        <a-card style="width: 1220px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">应收实收占比</div>
                <a-col :span="5">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div v-for="(item,index) in tabList"
                             :key="item.key"
                             :class="{'custom-label':true,'active-label':activeIndex===index}"
                             @click="setActiveIndex(index)"
                        >{{item.name}}
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle"
                   class="container"
            >
                <a-col :span="3"
                       class="container-label"
                       style="height: 300px;"
                >
                    <div class="fee-type">费类</div>
                    <div class="fee-content">
                        <div>当前值</div>
                        <div>对比值</div>
                        <div>环比增长</div>
                        <div>同比对比值</div>
                        <div>同比增长</div>
                    </div>
                </a-col>
                <a-col :span="21"
                       class="list-overflow"
                >
                    <div class="list-item-wrap"
                         :style="`width:${135*revenueComparisonData.length}px`"
                    >
                        <a-row type="flex" justify="space-between" align="middle">
                            <div v-for="item in revenueComparisonData"
                                 :key="item.key"
                                 class="list-item"
                            >
                                <div style="background-color: var(--border-color-split)">
                                    <a-icon type="home"/>
                                    {{item.name}}
                                </div>
                                <div class="fee-content">
                                    <div><span class="num">{{item.current}}</span>万</div>
                                    <div><span class="num">{{item.ratio}}</span>万</div>
                                    <div><span class="num">{{item.rose}}</span>%</div>
                                    <div><span class="num">{{item. yearContrast}}</span>万</div>
                                    <div><span class="num">{{item. growth}}</span>%</div>
                                </div>
                            </div>
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { revenueComparisonData } from '../../utils/staticData';

    export default {
        name: 'revenueComparison',
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                tabList: [{ key: 1, name: '最近一个月' }, { key: 2, name: '最近三个月', }, { key: 3, name: '最近半年' }],
                revenueComparisonData: null,
            };
        },
        created(){
            this.revenueComparisonData = revenueComparisonData;
        },
        methods: {
            setActiveIndex(activeIndex){
                this.activeIndex = activeIndex;
            }
        }
    };
</script>
<style scoped lang="less">
    @import '~@/css/custom-tab.less';
    
    .revenue-comparison {
        
        .container {
            font-size: 12px;
            line-height: 46px;
            text-align: center;
            color: var(--cB3B5B5);
            
            .container-label {
                text-align: left;
                text-indent: 2em;
            }
            
            .list-overflow {
                overflow: hidden;
                height: 300px;
                position: relative;
                
                &::after {
                    right: 0;
                    top: 0;
                    position: absolute;
                    content: '';
                    display: block;
                    height: 300px;
                    width: 120px;
                    background: linear-gradient(to left, #25292E, transparent);
                }
            }
            
            .list-item-wrap {
                padding: 0 10px;
                
                .list-item {
                    line-height: 43px;
                    width: 125px;
                    height: 300px;
                    background-color: var(--c2C3034);
                }
            }
            
            
            .fee-type {
            
            }
            
            .fee-content {
                padding: 1em 0;
                
                .num {
                    font-size: 20px;
                    color: var(--cFFFFFF);
                }
            }
        }
    }
</style>
