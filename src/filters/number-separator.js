/**
* 千位分隔符
* */
export default function (value) {
    return value.toString().replace(/\B(?=(\d{3})+$)/g,',');
}