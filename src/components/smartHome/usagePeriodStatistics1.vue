<template>
    <div class="usage-period-statistics" data-msg="使用时段统计">
        <a-card style="width: 1220px"
                :bordered="false">
            <h2 class="card-component-title">使用时段统计</h2>
            <a-divider/>
            <div id="usagePeriodStatistics"
                 data-msg="控制方式"
                 style="height: 350px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import {
        c03FFCC,
        cFFFFFF,
        cBBC0F7,
        c929292,
    } from '../../utils/constants';
    import {
        grid,
        yAxis,
        axisLine,
        axisLabel,
        axisTick,
        lineSeriesConfig,
    } from '../../utils/constants';
    import { usagePeriodStatisticsData } from '../../utils/staticData';

    const styleList = [
        {
            name: '4寸控屏',
            color: c03FFCC,
        },
        {
            name: '室内机终端机',
            color: c03FFCC,
        },
        {
            name: '灯控开关',
            color: c03FFCC,
        },
        {
            name: '情景面板',
            color: c03FFCC,
        },
        {
            name: '窗帘面板',
            color: c03FFCC,
        },
        {
            name: '中央空调控制器',
            color: c03FFCC,
        },
        {
            name: '可视门铃',
            color: c03FFCC,
        },
    ];

    const option = {
        //  缩放
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 65,
            zoomLock: true,
        },
        //  鼠标敷在上面就会出现明细、详情的工具
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#111111',
            borderWidth: 0,
        },
        grid: Object.assign({}, grid, { top: '12%' }),
        yAxis,
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine,
            axisLabel,
            axisTick,
        },
//        color: [c03FFCC, cBBC0F7, cFFFFFF, c929292],
        series: [
            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
//            JSON.parse(JSON.stringify(lineSeriesConfig)),
        ]
    };
    export default {
        name: 'usagePeriodStatistics',
        mounted(){
            styleList.forEach((item, index) => {
//                this.calcStyle(item, option.series[index]);
            });

            const myEchart = init(document.getElementById('usagePeriodStatistics'));
            const { xAxis, series } = option;
            const {
                timeList,
                touchscreen,
                indoorTerminal,
                lightSwitch,
                scenePanel,
                curtainPanel,
                centralAirConditioningController,
                visualDoorbell,
            } = usagePeriodStatisticsData;
//            xAxis.data = timeList;
//            series[0].data = touchscreen;
//            series[1].data = indoorTerminal;
//            series[2].data = lightSwitch;
//            series[3].data = scenePanel;
//            series[4].data = curtainPanel;
//            series[5].data = centralAirConditioningController;
//            series[6].data = visualDoorbell;
            console.log(series);
            myEchart.setOption(option);
        },
        methods: {
            calcStyle(item, styleData){
                const { name, color } = item;
                styleData.name = name;
                styleData.lineStyle.color = color;
                styleData.areaStyle.color.colorStops[0] = {
//                    offset: 0,
                    color: color,
                };
            }
        }
    };
</script>
<style scoped lang="less">
    .usage-period-statistics {
    
    }
</style>
touchscreen,
indoorTerminal,
lightSwitch,
scenePanel,
curtainPanel,
centralAirConditioningController,
visualDoorbell,

