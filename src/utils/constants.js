export const c03FFCC = '#03FFCC';
export const cFFFFFF = '#FFFFFF';
export const c929292 = '#929292';
export const cBBC0F7 = '#BBC0F7';

//  x轴
export const axisLine = {
    show: true,
    lineStyle: {
        color: c929292,
    }
};
//  刻度文字
export const axisLabel = {
    //  强制显示所有文字
    interval: 0,
};
//  刻度
export const axisTick = {
    //  强制显示所有刻度
    interval: 0,
    //  标签对齐刻度
    alignWithLabel: true,
};
//  水平线条
export const yAxis = {
    splitLine: {
        show: true,
        lineStyle: {
            color: c929292,
            width: .5,
        }
    },
};
//  整个绘图范围，适用于坐标图
export const grid = {
    bottom: '1%',
    left: '1%',
    right: '1%',
    containLabel: true
};
