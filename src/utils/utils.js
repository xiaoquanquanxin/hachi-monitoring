/***
 * 获取页面title
 * @param {{chName:string}} meta
 * */
export function getPageTitle(meta){
    return meta.chName;
}

//  补零
export function supplementZero(num){
    if (num > 9) {
        return num;
    }
    return `0${num}`;
}