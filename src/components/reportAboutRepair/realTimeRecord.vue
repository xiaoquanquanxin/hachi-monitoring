<template>
    <div class="real-time-record" data-msg="实时记录">
        <a-card style="width: 900px"
                :bordered="false">
            <div class="card-component-title">实时记录</div>
            <a-divider/>
            <div class="list-wrap">
                <ul class="list">
                    <li v-for="item in realTimeRecordData"
                        :key="item.key"
                        class="list-item"
                    >
                        <a-row type="flex" justify="space-between" align="middle">
                            <a-col :span="4">
                                <span class="item-type">{{item.type}}</span>
                            </a-col>
                            <a-col :span="6">
                                <span>{{item.location}}</span>
                            </a-col>
                            <a-col :span="4">
                                <a-row type="flex" justify="space-between" align="middle">
                                    <span>{{item.name}}</span>
                                    <span>{{item.phoneNumber}}</span>
                                </a-row>
                            </a-col>
                            <a-col :span="3">
                                <a-row type="flex" justify="end" align="middle">
                                    {{getTimeStr(item.time)}}
                                </a-row>
                            </a-col>
                        </a-row>
                    </li>
                </ul>
            </div>
        </a-card>
    </div>
</template>
<script>
    import { realTimeRecordData } from '../../utils/staticData';
    import { supplementZero } from '../../utils/utils';

    export default {
        name: 'realTimeRecord',
        data(){
            return {
                realTimeRecordData: null,
            };
        },
        created(){
            this.realTimeRecordData = realTimeRecordData;
        },
        methods: {
            getTimeStr(timeStamp){
                const diffTime = new Date().getTime() - timeStamp;
                const diffSeconds = (diffTime / 1000)|0;
                if (diffSeconds <= 60) {
                    return '刚刚';
                }
                if (diffSeconds <= 60 * 60) {
                    return `${(diffSeconds / 60)|0}分钟前`;
                }
                const timeObj = new Date(timeStamp);
                return `${supplementZero(timeObj.getHours())}：${supplementZero(timeObj.getMinutes())}`;
            }
        }

    };
</script>
<style scoped lang="less">
    .real-time-record {
        .list-wrap {
            position: relative;
            width: 100%;
            overflow: hidden;
            
            .list {
                width: calc(100% + 2em);
                padding-right: 2em;
                height: 24em;
                overflow-y: auto;
                
                .list-item {
                    padding: 0 2em;
                    line-height: 2.8em;
                    border-bottom: 1px solid var(--border-color-split);
                    
                    &:last-child {
                        border-bottom: none;
                    }
                    
                    .item-type {
                        color: var(--cB3B5B5);
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>


