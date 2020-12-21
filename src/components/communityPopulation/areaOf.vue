<template>
    <div class="area-of" data-msg="区域占比">
        <a-card style="width: 600px;"
                :bordered="false"
        >
            <h2 class="card-component-title">区域占比</h2>
            <a-divider/>
            <div>主要区域占比</div>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="8">
                    <div id="proportionOMajorRegionsPie"
                         data-msg="主要区域占比饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="16">
                    <div id="proportionOMajorRegionsBar"
                         data-msg="主要区域占比条形图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { proportionOMajorRegionsData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        c929292,
        cFFFFFF,
        c25292E,
        c095B55,
        c4D4D4D,
        c373A3E,
        showFalse,
        grid,
    } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总计',
            subtextStyle: {
                color: c929292,
            },
            left: 'center',
            top: '68px',
        },
        color: [],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['74%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c25292E,
                }
            }
        ]
    };
    const option1 = {
        grid: Object.assign({}, grid, { top: '6%', left: '90px', right: '8%' }),
        xAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: c373A3E,
                }
            },
            axisLine: showFalse,
            axisTick: showFalse,
        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisTick: showFalse,
            axisLine: showFalse,
            axisLabel: {
                fontSize: 12,
                lineHeight: 24,
                color: cFFFFFF,
                margin: 15,
                formatter: (value) => {
                    console.log(value);
                    return value;
                }
            },
        },
        color: [c03FFCC],
        series: [{
            type: 'bar',
            barWidth: 10,
            label: {
                fontSize: 12,
                show: true,
                position: ['-80px', 0],
                color: c929292,
                formatter: '{b}',
            },
        }]
    };

    export default {
        name: 'areaOf',
        computed: {
            //  总金额
            totalAmount(){
                return this.proportionOMajorRegionsData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                proportionOMajorRegionsData: null,
            };
        },
        created(){
            this.proportionOMajorRegionsData = proportionOMajorRegionsData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c095B55, c929292, c4D4D4D];
            const totalAmount = this.totalAmount;
            this.proportionOMajorRegionsData.forEach((item, index) => {
                item.color = colorList[index];
                item.itemStyle = item.itemStyle || {};
                item.label = item.label || {};
                item.label.color = c929292;
                item.itemStyle.color = item.color;
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOMajorRegionsPie'));
            option.series[0].data = this.proportionOMajorRegionsData;
            option.color = this.proportionOMajorRegionsData.map(item => item.color);
            option.title.text = this.totalAmount;
            myEchart.setOption(option);

            const myEchart1 = init(document.getElementById('proportionOMajorRegionsBar'));
            option1.series[0].data = this.proportionOMajorRegionsData;
            option1.yAxis.data = this.proportionOMajorRegionsData;
            //  console.log(JSON.parse(JSON.stringify(this.proportionOMajorRegionsData)));
            myEchart1.setOption(option1);
        },
    };
</script>
<style scoped lang="less">
    .area-of {
    
    }
</style>