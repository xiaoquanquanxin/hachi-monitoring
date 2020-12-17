<template>
    <div class="statistics-on-frequent-visits" data-msg="频繁到访统计">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">频繁到访统计</div>
                <a-col :span="3">
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
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="11">
                    <VisitPanel type="1" data-msg="到访面板"/>
                </a-col>
                <a-col :span="11" :offset="1">
                    <VisitPanel type="2" data-msg="到访面板"/>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import VisitPanel from '@/components/visitorStatistics/visitPanel.vue';

    export default {
        name: 'statisticsOnFrequentVisits',
        components: {
            //  到访面板组件
            VisitPanel,
        },
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                percentageOfVisitorsByTypeData: null,
            };
        },
        methods: {
            setActiveIndex(activeIndex){
                this.activeIndex = activeIndex;
            }
        }
    };
</script>
<style scoped lang="less">
    @import '~@/css/custom-tab.less';
    
    .statistics-on-frequent-visits {
    
    }
</style>


