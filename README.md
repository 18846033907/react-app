## 技术栈

redux+react-router-dom+less+antd

## 问题

### 兼容 ie11

安装依赖

```
yarn add core-js react-app-polyfill -D
```

在 src/index.js 添加

```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js";
```

在 index.html 添加

```
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

在 pakage.json 添加

```
 "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "ie 11" //新增内容
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie 11" //新增内容
    ]
  }
```

### 配置引入路径

yarn add customize-cra
在 config-overrides.js 添加

```
const { override, addWebpackAlias} = require('customize-cra');
const path = require('path')

 module.exports = override(
   addWebpackAlias({
     actions: path.resolve(__dirname, 'src/actions/'),
     reducers: path.resolve(__dirname, 'src/reducers/'),
     components:path.resolve(__dirname, 'src/components/'),
     containers:path.resolve(__dirname, 'src/containers/'),
     store:path.resolve(__dirname, 'src/store/')
   })
);
```
