<template>
    <div class="national">
        <header data-msg="头部">
            <a-row type="flex" justify="space-between" align="middle">
                <a-icon type="menu"/>
                <a>更多统计</a>
                <a-col :span="4" v-show="false">
                    <a-checkbox-group
                            class="national-checkbox"
                            :default-value="[1,2,3,4,5,6,7,8,9]"
                            @change="onChange"
                    >
                        <a-row v-for="item in homePanelData"
                               :key="item.key"
                        >
                            <a-col>
                                <a-checkbox :value="item.value">
                                    <span>{{ item.label }}</span>
                                </a-checkbox>
                            </a-col>
                        </a-row>
                    </a-checkbox-group>
                </a-col>
            </a-row>
        </header>
        <BasicInfoStatistical data-msg="基本信息统计"
                              :basicInfoStatisticalData="basicInfoStatisticalData"
        />
        <CommunityWorkers data-msg="社区人员"
                          :communityWorkersData="communityWorkersData"
        />
    </div>
</template>
<script>
    //  组件
    import BasicInfoStatistical from '@/components/national/basicInfoStatistical.vue';
    import CommunityWorkers from '@/components/national/communityWorkers.vue';

    //  数据
    import { homePanelData } from '@/utils/constants';
    import { basicInfoStatisticalData, communityWorkersData } from '@/utils/constants';

    export default {
        name: 'national',
        components: {
            //  基本信息统计
            BasicInfoStatistical,
            //  社区人员
            CommunityWorkers,
        },
        data(){
            return {
                //  可选的列表
                homePanelData,
                value: [],
                //  基本信息统计
                basicInfoStatisticalData,
                //  社区人员
                communityWorkersData,
            };
        },
        methods: {
            onChange(){

            }
        }
    };
</script>
<style scoped lang="less">
    .national {
        .national-checkbox {
            width: 100%;
        }
    }
</style>