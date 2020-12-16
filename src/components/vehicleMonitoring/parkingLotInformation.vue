<template>
    <div class="parking-lot-information" data-msg="停车场信息">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">停车场信息</div>
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
            <a-row type="flex" justify="space-between" align="middle" class="information-main">
                <a-col :span="9">
                    <a-row type="flex" justify="center" align="middle" class="information-label">
                        <div>
                            <b class="total-charge-amount">{{parkingLotInformationData.totalChargeAmount}}</b><span>元</span>
                            <a-row type="flex" justify="center" align="middle">
                                <div>总收费金额</div>
                            </a-row>
                        </div>
                    </a-row>
                </a-col>
                <a-col :span="15">
                    <a-row type="flex" justify="space-between" align="middle">
                        <a-col :span="8">
                            <a-row type="flex" justify="center" align="middle" class="information-mark">
                                <div>
                                    <a-row type="flex" justify="center" align="middle">
                                        <a-icon type="car" class="information-icon"/>
                                    </a-row>
                                    <span>临停车</span>
                                </div>
                            </a-row>
                        </a-col>
                        <a-col :span="16">
                            <a-row type="flex" justify="space-between" align="middle" class="information-item">
                                <span>车位数</span>
                                <div>
                                    <span>{{parkingLotInformationData.parkingSpacesAmount}}</span>
                                    <span>元</span>
                                </div>
                            </a-row>
                            <a-row type="flex" justify="space-between" align="middle" class="information-item">
                                <span>收费金额</span>
                                <div>
                                    <span>{{parkingLotInformationData.chargeAmount}}</span>
                                    <span>元</span>
                                </div>
                            </a-row>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="10">
                    <div id="parkingLotInformation"
                         data-msg="停车场信息饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="14" class="list">
                    <div v-for="item in parkingLotInformationData.list"
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
                            <a-col :span="9">
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
    import { parkingLotInformationData } from '../../utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c25292E, } from '../../utils/constants';

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
    export default {
        name: 'parkingLotInformationData',
        data(){
            return {
                parkingLotInformationData: null,
                //  激活的面板
                activeIndex: 0,
            };
        },
        computed: {
            //  总人数
            totalAmount(){
                return this.parkingLotInformationData.list.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        created(){
            this.parkingLotInformationData = parkingLotInformationData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            const totalAmount = this.totalAmount;
            this.parkingLotInformationData.list.forEach((item, index) => {
                item.color = colorList[index];
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const { totalChargeAmount, parkingSpacesAmount, chargeAmount, list } = this.parkingLotInformationData;
            const myEchart = init(document.getElementById('parkingLotInformation'));
            option.series[0].data = list;
            option.color = list.map(item => item.color);
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
    
    .parking-lot-information {
        //  主要信息
        .information-main {
            background-color: #2D3136;
            margin-bottom: 2em;
            
            .information-label {
                height: 100px;
                background-color: var(--border-color-split);
                
                //  总收费金额
                .total-charge-amount {
                    font-size: 32px;
                    color: var(--c03FFCC);
                }
            }
            
            //  临停车 标志
            .information-mark {
                width: 80px;
                height: 80px;
                margin-left: 3em;
                border-radius: 10px;
                background-color: var(--border-color-split);
                //  汽车图标
                .information-icon {
                    font-size: 26px;
                }
            }
            
            .information-item {
                line-height: 3em;
                border-bottom: 1px solid var(--border-color-split);
                margin: 0 1.4em;
                
                &:last-child {
                    border-bottom: none;
                }
            }
        }
        
        .information-chart {
            margin: 1em 0;
            
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
        
        
    }
</style>