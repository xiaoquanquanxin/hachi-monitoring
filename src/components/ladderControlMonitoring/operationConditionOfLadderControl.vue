<template>
    <div data-msg="梯控运行情况" class="operation-condition-of-ladder-control">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="start" align="middle">
                <a-col>
                    <div class="card-component-title">梯控运行情况</div>
                </a-col>
                <a-col :offset="1">
                    <div class="situation-label" style="color:var(--c03FFCC)">空闲</div>
                </a-col>
                <a-col :offset="1">
                    <div class="situation-label" style="color:var(--cBBC0F7)">忙碌</div>
                </a-col>
                <a-col :offset="1">
                    <div class="situation-label" style="color:var(--cE56B6B)">故障</div>
                </a-col>
            </a-row>
            <a-divider/>
            <a-carousel :dots="true">
                <div v-for="item in operationConditionOfLadderControlData"
                     :key="item.key"
                >
                    <a-row type="flex" justify="start" align="middle"
                           class="situation-list"
                    >
                        <a-col v-for="(_item,index) in item"
                               :key="_item.key"
                               :span="5"
                               :offset="index===0?0:1"
                               class="situation-item"
                        >
                            <div class="situation-building">{{_item.building}}</div>
                            <div v-for="__item in _item.list"
                                 :key="__item.key"
                                 class="situation-content"
                            >
                                <a-icon type="home"
                                        :style="`color:var(${colorMap[__item.type]});fontSize:36px;line-height:90px;`"
                                />
                                <div class="situation-unit">
                                    {{__item.unit}}&emsp;{{__item.elevator}}
                                </div>
                                <div>运行次数 <span>{{__item.count}}</span></div>
                            </div>
                            <br><br>
                        </a-col>
                    </a-row>
                </div>
            </a-carousel>
        </a-card>
    </div>
</template>
<script>
    import { operationConditionOfLadderControlData } from '../../utils/staticData';

    export default {
        name: 'operationConditionOfLadderControl',
        data(){
            return {
                colorMap: {
                    1: '--c03FFCC',
                    2: '--cBBC0F7',
                    3: '--cE56B6B',
                },
                operationConditionOfLadderControlData: null,
            };
        },
        created(){
            this.operationConditionOfLadderControlData = operationConditionOfLadderControlData;
        },

    };
</script>
<style scoped lang="less">
    .operation-condition-of-ladder-control {
        //  小标签
        .situation-label {
            font-size: 12px;
            
            &::before {
                display: inline-block;
                content: '•';
                font-size: 2em;
                vertical-align: sub;
                margin-right: .2em;
            }
        }
        
        //  走马灯
        .ant-carousel {
            /deep/ .slick-slide {
                text-align: center;
                overflow: hidden;
                
                .slick-slide h3 {
                    color: #fff;
                }
            }
        }
        
        .situation-list {
            margin-left: 12px;
            margin-right: -12px;
        }
        
        //  每一项
        .situation-item {
            background-color: #2D3136;
            //  楼盘
            .situation-building {
                background-color: var(--border-color-split);
                line-height: 3em;
                height: 3em;
            }
            
            //  内容
            .situation-content {
                font-size: 12px;
                
                .situation-unit {
                    color: var(--cB3B5B5);
                }
            }
        }
        
    }
</style>