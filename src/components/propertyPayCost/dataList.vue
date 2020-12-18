<template>
    <div class="data-list" data-msg="数据列表">
        <a-row type="flex" justify="space-between" align="middle">
            <a-col v-for="item in dataListData"
                   :key="item.key"
                   class="data-list-item"
            >
                <div class="item-value"><b>{{item.value}}</b></div>
                <div class="item-name">{{item.name}}</div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import { dataListData } from '../../utils/staticData';

    export default {
        name: 'dataList',
        data(){
            return {
                dataListData: null,
            };
        },
        created(){
            this.dataListData = dataListData;
        }
    };
</script>
<style scoped lang="less">
    .data-list {
        margin-right: 1.6em;
        
        .data-list-item {
            width: 184px;
            background-color: #25292E;
            padding: 20px 0 30px;
            text-align: center;
            
            .item-value {
                line-height: 2em;
                font-size: 36px;
            }
            
            .item-name {
                font-size: 12px;
                color: var(--cB3B5B5);
            }
            
            &:last-child {
                .item-value {
                    color: var(--cE56B6B);
                }
            }
        }
    }
</style>


