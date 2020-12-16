<template>
    <div class="proportion-of-opening-mode" data-msg="开门方式占比">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div>开门方式占比</div>
                <a-select default-value="1" :bordered="false" @change="handleChangeFn">
                    <a-icon class="suffix-icon" type="caret-down" slot="suffixIcon"/>
                    <a-select-option value="1">今日</a-select-option>
                    <a-select-option value="2">昨日</a-select-option>
                    <a-select-option value="3">本周</a-select-option>
                </a-select>
            </a-row>
            <a-divider/>
            <div id="proportionOfOpeningMode"
                 data-msg="开门方式占比"
                 style="height: 280px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, cFFFFFF, cCCCCCC, c25292E, c373A3E, c929292 } from '@/utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '24px',
            },
            subtext: '总计',
            subtextStyle: {
                color: c929292,
            },
            left: '49%',
            top: '42%',
            textAlign: 'center'
        },
        series: [
            {
                type: 'pie',
                radius: ['80%', '100%'],
                avoidLabelOverlap: false,
                top: '6%',
                bottom: '12%',
                left: 'center',
                label: {
                    show: true,
                    color: cFFFFFF,
                    formatter: '{per|{d}%}\n{name|{b}}{num|{c}}',
                    rich: {
                        per: {
                            color: cFFFFFF,
                            lineHeight: 24,
                            verticalAlign: 'top',
                        },
                        name: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },
                        num: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },

                    },
                    //  文字与 线 之间的距离。
                    distanceToLabelLine: -32,
                },
                labelLine: {
                    length: 16,
                    length2: 64,
                    lineStyle: {
                        color: c373A3E,
                    }
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c25292E,
                },
            }
        ]
    };
    export default {
        name: 'proportionOfOpeningMode',
        props: ['proportionOfOpeningModeData'],
        data(){
            return {};
        },
        created(){
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            this.proportionOfOpeningModeData.forEach((item, index) => {
                item.color = colorList[index];
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOfOpeningMode'));
            option.series[0].data = this.proportionOfOpeningModeData;
            option.color = this.proportionOfOpeningModeData.map(item => item.color);
            //  console.log(JSON.parse(JSON.stringify(option.series[0].data)));
            option.title.text = this.proportionOfOpeningModeData.reduce((prev, current) => {
                return prev + current.value;
            }, 0);
            myEchart.setOption(option);
        },
        methods: {
            handleChangeFn(val){

            }
        }
    };
</script>
<style scoped lang="less">
    .proportion-of-opening-mode {
    
    }
</style>
