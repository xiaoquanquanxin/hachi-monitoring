<template>
    <div class="national">
        <header data-msg="头部">
            <a-row type="flex" justify="space-between" align="middle">
                <a-icon type="menu"/>
                <b @click="showMenuFn(true)">更多统计</b>
            </a-row>
            <a-row type="flex" justify="end" align="middle">
                <div v-show="showMenu" class="menu-list">
                    <a-row type="flex" justify="end" align="middle">
                        <a-icon type="close" @click="showMenuFn(false)"/>
                    </a-row>
                    <a-checkbox-group
                            :default-value="[1,2,3,4,5,6,7,8,9]"
                            @change="onChangeFn"
                    >
                        <a-row v-for="item in homePanelData"
                               :key="item.key"
                        >
                            <a-col class="menu-list-item">
                                <a-checkbox :value="item.value">
                                    <span>{{ item.label }}</span>
                                </a-checkbox>
                            </a-col>
                        </a-row>
                    </a-checkbox-group>
                </div>
            </a-row>
        </header>
        <BasicInfoStatistical data-msg="基本信息统计"
                              :basicInfoStatisticalData="basicInfoStatisticalData"
        />
        <CommunityWorkers data-msg="社区人员"
                          :communityWorkersData="communityWorkersData"
        />
        <ReportAboutRepairComponent data-msg="报事报修"/>
        <PropertyPayCostComponent data-msg="物业缴费"/>
        <AlarmEvents data-msg="报警事件"
                     :proportionOfAlarmTimeTodayData="proportionOfAlarmTimeTodayData"
        />
        <EntranceGuardSystem data-msg="门禁系统"
                             :swipeModeData="swipeModeData"
        />
        <YardSystem data-msg="车场系统"
                    :proportionOfParkingSpacesData="proportionOfParkingSpacesData"
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
    import ReportAboutRepairComponent from '@/components/national/reportAboutRepairComponent.vue';
    import PropertyPayCostComponent from '@/components/national/propertyPayCostComponent.vue';
    import AlarmEvents from '@/components/national/alarmEvents.vue';
    import EntranceGuardSystem from '@/components/national/entranceGuardSystem.vue';
    import YardSystem from '@/components/national/yardSystem.vue';
    import EquipmentInformation from '@/components/national/equipmentInformation.vue';

    //  数据
    import {
        homePanelData,
        basicInfoStatisticalData,
        communityWorkersData,
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
            ReportAboutRepairComponent,
            //  物业缴费
            PropertyPayCostComponent,
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
                //  菜单是否展示
                showMenu: true,
                //  可选的列表
                homePanelData,
                value: [],
                //  基本信息统计
                basicInfoStatisticalData,
                //  社区人员
                communityWorkersData,
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
            //  展示多选菜单
            showMenuFn(showMenu){
                this.showMenu = showMenu;
            },
            //  菜单变换
            onChangeFn(val){
                console.log(val);
            },
        }
    };
</script>
<style scoped lang="less">
    .national {
        .menu-list {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1em 1em 2em 2em;
            top: 4em;
            right: 1em;
            /*菜单列表里的选项*/
            
            .menu-list-item {
                width: 150px;
                line-height: 2.6em;
            }
        }
    }
</style>


