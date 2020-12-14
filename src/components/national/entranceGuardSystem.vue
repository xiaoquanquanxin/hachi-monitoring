<template>
    <div class="entrance-guard-system">
        <a-card style="width: 445px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div>门禁系统</div>
                <a-col :span="7">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'statistical-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >趋势统计
                        </div>
                        <div :class="{'statistical-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >占比统计
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <div id="swipeModeTrend"
                 data-msg="刷卡方式趋势"
                 style="height: 180px;width:100%;"
            ></div>
            <div id="swipeModePercentage"
                 data-msg="刷卡方式占比"
                 style="height: 180px;width:100%;"
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
        axisTick
    } from '../../utils/constants';

    const option = {
        title: {
            text: '刷卡方式趋势',
            textStyle: {
                color: c929292,
                fontSize: 14,
            }
        },
        legend: {
            left: 'right',
            top: 'top',
            //  可以path，自定义图图
            icon: 'rect',
            //  拒绝选择、禁止选择
            selectedMode: false,
            textStyle: {
                color: c929292,
            },
            data: ['刷脸', '刷卡', '二维码', '门禁',]
        },
        //  缩放
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 25,
            zoomLock: true,
        },
        grid,
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
            {
                name: '刷脸',
                type: 'line',
                symbol: 'none',
                //  平滑
                smooth: true,
                lineStyle: {
                    width: 1,
                    color: c03FFCC,
                },
            },
            {
                name: '刷卡',
                type: 'line',
                symbol: 'none',
                //  平滑
                smooth: true,
                lineStyle: {
                    width: 1,
                    color: cBBC0F7,
                },
            },
            {
                name: '二维码',
                type: 'line',
                symbol: 'none',
                //  平滑
                smooth: true,
                lineStyle: {
                    width: 1,
                    color: cFFFFFF,
                },
            },
            {
                name: '门禁',
                type: 'line',
                symbol: 'none',
                //  平滑
                smooth: true,
                lineStyle: {
                    width: 1,
                    color: c929292,
                },
            },
        ]
    };

    export default {
        name: 'entranceGuardSystem',
        props: ['swipeModeData'],
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
            };
        },
        created(){

        },
        mounted(){
            const myEchart = init(document.getElementById('swipeModeTrend'));
            //  console.log(JSON.parse(JSON.stringify(option.series[0].data)));
            const { xAxis, series } = option;
            const { timeList, dataList } = this.swipeModeData;
            const { faceScan, creditCard, QrCode, entranceGuard } = dataList;
            xAxis.data = timeList;
            series[0].data = faceScan;
            series[1].data = creditCard;
            series[2].data = QrCode;
            series[3].data = entranceGuard;
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
    //  选择label
    .statistical-label {
        position: relative;
        
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 30px;
            height: 4px;
            bottom: calc(-2em + 4px);
            left: 50%;
            margin-left: -15px;
        }
        
        &.active-label::after {
            background-color: var(--cFFFFFF);
        }
    }
</style>