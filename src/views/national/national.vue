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
                              v-show="false"
        />
        <CommunityWorkers data-msg="社区人员"
                          :communityWorkersData="communityWorkersData"
                          v-show="false"
        />
        <ReportAboutRepair data-msg="报事报修"
                           :reportAboutRepairData="reportAboutRepairData"
                           v-show="false"
        />
        <PropertyPayCost data-msg="报事报修"
                         :propertyPayCostData="propertyPayCostData"
                         v-show="false"
        />
        <AlarmEvents data-msg="社区人员"
                     :proportionOfAlarmTimeTodayData="proportionOfAlarmTimeTodayData"
                     v-show="false"
        />
        <EntranceGuardSystem data-msg="门禁系统"
                             :swipeModeData="swipeModeData"
                             v-show="false"
        />
        <YardSystem data-msg="车场系统"
                    :proportionOfParkingSpacesData="proportionOfParkingSpacesData"
                    v-show="false"
        />
        <EquipmentInformation data-msg="设备信息"
                              :equipmentInformationData="equipmentInformationData"
        ></EquipmentInformation>
    </div>
</template>
<script>
    //  组件
    import BasicInfoStatistical from '@/components/national/basicInfoStatistical.vue';
    import CommunityWorkers from '@/components/national/communityWorkers.vue';
    import ReportAboutRepair from '@/components/national/reportAboutRepair.vue';
    import PropertyPayCost from '@/components/national/propertyPayCost.vue';
    import AlarmEvents from '@/components/national/alarmEvents.vue';
    import EntranceGuardSystem from '@/components/national/entranceGuardSystem.vue';
    import YardSystem from '@/components/national/yardSystem.vue';
    import EquipmentInformation from '@/components/national/equipmentInformation.vue';

    //  数据
    import {
        homePanelData,
        basicInfoStatisticalData,
        communityWorkersData,
        reportAboutRepairData,
        propertyPayCostData,
        proportionOfAlarmTimeTodayData,
        swipeModeData,
        proportionOfParkingSpacesData,
        equipmentInformationData,
    } from '@/utils/staticData';

    export default {
        name: 'national',
        components: {
            //  基本信息统计
            BasicInfoStatistical,
            //  社区人员
            CommunityWorkers,
            //  报事报修
            ReportAboutRepair,
            //  物业缴费
            PropertyPayCost,
            //  报警事件
            AlarmEvents,
            //  门禁系统,
            EntranceGuardSystem,
            //  车场系统
            YardSystem,
            //  设备信息
            EquipmentInformation,
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
                //  报事报修
                reportAboutRepairData,
                //  物业缴费
                propertyPayCostData,
                //  报警事件
                proportionOfAlarmTimeTodayData,
                //  门禁系统
                swipeModeData,
                //  车场系统
                proportionOfParkingSpacesData,
                //  设备信息
                equipmentInformationData,
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


