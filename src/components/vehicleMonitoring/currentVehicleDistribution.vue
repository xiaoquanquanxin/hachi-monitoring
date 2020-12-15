<template>
    <div class="current-vehicle-distribution" data-msg="当前车辆类型">
        <a-card style="width: 296px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">当前车辆分布</div>
                <a-select default-value="1" :bordered="false" @change="handleChangeFn">
                    <a-icon class="suffix-icon" type="caret-down" slot="suffixIcon"/>
                    <a-select-option value="1">今日</a-select-option>
                    <a-select-option value="2">昨日</a-select-option>
                    <a-select-option value="3">本周</a-select-option>
                </a-select>
                <a-divider/>
            </a-row>
            <div id="currentVehicleDistribution"
                 data-msg="当前车辆分布"
                 style="height: 160px;"
            ></div>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col v-for="item in currentVehicleDistributionData"
                       :key="item.key"
                       class="distribution-item"
                       :style="`color:${item.color}`"
                       :span="24 / currentVehicleDistributionData.length"
                >
                    <a-col class="item-name" :span="16">
                        <a-row type="flex" justify="space-between" align="middle">
                            <div class="legend" :style="`backgroundColor:${item.color}`"></div>
                            <span>{{item.name}}</span>
                        </a-row>
                    </a-col>
                    <div class="item-percent">{{(item.percent*100).toFixed(0)}}%</div>
                    <div class="item-value">{{item.value}}</div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { currentVehicleDistributionData } from '@/utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c2D3237, showFalse, } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总车辆',
            subtextStyle: {
                color: c929292,
            },
            left: 'center',
            top: '68px',
        },
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                //  仪表盘的位置
                center: ['50%', '78%'],
                //  保留
                axisLine: {
                    lineStyle: {}
                },
                radius: '135%',
                axisTick: showFalse,
                splitLine: showFalse,
                axisLabel: showFalse,
                pointer: showFalse,
                detail: showFalse,
            }
        ]
    };

    export default {
        name: 'currentVehicleDistribution',
        computed: {
            //  总人数
            totalVehicle(){
                return this.currentVehicleDistributionData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                currentVehicleDistributionData: null,
            };
        },
        created(){
            this.currentVehicleDistributionData = currentVehicleDistributionData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            this.currentVehicleDistributionData.forEach((item, index) => {
                item.color = colorList[index];
            });
            //  计算百分比
            this.currentVehicleDistributionData.forEach(item => {
                item.percent = (item.value / this.totalVehicle).toFixed(2);
            });
            //  计算角度的累计值
            this.currentVehicleDistributionData.reduce(((prev, current) => {
                return current.sumPercent = prev + +current.percent;
            }), 0);
        },
        mounted(){
            const myEchart = init(document.getElementById('currentVehicleDistribution'));
            option.color = this.currentVehicleDistributionData.map(item => item.color);
            //  设置半圆样式
            option.series[0].axisLine.lineStyle.color = this.currentVehicleDistributionData.map((item, index) => {
                return [item.sumPercent, item.color];
            });
            option.title.text = this.totalVehicle;
            myEchart.setOption(option);
        },
        methods: {
            handleChangeFn(){

            }
        }
    };
</script>
<style scoped lang="less">
    .current-vehicle-distribution {
        //  文字说明详情
        .distribution-item {
            padding: .55em 1.2em;
            border-right: 1px solid var(--border-color-split);
            
            &:last-child {
                border-right: none;
            }
            
            .item-name {
                font-size: 12px;
            }
            
            .item-percent {
                font-size: 32px;
            }
            
            .item-value {
                font-size: 1.2em;
            }
        }
    }
</style>
