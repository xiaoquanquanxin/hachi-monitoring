<template>
    <div class="percentage-of-receivables" data-msg="应收实收占比">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">应收实收占比</div>
                <a-col :span="5">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div v-for="(item,index) in tabList"
                             :key="item.key"
                             :class="{'custom-label':true,'active-label':activeIndex===index}"
                             @click="setActiveIndex(index)"
                        >{{item.name}}
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <div id="percentageOfReceivables"
                 data-msg="应收实收占比条形图"
                 style="height: 340px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { percentageOfReceivablesData } from '../../utils/staticData';
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
        name: 'percentageOfReceivables',
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                tabList: [{ key: 1, name: '日' }, { key: 2, name: '月', }, { key: 3, name: '季' }, { key: 4, name: '年' }],
                percentageOfReceivablesData: null,
            };
        },
        created(){
            this.percentageOfReceivablesData = percentageOfReceivablesData;
        },
        mounted(){
            const myEchart = init(document.getElementById('percentageOfReceivables'));
            option.dataset.source = this.percentageOfReceivablesData;
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
    
    .percentage-of-receivables {
    
    }
</style>


