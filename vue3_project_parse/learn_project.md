# 项目基本组成

```

.
├── README.md
├── index.html           	入口文件
├── package.json
├── public               	资源文件
│   └── favicon.ico
├── src                  	源码
│   ├── App.vue          	单文件组件
│   ├── assets
│   │   └── logo.png
│   ├── components   
│   │   └── HelloWorld.vue
│   └── main.js          	入口
└── vite.config.js vite		工程化配置文件
```



# 安装工具库

```
// 安装vue-router和Vuex
npm install vue-router@next vuex@next
```

![image-20220114104107259](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220114104107259.png)



# 项目目录详细介绍

## src：主要代码及资源存储区域

```

├── src
│   ├── api            数据请求
│   ├── assets         静态资源
│   ├── components     组件
│   ├── pages          页面
│   ├── router         路由配置
│   ├── store          vuex数据
│   └── utils          工具函数
```

### router：路由系统

#### （1）配置路由文件：

在router文件夹的index.js文件中：

```
// createRouter：新建路由实例。creteaWebHashHistory：配置内部使用hash模式的路由，即url上通过#来区分
import { createRouter, creteaWebHashHistory } from 'vue-router'
import  Home from '../pages/Home.vue'
import  About from '../pages/About.vue'

const routes = [
    {
        path: '/', //路由名称（'/'表示默认显示此页面）
        name: 'Home', // ？？
        component: Home // ？？
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
```

#### （2）建立页面

#### （3）在main.js引入路由,修改App.vue文件



在 <script setup> 语法中，我们使用引入的 ref 函数包裹数字，返回的 count 变量就是响应式的数据，使用 add 函数实现数字的修改。需要注意的是，对于 ref 返回的响应式数据，我们需要修改 .value 才能生效，而在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。

使用 Composition API 的逻辑来拆分代码，把一个功能相关的数据和方法都维护在一起。

# Vue3生命周期

setup在其他生命周期函数之前，也在data等之前

