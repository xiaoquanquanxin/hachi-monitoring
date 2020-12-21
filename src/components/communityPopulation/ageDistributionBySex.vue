<template>
    <div class="age-distribution-by-sex" data-msg="年龄段性别分布">
        <a-card style="width: 600px; padding: 1em 0"
                :bordered="false"
        >
            <h2 class="card-component-title">年龄段性别分布</h2>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="11">
                    <div id="famaleList"
                         data-msg="女性列表"
                         style="height: 320px;"
                    ></div>
                </a-col>
                <a-col :span="3">
                    <ul class="list">
                        <li>70岁以上</li>
                        <li>50-70岁</li>
                        <li>30-50岁</li>
                        <li>18-30岁</li>
                        <li>10-18岁</li>
                        <li>10岁及以下</li>
                    </ul>
                </a-col>
                <a-col :span="10">
                    <div id="maleList"
                         data-msg="男性列表"
                         style="height: 320px;"
                    ></div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, c373A3E, cE56B6B, showFalse, grid, } from '../../utils/constants';
    import { ageDistributionBySexData } from '../../utils/staticData';

    const option = {
        grid: Object.assign({}, grid, { top: '6%', left: '5%', right: '5%' }),
        xAxis: {
            inverse: true,
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
            axisLabel: showFalse,
        },
        color: [cE56B6B],
        series: [{
            type: 'bar',
            barWidth: 10,
        }]
    };
    const option1 = JSON.parse(JSON.stringify(option));
    option1.xAxis.inverse = false;
    option1.color = [c03FFCC];

    export default {
        name: 'ageDistributionBySex',
        data(){
            return {
                //  男性列表
                maleList: [],
                //  女性列表
                famaleList: []
            };
        },
        created(){
            ageDistributionBySexData.forEach(item => {
                const { key, male, famale, name } = item;
                this.maleList.push({
                    key,
                    name,
                    value: male,
                });
                this.famaleList.push({
                    key,
                    name,
                    value: famale,
                });
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('famaleList'));
            option.series[0].data = this.famaleList;
            option.yAxis.data = this.famaleList;
            myEchart.setOption(option);

            const myEchart1 = init(document.getElementById('maleList'));
            option1.series[0].data = this.maleList;
            option1.yAxis.data = this.maleList;
            myEchart1.setOption(option1);
        }
    };
</script>
<style scoped lang="less">
    .age-distribution-by-sex {
        .list {
            padding-top: .6em;
            font-size: 12px;
            line-height: 3.94em;
            text-align: center;
        }
    }
</style>