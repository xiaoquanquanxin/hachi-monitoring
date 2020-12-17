<template>
    <div class="visit-panel" data-msg="到访面板">
        <a-card class="visit-panel-card"
                :bordered="false">
            <div>{{nameTypeMap[type]}}</div>
            <br>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="13">
                    <img :src="list[0].img" class="visit-panel-img" alt="">
                </a-col>
                <a-col :span="8" :offset="2">
                    <div>{{list[0].name}}</div>
                    <br>
                    <div class="visit-panel-type">{{list[0].type}}</div>
                    <br>
                    <div>{{list[0].num}} <span class="visit-panel-type">次</span></div>
                </a-col>
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle" class="visit-panel-list">
                <a-col v-for="(item,index) in list"
                       v-if="index < 4"
                       :key="item.key"
                       :span="5"
                       :offset="1"
                >
                    <img :src="item.img" class="visit-panel-list-item" alt="">
                </a-col>
            </a-row>
            <a-row type="flex" justify="space-between" align="middle" class="visit-panel-list">
                <a-col v-for="(item,index) in list"
                       v-if="index >= 4"
                       :key="item.key"
                       :span="5"
                       :offset="1"
                >
                    <img :src="item.img" class="visit-panel-list-item" alt="">
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { statisticsOnFrequentVisitsData } from '../../utils/staticData';

    export default {
        name: 'visitPanel',
        props: ['type'],
        data(){
            return {
                nameTypeMap: {
                    1: '访客到访频繁排名',
                    2: '访客夜间到访频繁排名',
                },
                list: null,
            };
        },
        created(){
            const { list1, list2 } = statisticsOnFrequentVisitsData;
            if (+this.type === 1) {
                this.list = list1;
            } else {
                this.list = list2;
            }
        }
    };
</script>
<style scoped lang="less">
    .visit-panel {
        .visit-panel-card {
            background-color: var(--main-bg);
            margin-top: -1em;
            
            .visit-panel-img, .visit-panel-list-item {
                width: 100%;
                display: block;
            }
            
            .visit-panel-type {
                color: var(--cB3B5B5);
            }
            
            .visit-panel-list {
                margin-bottom: .6em;
                
                &:last-child {
                    margin-bottom: 0;
                }
            }
            
        }
    }
</style>


