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

#### （3）修改App.vue文件

