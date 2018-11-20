# 多入口HTML网站的webpack配置

> 本脚手架适合官网等较简单的多html网站开发，支持共用导航栏、底部通栏或侧边栏等；通过读取html文件所在目录内容，自动更改配置，即增加页面无需更改webpack配置；支持ES6开发js；支持将less编写样式
> 微信：15600059668

## 主要功能

> 能够打包成多个html文件和js文件，即支持多入口

> 文件名称都要带上hash值，解决缓存问题

> 能够复用网站的头部导航栏和底部通栏

> 通过采用less进行样式的编写

> 能够支持ES6开发

> 用起来要方便，增加页面不需要手动去更改webpack的入口设置，希望能够根据目录下的文件自动配置

> 不希望通过js动态插入css样式，这样会造成页面闪烁，希望html中直接引入css地址，就像平时开发那样

> 能够实时看到开发的效果

> build能够对代码进行压缩

## 相关介绍文章
[http://shanhuxueyuan.com/news/detail/83.html](http://shanhuxueyuan.com/news/detail/83.html)

## 下载使用

``` bash
# 下载之后先安装依赖
npm install

# 开发时输入如下命令
npm run start

# 构建线上dist文件，采取如下命令
npm run build

```


