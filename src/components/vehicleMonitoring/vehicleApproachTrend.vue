<template>
    <div class="vehicle-approach-trend" data-msg="车辆进场趋势">
        <a-card style="width: 1220px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">开门次数统计</div>
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
            <div id="vehicleApproachTrend"
                 data-msg="车辆进场趋势"
                 style="height: 350px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { vehicleApproachTrendData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        c4565B0,
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
        color: [c03FFCC, c4565B0],
        series: [
            JSON.parse(JSON.stringify(lineSeriesConfig)),
            JSON.parse(JSON.stringify(lineSeriesConfig)),
        ]
    };
    export default {
        name: 'vehicleApproachTrend',
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                vehicleApproachTrendData: null,
            };
        },
        created(){
            this.vehicleApproachTrendData = vehicleApproachTrendData;
        },
        mounted(){
            const myEchart = init(document.getElementById('vehicleApproachTrend'));
            const { xAxis } = option;
            const { timeList, approachNumber, averageNumber } = this.vehicleApproachTrendData;
            xAxis.data = timeList;
            const data0 = option.series[0];
            data0.name = '进场次数';
            data0.lineStyle.color = c03FFCC;
            data0.areaStyle.color.colorStops[0] = {
                offset: 0,
                color: c03FFCC,
            };
            data0.data = approachNumber;

            const data1 = option.series[1];
            data1.name = '平均值';
            data1.lineStyle.color = c4565B0;
            data1.lineStyle.type = 'dashed';
            data1.areaStyle.color.colorStops[0] = {
                offset: 0,
                color: c4565B0,
            };
            data1.data = averageNumber;
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
    
    .vehicle-approach-trend {
    
    }
</style>
