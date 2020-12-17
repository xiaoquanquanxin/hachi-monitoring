<template>
    <div class="manual-switching-statistics" data-msg="7日手动开闸统计">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">7日手动开闸统计</div>
            </a-row>
            <a-divider/>
            <div id="manualSwitchingStatistics"
                 data-msg="7日手动开闸统计"
                 style="height: 350px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { manualSwitchingStatisticsData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        c4D4D4D,
    } from '../../utils/constants';
    import {
        grid,
        yAxis,
        axisLine,
        axisLabel,
        axisTick,
        lineSeriesConfig,
    } from '../../utils/constants';

    const option = {
        dataset: {
            dimensions: ['date', 'openedNumber',],
        },
        //  缩放
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 25,
            zoomLock: true,
        },
        xAxis: {
            type: 'category',
            axisLine,
            axisLabel,
            axisTick,
        },
        grid: Object.assign({}, grid, { top: '6%%' }),
        yAxis,
        series: [
            {
                type: 'bar',
                barMaxWidth: 24,
                itemStyle: {
                    color: c4D4D4D,
                    //  条柱圆角
                    barBorderRadius: [2, 2, 0, 0],
                },
                emphasis: {
                    itemStyle: {
                        color: c03FFCC,
                    }
                }
            },
        ]
    };
    export default {
        name: 'vehicleApproachTrend',
        data(){
            return {
                manualSwitchingStatisticsData: null,
            };
        },
        created(){
            this.manualSwitchingStatisticsData = manualSwitchingStatisticsData;
        },
        mounted(){
            const myEchart = init(document.getElementById('manualSwitchingStatistics'));
            option.dataset.source = this.manualSwitchingStatisticsData;
            myEchart.setOption(option);
        },

    };
</script>
<style scoped lang="less">
    .manual-switching-statistics {
    
    }
</style>
