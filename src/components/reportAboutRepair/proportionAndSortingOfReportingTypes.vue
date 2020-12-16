<template>
    <div class="proportion-and-sorting-of-reporting-types" data-msg="报事报修类型占比与排序">
        <a-card style="width: 900px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">报事报修类型占比与排序</div>
                <a-col :span="2">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'custom-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >日
                        </div>
                        <div :class="{'custom-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >近7日
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="16">
                    <div id="proportionAndSortingOfReportingTypes"
                         data-msg="报事报修类型占比与排序饼图"
                         style="height: 350px;"
                    ></div>
                </a-col>
                <a-col :span="8">
                    <ul class="type-list">
                        <li v-for="item in list"
                            :key="item.key"
                            class="type-list-item"
                        >
                            <a-row type="flex" justify="space-between" align="middle">
                                <a-col :span="10">
                                    <b class="item-percent">{{item.percent}}</b>
                                </a-col>
                                <a-col :span="14">
                                    <span class="item-name">{{item.name}}</span>
                                </a-col>
                            </a-row>
                        </li>
                    </ul>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { proportionAndSortingOfReportingTypesData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c095B55,
        c4e9a94,
        c03FFCC,
        cC2FFFA,
        cFFFFFF,
        cBBBBBB,
        c929292,
        c696969,
        c4D4D4D,
        c373A3E,
        cCCCCCC,
        c25292E,
    } from '@/utils/constants';

    const option = {
        tooltip: false,
        series: [
            {
                type: 'pie',
                radius: ['50%', '100%'],
                avoidLabelOverlap: false,
                top: '12%',
                bottom: '12%',
                left: 'center',
                label: {
                    show: true,
                    color: cFFFFFF,
                    formatter: '{per|{d}%}\n{name|{b}}{num|{c}}',
                    rich: {
                        per: {
                            color: cFFFFFF,
                            lineHeight: 24,
                            verticalAlign: 'top',
                        },
                        name: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },
                        num: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },

                    },
                    //  文字与 线 之间的距离。
                    distanceToLabelLine: -32,
                },
                labelLine: {
                    length: 8,
                    length2: 64,
                    lineStyle: {
                        color: c373A3E,
                    }
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c25292E,
                },
            }
        ]
    };

    export default {
        name: 'proportionAndSortingOfReportingTypes',
        computed: {
            totalListValue(){
                return this.list.reduce((prev, current) => {
                    return prev + current.value;
                }, 0);
            }
        },
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                //  饼图数据
                pieData: null,
                //  列表数据
                list: null,
            };
        },
        created(){
            const { pieData, list } = proportionAndSortingOfReportingTypesData;
            this.pieData = pieData;
            this.list = list;
            //  设置颜色
            const colorList = [c095B55, c4e9a94, c03FFCC, cC2FFFA, cFFFFFF, cBBBBBB, c929292, c696969, c4D4D4D,];
            pieData.forEach((item, index) => {
                item.color = colorList[index];
            });
            const totalListValue = this.totalListValue;
            list.forEach((item, index) => {
                item.percent = `${(item.value / totalListValue * 100).toFixed(0)}%`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionAndSortingOfReportingTypes'));
            option.series[0].data = this.list;
            option.color = this.pieData.map(item => item.color);
            myEchart.setOption(option);
        },
        methods: {
            setActiveIndex(activeIndex){
                this.activeIndex = activeIndex;
            }
        },

    };
</script>
<style scoped lang="less">
    @import '~@/css/custom-tab.less';
    
    .proportion-and-sorting-of-reporting-types {
        #proportionAndSortingOfReportingTypes {
            border-right: 1px solid var(--border-color-split);
        }
        
        .type-list {
            padding: 0 2em 0 4em;
            
            .type-list-item {
                line-height: 2.4em;
                
                &:first-child {
                    .item-percent, .item-name {
                        color: var(--c03FFCC);
                    }
                }
                
                .item-percent {
                    text-align: right;
                    font-size: 18px;
                    color: var(--cFFFFFF);
                }
                
                .item-name {
                    color: var(--cB3B5B5);
                }
            }
        }
    }
</style>


