<template>
    <div class="real-time-record-of-access-control" data-msg="门禁实时记录">
        <a-card style="width: 600px"
                :bordered="false">
            <div>门禁实时记录</div>
            <div class="list-wrap">
                <ul class="list">
                    <li v-for="item in realTimeRecordOfAccessControlData"
                        :key="item.key"
                    >
                        <a-row type="flex" justify="space-between" align="middle" class="list-item">
                            <a-col :span="5">
                                <img class="head-portrait" :src="item.img" alt="">
                            </a-col>
                            <a-col :span="19">
                                <a-row type="flex" justify="space-between" align="middle">
                                    <div class="item-name">{{item.name}}</div>
                                    <div class="item-time">{{item.time}}</div>
                                </a-row>
                                <div class="item-type">
                                    <a-icon type="fork"/>
                                    {{item.type}}
                                </div>
                                <a-row type="flex" justify="space-between" align="middle">
                                    <div class="item-robot">
                                        <a-icon type="robot"/>
                                        {{item.location}}
                                    </div>
                                    <div class="item-door">
                                        {{item.door}}
                                    </div>
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
    export default {
        name: 'RealTimeRecordOfAccessControl',
        props: ['realTimeRecordOfAccessControlData'],
        data(){
            return {
                timeout: null,
            };
        },
        created(){
            console.log(this.realTimeRecordOfAccessControlData);
        },

    };
</script>
<style scoped lang="less">
    .list-wrap {
        margin-top: 1em;
        background-color: var(--main-bg);
        padding: 1.4em;
        
        .list {
            border-radius: 4px;
            height: 33.4rem;
            overflow: hidden;
            margin-bottom: 0;
            
            .list-item {
                background-color: var(--c262A2E);
                margin-bottom: 1.4em;
                padding: 1em;
                width: 100%;
                //  头像
                .head-portrait {
                    display: block;
                    width: 90%;
                }
                
                .item-name {
                    font-size: 20px;
                }
                
                .item-time {
                    font-size: 12px;
                }
                
                .item-type, .item-robot, .item-time {
                    color: var(--cB3B5B5);
                }
                
                .item-door {
                    color: var(--c03FFCC);
                }
            }
        }
    }
</style>

