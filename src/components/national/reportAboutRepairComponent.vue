<template>
    <div class="report-about-repair-component">
        <a-card style="width: 445px"
                :bordered="false"
        >
            <p>报事报修</p>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle"
                   class="type-list">
                <div v-for="item in typeList"
                     :key="item.key"
                     align="middle"
                >
                    <h2 :style="`color:${typeMap[item.type]}`">{{valueMap[item.type]}}</h2>
                    <span>{{item.label}}</span>
                </div>
            </a-row>
            <a-divider/>
            <p>报事报修类型数量统计</p>
            <div class="overflow-wrap">
                <div class="statistical-list-wrap">
                    <a-row v-for="item in reportAboutRepairData.statisticalList"
                           :key="item.key"
                           type="flex"
                           justify="start"
                           align="middle"
                           class="statistical-list">
                        <a-col :span="3">{{item.name}}</a-col>
                        <a-col :span="14" :offset="1">
                            <a-row type="flex" justify="space-around" align="middle" class="grid-list">
                                <a-col v-for="(_item,index) in item.list"
                                       v-if="!(index%2)"
                                       :key="index"
                                >
                                    <div class="grid" :style="`background-color:${typeMap[_item]}`"></div>
                                </a-col>
                            </a-row>
                            <a-row type="flex" justify="space-around" align="middle" class="grid-list">
                                <a-col v-for="(_item,index) in item.list"
                                       v-if="index%2"
                                       :key="index"
                                >
                                    <div class="grid" :style="`background-color:${typeMap[_item]}`"></div>
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="2" :offset="2">
                            {{item.total}}
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-card>
    </div>
</template>
<script>
    import { c03FFCC, c929292, cFFFFFF, cBBC0F7 } from '../../utils/constants';
    import { reportAboutRepairData } from '../../utils/staticData';

    export default {
        name: 'reportAboutRepairComponent',
        data(){
            return {
                reportAboutRepairData: null,
                //  颜色关于类型的map
                typeMap: {
                    total: cFFFFFF,
                    reception: c03FFCC,
                    processing: cBBC0F7,
                    completed: c929292,
                },
                //  数值关于类型的map
                valueMap: null,
                typeList: []
            };
        },
        created(){
            this.reportAboutRepairData = reportAboutRepairData;
            //  基础数据
            const { total, reception, processing, completed } = this.reportAboutRepairData;
            this.valueMap = { total, reception, processing, completed };
            this.typeList.push({ key: 1, label: '总数', type: 'total', });
            this.typeList.push({ key: 2, label: '接待', type: 'reception', });
            this.typeList.push({ key: 3, label: '处理中', type: 'processing', });
            this.typeList.push({ key: 4, label: '已完成', type: 'completed', });
            //  20个格子图
            this.reportAboutRepairData.statisticalList.forEach(item => {
                this.calc(item);
            });
        },
        methods: {
            calc(item){
                const { total, reception, processing } = item;
                const totalGrid = 40;
                const _reception = (reception / total * totalGrid)|0;
                const _processing = (processing / total * totalGrid)|0;
                const list = new Array(40);
                list.fill('reception', 0, _reception);
                list.fill('processing', _reception, _reception + _processing);
                list.fill('completed', _reception + _processing, 40);
                item.list = list;
            }
        }
    };
</script>
<style scoped lang="less">
    .report-about-repair-component {
        
        .type-list {
            padding: 0 24px;
        }
        
        .overflow-wrap {
            overflow: hidden;
            //  报事报修类型数量统计
            .statistical-list-wrap {
                width: calc(100% + 20px);
                height: 12em;
                overflow-y: auto;
                
                .statistical-list {
                    line-height: 3em;
                    
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
                }
            }
        }
        
    }
</style>