<template>
    <div class="proportion-of-operating-income"
         :data-msg="typeMap[type].name"
    >
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">{{typeMap[type].name}}</div>
                <a-col :span="3">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'custom-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >今日
                        </div>
                        <div :class="{'custom-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >7日
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="10">
                    <div :id="`proportionOfOperatingIncome_${type}`"
                         data-msg="营业收入占比饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="14" class="list">
                    <div v-for="item in proportionOfOperatingIncomeData"
                         :key="item.key"
                         align="middle"
                         class="list-item"
                    >
                        <a-row type="flex" justify="space-between" align="middle">
                            <a-col :span="6" class="list-item-label">
                                <a-row type="flex" justify="start" align="middle">
                                    <div class="legend" :style="`backgroundColor:${item.color}`"></div>
                                    <a-col :span="20">{{item.name}}</a-col>
                                </a-row>
                            </a-col>
                            <a-col :span="10">
                                <a-row type="flex" justify="space-between" align="middle">
                                    <a-col :span="13">
                                        <a-row type="flex" justify="space-between" align="middle">
                                            <b class="item-value">{{item.value}}</b><span>元</span>
                                        </a-row>
                                    </a-col>
                                    <b class="item-percent">{{item.percent}}%</b>
                                </a-row>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { proportionOfOperatingIncomeData } from '../../utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c25292E, c095B55 } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总计/元',
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

    const typeMap = {
        1: { name: '营业收入占比', pieId: 'proportionOfOperatingIncome_1' },
        2: { name: '欠费情况占比', pieId: 'proportionOfOperatingIncome_2' },
    };
    export default {
        name: 'proportionOfOperatingIncome',
        props: ['type'],
        computed: {
            //  总金额
            totalAmount(){
                return this.proportionOfOperatingIncomeData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                proportionOfOperatingIncomeData: null,
                typeMap,
                //  激活的面板
                activeIndex: 0,
            };
        },
        created(){
            this.proportionOfOperatingIncomeData = proportionOfOperatingIncomeData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c095B55, c929292];
            const totalAmount = this.totalAmount;
            this.proportionOfOperatingIncomeData.forEach((item, index) => {
                item.color = colorList[index];
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById(this.typeMap[this.type].pieId));
            option.series[0].data = this.proportionOfOperatingIncomeData;
            option.color = this.proportionOfOperatingIncomeData.map(item => item.color);
            option.title.text = this.totalAmount;
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
    
    .proportion-of-operating-income {
        .list-item {
            line-height: 3em;
            border-bottom: 1px solid var(--border-color-split);
            
            &:last-child {
                border-bottom: none;
            }
            
            .list-item-label {
            
            }
            
            .item-value, .item-percent {
                font-size: 1.2em;
            }
        }
    }
</style>


