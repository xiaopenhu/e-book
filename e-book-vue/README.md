# e-book

## vue-cli4安装
报考vuex、router、配置选项保存在各自文件、已经基础配置（babel + ESlint）

## 字体图标
1. 去阿里图标库下载svg图标
2. https://icomoon.io/app/#/select  ，点击左上角，会有New Empty Set 选项
3. 之后修改项目名，导入字体图标，全选后，下方第三个选项下载
4. 把style.css和font文件夹引入assets即可
## 手机端适配
viewport设置  
`<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">`  
style初始化设置  
```$xslt
html, body {
  width: 100%;
  height: 100%;
  user-select: none;
  overflow: hidden;
  font-family: 'PingFangSC-Light', 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', 'Arial', 'sans-serif';
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```
### px2rem:px转rem设置
设置标准转换比例,global.scss
```$xslt
$ratio: 375/10;

@function px2rem($px) {
  @return $px / $ratio + rem
}
```
使用  
```$xslt
<style lang="scss" scoped>
  @import "./assets/styles/global";
  .text {
    font-family: 'Days One';
    font-size: px2rem(20);
    color: orange;
  }
</style>
```
## dev-tools安装
```
npm i -g @vue/devtools
```
启动命令
```
vue-devtools
```
之后把js引入index.html,生产环境下要注释掉
## nginx安装及配置
下载地址  http://nginx.org/en/download.html  
选择稳定版中的windows版本下载 
在根目录输入 `nginx` 命令即可启动 
在根目录输入 `nginx -s quit` 命令关闭nginx
在根目录输入 `nginx -s reload` 命令重启nginx
### 配置静态资源目录
```
nginx的配置文件

http {
    server {
        #监听的端口号，可进行修改
        listen       8888;
        #资源名称
        server_name resouce;
        #资源路径
        root E:\webcode\e-book-resouce;
        #开启目录索引
        autoindex on;
    }
}
```