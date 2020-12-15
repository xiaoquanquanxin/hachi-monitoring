<template>
    <div class="statistics-of-opening-times" data-msg="开门次数统计">
        <a-card style="width: 1220px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div>开门次数统计</div>
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
            <div id="statisticsOfOpeningTimes"
                 data-msg="开门次数统计"
                 style="height: 360px;"
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
        c262a2e,
    } from '../../utils/constants';
    import {
        grid,
        yAxis,
        axisLine,
        axisLabel,
        axisTick,
        areaStyle,
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
        color: [c03FFCC, cBBC0F7, cFFFFFF, c929292],
        series: [
            JSON.parse(JSON.stringify(lineSeriesConfig)),
            JSON.parse(JSON.stringify(lineSeriesConfig)),
            JSON.parse(JSON.stringify(lineSeriesConfig)),
        ]
    };
    export default {
        name: 'statisticsOfOpeningTimes',
        props: ['statisticsOfOpeningTimesData'],
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
            };
        },
        mounted(){
            const data0 = option.series[0];
            data0.name = '刷脸';
            data0.lineStyle.color = c03FFCC;
            data0.areaStyle.color.colorStops[0] = {
                offset: 0, color: c03FFCC,
            };

            const data1 = option.series[1];
            data1.name = '刷卡';
            data1.lineStyle.color = cBBC0F7;
            data1.areaStyle.color.colorStops[0] = {
                offset: 0, color: cBBC0F7,
            };

            const data2 = option.series[2];
            data2.name = '密码';
            data2.lineStyle.color = c929292;
            data2.areaStyle.color.colorStops[0] = {
                offset: 0, color: c929292,
            };

            const myEchart = init(document.getElementById('statisticsOfOpeningTimes'));
            const { xAxis, series } = option;
            const { timeList, faceScan, creditCard, password } = this.statisticsOfOpeningTimesData;
            xAxis.data = timeList;
            series[0].data = faceScan;
            series[1].data = creditCard;
            series[2].data = password;
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
    
    .statistics-of-opening-times {
    
    }
</style>
