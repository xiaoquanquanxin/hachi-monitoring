<template>
    <div class="visitor-distribution-statistics" data-msg="访客分布量统计">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">访客分布量统计</div>
                <a-col :span="3" :offset="9">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'custom-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >今日
                        </div>
                        <div :class="{'custom-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >7日
                        </div>
                    </a-row>
                </a-col>
                <a-col :span="3">
                    <span class="total-label">总数：</span>{{totalNumber}}
                </a-col>
            </a-row>
            <a-divider/>
            <div id="visitorDistributionStatistics"
                 data-msg="访客分布量统计饼图"
                 style="height: 320px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { visitorDistributionStatisticsData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        cFFFFFF,
        cCCCCCC,
        c4D4D4D,
        c373A3E,
        c03FFCC01,
    } from '@/utils/constants';

    const option = {
        radar: {
            shape: 'circle',
            name: {
                textStyle: {
                    color: cFFFFFF,
                }
            },
            //  角度分割线
            axisLine: {
                lineStyle: {
                    color: c4D4D4D,
                }
            },
            //  环形分割线
            splitLine: {
                lineStyle: {
                    color: c4D4D4D,
                }
            },
            //  区域
            splitArea: {
                areaStyle: {
                    color: c373A3E,
                }
            },
            //  指示器
            indicator: []
        },
        color: [c03FFCC],
        tooltip: {},
        series: [{
            name: '访客分布量统计',
            type: 'radar',
            symbolSize: 3,
            lineStyle: {
                width: 1,
            },
            areaStyle: {
                color: c03FFCC01,
            },
            data: [{}],
            tooltip: {
            
            },
        }]
    };
    export default {
        name: 'visitorDistributionStatistics',
        computed: {
            totalNumber(){
                return this.visitorDistributionStatisticsData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                visitorDistributionStatisticsData: null,
            };
        },
        created(){
            //  修复雷达使其顺时针转数据
            visitorDistributionStatisticsData.reverse();
            const lastItem = visitorDistributionStatisticsData.pop();
            visitorDistributionStatisticsData.unshift(lastItem);
            const { series, radar } = option;
            radar.indicator = visitorDistributionStatisticsData.map(({ name, max }) => {return { name, max };});
            series[0].data[0].value = visitorDistributionStatisticsData.map(item => item.value);
        },
        mounted(){
            const myEchart = init(document.getElementById('visitorDistributionStatistics'));
            myEchart.setOption(option);
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
    
    .visitor-distribution-statistics {
        .total-label {
            font-size: 12px;
            color: var(--cB3B5B5);
        }
    }
</style>


