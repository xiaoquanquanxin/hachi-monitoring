<template>
    <div class="proportion-of-visitors-entering-the-door" data-msg="访客进门方式占比">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">访客分布量统计</div>
                <a-col :span="3" :offset="9">
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
                <a-col :span="4">
                    <span class="total-label">总数：</span>{{totalNumber}}
                </a-col>
            </a-row>
            <a-divider/>
            <div class="statistical-list-wrap">
                <a-row v-for="item in proportionOfVisitorsEnteringTheDoorData"
                       :key="item.key"
                       type="flex"
                       justify="start"
                       align="middle"
                       class="statistical-list">
                    <a-col :span="5" class="item-name">{{item.name}}</a-col>
                    <a-col :span="12" :offset="1">
                        <a-row type="flex" justify="space-around" align="middle" class="grid-list">
                            <a-col v-for="(_item,index) in item.list"
                                   v-if="!(index%2)"
                                   :key="index"
                            >
                                <div class="grid"
                                     :style="`background-color:${_item?colorTypeMap.c03FFCC:colorTypeMap.cFFFFFF}`"></div>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="space-around" align="middle" class="grid-list">
                            <a-col v-for="(_item,index) in item.list"
                                   v-if="index%2"
                                   :key="index"
                            >
                                <div class="grid"
                                     :style="`background-color:${_item?colorTypeMap.c03FFCC:colorTypeMap.cFFFFFF}`"></div>
                            </a-col>
                        </a-row>
                    </a-col>
                    <a-col :span="4" :offset="2">
                        <a-row type="flex" justify="space-between" align="middle">
                            <span class="item-num">{{item.num}}人</span>
                            <span class="item-percent">{{item.percent}}%</span>
                        </a-row>
                    </a-col>
                </a-row>
            </div>
        </a-card>
    </div>
</template>
<script>
    import { proportionOfVisitorsEnteringTheDoorData } from '../../utils/staticData';
    import { c03FFCC, c929292, cFFFFFF, cBBC0F7 } from '../../utils/constants';

    export default {
        name: 'proportionOfVisitorsEnteringTheDoor',
        computed: {
            totalNumber(){
                return this.proportionOfVisitorsEnteringTheDoorData.reduce(((prev, item) => {
                    return prev + item.num;
                }), 0);
            }
        },
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                proportionOfVisitorsEnteringTheDoorData: null,

                //  颜色关于类型的map
                colorTypeMap: {
                    cFFFFFF,
                    c03FFCC,
                },
            };
        },
        created(){
            this.proportionOfVisitorsEnteringTheDoorData = proportionOfVisitorsEnteringTheDoorData;
            const total = this.totalNumber;
            //  20个格子图
            this.proportionOfVisitorsEnteringTheDoorData.forEach(item => {
                this.calc(item, total);
            });
        },
        methods: {
            setActiveIndex(activeIndex){
                this.activeIndex = activeIndex;
            },
            calc(item, total){
                const { num } = item;
                const totalGrid = 40;
                const percent = (num / total * 100)|0;
                item.percent = percent;
                const _reception = Math.ceil(num / total * totalGrid);
                const list = new Array(40).fill(false);
                list.fill(true, 0, _reception);
                item.list = list;
            }
        }
    };
</script>
<style scoped lang="less">
    @import '~@/css/custom-tab.less';
    
    .proportion-of-visitors-entering-the-door {
        
        .statistical-list-wrap {
            height: 320px;
            
            .statistical-list {
                line-height: 3.3em;
                
                .grid-list {
                    margin-bottom: 5px;
                    
                    &:last-child {
                        margin-bottom: 0;
                    }
                    
                    .grid {
                        width: 7px;
                        height: 7px;
                    }
                }
                
                .item-name, .item-num {
                    color: var(--cB3B5B5);
                }
                
                .item-percent {
                    font-size: 16px;
                }
            }
        }
    }
</style>


