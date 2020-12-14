<template>
    <div class="property-pay-cost">
        <a-card style="width: 445px"
                :bordered="false"
        >
            <p>物业缴费</p>
            <a-divider/>
            <a-row>
                <a-col
                        id="propertyPaymentStatistics"
                        data-msg="物业缴费情况统计"
                        style="height: 200px;"
                ></a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import {
        c03FFCC,
        c929292,
        cBBC0F7,
        axisLine,
        axisLabel,
        axisTick,
        yAxis,
        grid,
    } from '../../utils/constants';

    import { init } from 'echarts';

    const typeMap = {
        paidIn: c03FFCC,
        accountsReceivable: cBBC0F7,
    };
    const nameMap = {
        paidIn: '实收',
        accountsReceivable: '应收',
    };

    const option = {
        legend: {
            left: 'right',
            top: 'top',
            //  可以path，自定义图图
            icon: 'rect',
            //  拒绝选择、禁止选择
            selectedMode: false,
            data: [{
                name: nameMap.paidIn,
                textStyle: {
                    color: typeMap.paidIn
                }
            }, {
                name: nameMap.accountsReceivable,
                textStyle: {
                    color: typeMap.accountsReceivable
                }
            }]
        },
        title: {
            text: '物业缴费情况统计',
            textStyle: {
                color: c929292,
                fontSize: 14,
            }
        },
        dataset: {
            dimensions: ['name', 'paidIn', 'accountsReceivable'],
        },
        //  缩放
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 60,
            zoomLock: true,
        },
        xAxis: {
            type: 'category',
            axisLine,
            axisLabel,
            axisTick,
        },
        grid,
        yAxis,
        color: [c03FFCC, cBBC0F7],
        series: [
            {
                name: '实收',
                type: 'bar',
                barMaxWidth: 8,
                itemStyle: {
                    //  条柱圆角
                    barBorderRadius: [2, 2, 0, 0],
                }
            },
            {
                name: '应收',
                type: 'bar',
                barMaxWidth: 8,
                itemStyle: {
                    //  条柱圆角
                    barBorderRadius: [2, 2, 0, 0],
                }
            },
        ]
    };

    export default {
        name: 'propertyPayCost',
        props: ['propertyPayCostData'],
        data(){
            return {};
        },
        mounted(){
            const myEchart = init(document.getElementById('propertyPaymentStatistics'));
            option.dataset.source = this.propertyPayCostData;
            myEchart.setOption(option);
        }
    };
</script>
<style scoped lang="less">
</style>
