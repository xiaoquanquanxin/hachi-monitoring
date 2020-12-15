export const c03FFCC = '#03FFCC';
export const c4e9a94 = '#4e9a94';
export const cFFFFFF = '#FFFFFF';
export const cCCCCCC = '#cccccc';
export const c929292 = '#929292';
export const c4d4d4d = '#4d4d4d';
export const cBBC0F7 = '#BBC0F7';
export const c4565B0 = '#4565B0';
//  面板底色
export const c2D3237 = '#2D3237';
//  面板分割线
export const c373a3e = '#373a3e';

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
//  不展示
export const showFalse = { show: false };
//  折线图
//  折线下区域的阴影
export const areaStyle = {
    opacity: 0.3,
    shadowBlur: 10,
    color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        colorStops: [null, {
            offset: 1,
            color: 'transparent',
        }]
    }
};
//  折线的配置
export const lineSeriesConfig = {
    name: '刷脸',
    type: 'line',
    symbol: 'none',
    //  平滑
    smooth: true,
    lineStyle: {
        width: 1,
    },
    areaStyle,
};
