<template>
    <div class="control-mode" data-msg="控制方式">
        <a-card style="width: 600px"
                :bordered="false">
            <h2 class="card-component-title">控制方式</h2>
            <a-divider/>
            <div id="controlMode"
                 data-msg="控制方式"
                 style="height: 308px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, cFFFFFF, cCCCCCC, c25292E, c373A3E, c929292 } from '@/utils/constants';
    import { controlModeData } from '../../utils/staticData';

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
                    formatter(item){
                        const { percent, name, value } = item;
                        return `{per|${percent|0}%}\n{name|${name}}\t{num|${value}}`;
                    },
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
    //  控制方式
    export default {
        name: 'controlMode',
        created(){
            this.controlModeData = controlModeData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            this.controlModeData.forEach((item, index) => {
                item.color = colorList[index];
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('controlMode'));
            option.series[0].data = this.controlModeData;
            option.color = this.controlModeData.map(item => item.color);
            //  console.log(JSON.parse(JSON.stringify(option.series[0].data)));
            option.title.text = this.controlModeData.reduce((prev, current) => {
                return prev + current.value;
            }, 0);
            myEchart.setOption(option);
        },
    };
</script>
<style scoped lang="less">
    .control-mode {
    
    }
</style>