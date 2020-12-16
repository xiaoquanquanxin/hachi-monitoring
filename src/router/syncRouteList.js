import community from '@/views/community/community';

//  chName:菜单与title
//  hidden:不在菜单中展示
export const syncRouteList = [
    {
        meta: {
            chName: '全国页'
        },
        path: '/national',
        name: 'National',
        component: () => import(/* webpackChunkName: "national" */ '@/views/national/national')
    },
    {
        meta: {
            chName: '社区页'
        },
        path: '/community',
        name: 'Community',
        component: community,
        children: [
            {
                meta: {
                    chName: '门禁统计',
                },
                path: '/community/accessStatistics',
                name: 'AccessStatistics',
                component: () => import(/* webpackChunkName: "accessStatistics" */ '@/views/accessStatistics/accessStatistics')
            },
            {
                meta: {
                    chName: '车辆统计'
                },
                path: '/community/vehicleMonitoring',
                name: 'VehicleMonitoring',
                component: () => import(/* webpackChunkName: "vehicleMonitoring" */ '@/views/vehicleMonitoring/vehicleMonitoring')
            },
            {
                meta: {
                    chName: '报事报修'
                },
                path: '/community/reportAboutRepair',
                name: 'ReportAboutRepair',
                component: () => import(/* webpackChunkName: "reportAboutRepair" */ '@/views/reportAboutRepair/reportAboutRepair')
            },
            {
                meta: {
                    chName: '设备统计'
                },
                path: '/community/equipmentStatistics',
                name: 'EquipmentStatistics',
                component: () => import(/* webpackChunkName: "equipmentStatistics" */ '@/views/equipmentStatistics/equipmentStatistics')
            },
            {
                meta: {
                    chName: '访客统计'
                },
                path: '/community/visitorStatistics',
                name: 'VisitorStatistics',
                component: () => import(/* webpackChunkName: "visitorStatistics" */ '@/views/visitorStatistics/visitorStatistics'),
            },
            {
                meta: {
                    chName: '梯控监测'
                },
                path: '/community/ladderControlMonitoring',
                name: 'LadderControlMonitoring',
                component: () => import(/* webpackChunkName: "ladderControlMonitoring" */ '@/views/ladderControlMonitoring/ladderControlMonitoring')
            },
            {
                meta: {
                    chName: '物业缴费'
                },
                path: '/community/propertyPayCost',
                name: 'PropertyPayCost',
                component: () => import(/* webpackChunkName: "propertyPayCost" */ '@/views/propertyPayCost/propertyPayCost')
            },

            {
                meta: {
                    chName: '报警事件'
                },
                path: '/community/alarmEvents',
                name: 'AlarmEvents',
                component: () => import(/* webpackChunkName: "alarmEvents" */ '@/views/alarmEvents/alarmEvents')
            },
            {
                meta: {
                    chName: '报警事件'
                },
                path: '/community/communityPopulation',
                name: 'CommunityPopulation',
                component: () => import(/* webpackChunkName: "communityPopulation" */ '@/views/communityPopulation/communityPopulation')
            },
               {
                meta: {
                    chName: '智能家居'
                },
                path: '/community/smartHome',
                name: 'SmartHome',
                component: () => import(/* webpackChunkName: "smartHome" */ '@/views/smartHome/smartHome')
            },

        ],
        redirect: '/community/accessStatistics'
    },
    {
        meta: {
            hidden: true,
        },
        path: '*',
        redirect: '/national',
    }
];