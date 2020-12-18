<template>
    <div class="proportion-of-building-payment" data-msg="楼栋缴费占比">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">楼栋缴费占比</div>
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
            <div id="proportionOfBuildingPayment"
                 data-msg="楼栋缴费占比条形图"
                 style="height: 340px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c25292E, c095B55, grid, cBBC0F7, yAxis } from '../../utils/constants';
    import { proportionOfBuildingPaymentData } from '../../utils/staticData';

    const option = {
        grid,
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 30,
            zoomLock: true,
        },
        legend: {
            left: 'right',
            top: 'top',
            //  可以path，自定义图图
            icon: 'rect',
            //  拒绝选择、禁止选择
            selectedMode: false,
            textStyle: {
                color: cFFFFFF,
            },
            data: [{
                name: '应缴费',
            }, {
                name: '已缴费',
            }]
        },
        xAxis: [
            {
                type: 'category',
            }
        ],
        yAxis: [
            yAxis,
        ],
        color: [c03FFCC, cBBC0F7,],
        series: [
            {
                animation: false,
                name: '应缴费',
                type: 'bar',
                stack: 'a',
                barWidth: 20,
            },
            {
                animation: false,
                name: '已缴费',
                type: 'bar',
                stack: 'a',
                barWidth: 20,
            },
        ]
    };

    //  楼栋缴费占比
    export default {
        name: 'proportionOfBuildingPayment',
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                tabList: [{ key: 1, name: '日' }, { key: 2, name: '月', }, { key: 3, name: '季' }, { key: 4, name: '年' }],
                //  x轴
                buildingList: null,
                //  应缴费
                shouldPayCostList: null,
                //  已缴费
                alreadyPayCostList: null,
            };
        },
        created(){
            const { buildingList, shouldPayCostList, alreadyPayCostList } = proportionOfBuildingPaymentData;
            this.buildingList = buildingList;
            this.shouldPayCostList = shouldPayCostList;
            this.alreadyPayCostList = alreadyPayCostList;
        },
        mounted(){
            option.xAxis[0].data = this.buildingList;
            option.series[0].data = this.shouldPayCostList;
            option.series[1].data = this.alreadyPayCostList;
            const myEchart = init(document.getElementById('proportionOfBuildingPayment'));
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
    
    .proportion-of-building-payment {
    }
</style>


