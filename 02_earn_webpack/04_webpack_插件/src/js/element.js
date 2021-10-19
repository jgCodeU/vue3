// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../css/srcClass.css"
// import "../font/iconfont.css";

import cloud from '../img/cloud.jpg';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "04_webpack_插件";
document.body.appendChild(divEl);

// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";
document.body.appendChild(bgDivEl);

// 设置img元素的src
const imgEl = document.createElement('img');
imgEl.src = cloud;
imgEl.className = "srcClass"
document.body.appendChild(imgEl);

// i元素
// const iEl = document.createElement('i');
// iEl.className = "iconfont icon-ashbin";




// document.body.appendChild(iEl);
