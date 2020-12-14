//  首页面板的值
export const homePanelData = [
    { value: 1, key: 1, label: '今日门禁', },
    { value: 2, key: 2, label: '今日停车场', },
    { value: 3, key: 3, label: '今日事件', },
    { value: 4, key: 4, label: '设备信息', },
    { value: 5, key: 5, label: '访客统计', },
    { value: 6, key: 6, label: '社区动态记录', },
    { value: 7, key: 7, label: '梯控统计', },
    { value: 8, key: 8, label: '物业缴费', },
    { value: 9, key: 9, label: '社区人口', },
    { value: 10, key: 10, label: '报警事件', },
];
//  基本信息统计
export const basicInfoStatisticalData = [
    { key: 1, label: '社区数', value: 66, },
    { key: 2, label: '社区数', value: 388, },
    { key: 3, label: '社区数', value: 999, },
];

//  社区人员
export const communityWorkersData = [
    { key: 1, name: '业主', value: 3888, },
    { key: 2, name: '租客', value: 2666, },
    { key: 3, name: '其他', value: 999, },
];

//  报事报修
export const reportAboutRepairData = {
    //  总数
    total: 78,
    //  接待
    reception: 8,
    //  处理中
    processing: 40,
    //  已完成
    completed: 30,
    statisticalList: [
        {
            name: '类型A',
            total: 34,
            reception: 7,
            processing: 22,
            completed: 5,
        },
        {
            name: '类型B',
            total: 12,
            reception: 2,
            processing: 2,
            completed: 8,
        },
        {
            name: '类型C',
            total: 23,
            reception: 8,
            processing: 5,
            completed: 10,
        },
        {
            name: '类型D',
            total: 9,
            reception: 1,
            processing: 1,
            completed: 7,
        },
        {
            name: '类型E',
            total: 10,
            reception: 2,
            processing: 1,
            completed: 7,
        }
    ]
};
//  物业缴费
export const propertyPayCostData = [
    {
        name: '收费类型1',
        paidIn: 55,
        accountsReceivable: 332,
    },
    {
        name: '收费类型2',
        paidIn: 44,
        accountsReceivable: 332,
    },
    {
        name: '收费类型3',
        paidIn: 124,
        accountsReceivable: 232,
    },
    {
        name: '收费类型4',
        paidIn: 12,
        accountsReceivable: 326,
    },
    {
        name: '收费类型5',
        paidIn: 132,
        accountsReceivable: 382,
    },
    {
        name: '收费类型6',
        paidIn: 162,
        accountsReceivable: 342,
    },
    {
        name: '收费类型7',
        paidIn: 142,
        accountsReceivable: 325,
    },
    {
        name: '收费类型2',
        paidIn: 44,
        accountsReceivable: 332,
    },
    {
        name: '收费类型3',
        paidIn: 124,
        accountsReceivable: 232,
    },
    {
        name: '收费类型4',
        paidIn: 12,
        accountsReceivable: 326,
    },
];
//  报警事件
export const proportionOfAlarmTimeTodayData = {
    lastWeek: 234,
    list: [
        { key: 1, name: 'A类型', value: 34, },
        { key: 2, name: 'B类型', value: 23, },
        { key: 3, name: 'C类型', value: 9, },
        { key: 4, name: 'D类型', value: 12, },
        { key: 5, name: 'E类型', value: 23, },
    ]
};
//  门禁系统
export const swipeModeData = {
    timeList: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08', '03-09', '03-10', '03-11', '03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18', '03-19', '03-20', '03-21', '03-22', '03-23', '03-24', '03-25', '03-26', '03-27', '03-28',],
    dataList: {
        //  刷脸
        faceScan: [120, 132, 101, 134, 90, 230, 210, 320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 310,],
        //  刷卡
        creditCard: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210, 320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410,],
        //  二维码
        QrCode: [150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210, 320, 332, 301, 334, 390, 330, 320,],
        //  门禁
        entranceGuard: [320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210,],
    }
};














