<template>
    <div class="ladder-control-operation-ranking" data-msg="梯控运行工作排名">
        <a-card style="width: 600px"
                :bordered="false">
            <div class="card-component-title">梯控运行工作排名</div>
            <a-divider/>
            <div id="frequentApproach"
                 data-msg="梯控运行工作排名条形图"
                 style="height: 320px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { ladderControlMonitoringData } from '../../utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, cFFFFFF, c929292, showFalse, grid, } from '../../utils/constants';

    const option = {
        grid: Object.assign({}, grid, { top: '6%', left: '140px' }),
        color: [c03FFCC,],
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 50,
            zoomLock: true,
            orient: 'vertical',
        },
        xAxis: {
            type: 'value',
            splitLine: showFalse,
            axisLine: showFalse,
            axisTick: showFalse,
        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisTick: showFalse,
            axisLine: showFalse,
            axisLabel: showFalse,
        },
        series: [{
            type: 'bar',
            barWidth: 6,
            data: [1, 2, 3, 34, 5, 66,],
            label: {
                fontSize: 12,
                show: true,
                position: ['-130px', -4],
                color: cFFFFFF,
                formatter: '{b}',
            },
        }]
    };

    export default {
        name: 'frequentApproach',
        data(){
            return {
                ladderControlMonitoringData: null,
                //  激活的面板
                activeIndex: 0,
            };
        },
        created(){
            this.ladderControlMonitoringData = ladderControlMonitoringData;
        },
        mounted(){
            const myEchart = init(document.getElementById('frequentApproach'));
            option.series[0].data = this.ladderControlMonitoringData;
            option.yAxis.data = this.ladderControlMonitoringData;
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
    
    .ladder-control-operation-ranking {
    
    }
</style>
