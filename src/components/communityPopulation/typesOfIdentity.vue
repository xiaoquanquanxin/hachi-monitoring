<template>
    <div class="types-of-identity" data-msg="身份类型">
        <a-card style="width: 600px"
                :bordered="false">
            <div class="card-component-title">身份类型</div>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="10">
                    <div id="typesOfIdentity"
                         data-msg="身份类型饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="14" class="list">
                    <div v-for="item in typesOfIdentityData"
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
    import { typesOfIdentityData } from '../../utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c25292E, c095B55 } from '../../utils/constants';

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
    export default {
        name: 'typesOfIdentity',
        data(){
            return {
                typesOfIdentityData: null
            };
        },
        computed: {
            //  总金额
            totalAmount(){
                return this.typesOfIdentityData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        created(){
            this.typesOfIdentityData = typesOfIdentityData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c095B55, c929292];
            const totalAmount = this.totalAmount;
            this.typesOfIdentityData.forEach((item, index) => {
                item.color = colorList[index];
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('typesOfIdentity'));
            option.series[0].data = this.typesOfIdentityData;
            option.color = this.typesOfIdentityData.map(item => item.color);
            option.title.text = this.totalAmount;
            myEchart.setOption(option);
        },
    };
</script>
<style scoped lang="less">
    .types-of-identity {
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