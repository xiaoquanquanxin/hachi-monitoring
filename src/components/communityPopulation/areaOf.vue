<template>
    <div class="area-of" data-msg="区域占比">
        <a-card style="width: 600px;"
                :bordered="false"
        >
            <h2 class="card-component-title">区域占比</h2>
            <a-divider/>
            <div>主要区域占比</div>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="10">
                    <div id="proportionOMajorRegionsPie"
                         data-msg="主要区域占比饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="14">
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
    import { c03FFCC, c929292, cFFFFFF, c25292E, c095B55, c4D4D4D } from '../../utils/constants';

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
        color: ['#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',],
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
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOMajorRegionsPie'));
            option.series[0].data = this.proportionOMajorRegionsData;
            option.color = this.proportionOMajorRegionsData.map(item => item.color);
            console.log(option.color);
            option.title.text = this.totalAmount;
            myEchart.setOption(option);
        },
    };
</script>
<style scoped lang="less">
    .area-of {
    
    }
</style>