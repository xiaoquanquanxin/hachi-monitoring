<template>
    <div class="yards-ystem">
        <a-card style="width: 445px"
                :bordered="false">
            <p class="card-component-title">车场系统</p>
            <a-divider/>
            <p>车位情况占比</p>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="10">
                    <div id="fixedCar"
                         data-msg="固定车"
                         style="height: 110px;"
                    ></div>
                    <div id="temporaryCar"
                         data-msg="临时车"
                         style="height: 110px;"
                    ></div>
                </a-col>
                <a-col :span="14">
                    <div v-for="item in seatList"
                         :key="item.key"
                         class="list-item">
                        <a-row type="flex" justify="space-between" align="middle">
                            <div>{{item.name}}</div>
                            <div>{{item.value}}</div>
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c4D4D4D } from '../../utils/constants';

    const option1 = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '24px',
            },
            subtext: null,
            subtextStyle: {
                color: c929292,
            },
            left: 'right',
            top: '26%',
            textAlign: 'center'
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '66%'],
                avoidLabelOverlap: false,
                label: {
                    position: 'center',
                    color: cFFFFFF,
                    formatter: '{d}%',
                },
                center: ['30%', '50%']
            }
        ]
    };
    const option2 = JSON.parse(JSON.stringify(option1));
    export default {
        name: 'yardSystem',
        props: ['proportionOfParkingSpacesData'],
        data(){
            return {
                seatList: [],
            };
        },
        mounted(){
            const myEchart1 = init(document.getElementById('fixedCar'));
            const myEchart2 = init(document.getElementById('temporaryCar'));
            const {
                //  固定车
                fixedCar,
                //  临时车
                temporaryCar,
                //  车场数
                numberOfYard,
                //  总车位
                totalNumber,
                //  空车位
                emptyCar,
                //  进场数
                inputNumber,
                //  出场数
                outputNumber,
                //  黑名单
                blacklist,
            } = this.proportionOfParkingSpacesData;
            //  固定车
            option1.title.subtext = '固定车';
            option1.color = [c03FFCC, c4D4D4D];
            option1.title.text = fixedCar;
            option1.series[0].data = [
                { name: '固定车', value: fixedCar, },
                { name: '临时车', value: temporaryCar, },
            ];
            myEchart1.setOption(option1);

            //  临时车
            option2.title.subtext = '临时车';
            option2.color = [c929292, c4D4D4D];
            option2.title.text = temporaryCar;
            option2.series[0].data = [
                { name: '临时车', value: temporaryCar, },
                { name: '固定车', value: fixedCar, },
            ];
            myEchart2.setOption(option2);

            //  右侧座位列表
            this.seatList.push({ key: 1, value: numberOfYard, name: '车场数', });
            this.seatList.push({ key: 2, value: totalNumber, name: '总车位', });
            this.seatList.push({ key: 3, value: emptyCar, name: '空车位', });
            this.seatList.push({ key: 4, value: `${inputNumber}/${outputNumber}`, name: '进/出场数', });
            this.seatList.push({ key: 5, value: blacklist, name: '黑名单', });
        }
    };
</script>
<style scoped lang="less">
    .list-item {
        line-height: 3em;
        border-bottom: 1px solid var(--border-color-split);
        
        &:last-child {
            border-bottom: none;
        }
    }
</style>
