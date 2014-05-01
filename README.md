#Ghostwill

![ghostwill](http://file.is26.com/wp-image/2014/04/ghostwill.png)

The theme is designed by [Luolei.org](http://luolei.org).

for more info.Please contact [@foru17](http://twitter.com/foru17)

本 Ghost 主题为26号设计工作室作品



####注意

若使用本主题，请修改`default.hbs`文件中的谷歌统计 Google Analytics 代码。

若使用多说评论且有从wordpress迁移的需求，请修改js文件中的原博客`data-url`地址。

同时请修改`default.hbs`头部的`meta`相关信息。


####关于Ghostwill

这个主题叫 [Ghostwill](https://github.com/foru17/ghostwill) ，中文名还没想好，暂时就叫「鬼才晓得」吧，已经放在 Github 开源了，请尽情撸，俗话说大家撸才是真的撸嘛，现在版本还是1.0.0。

##几个特性

###1.响应式

现在一个网站不是响应式都不好意思拿出手了。Ghostwill 针对移动设备做了优化，暂时是比较简单的处理，下一步将对菜单导航和交互做进一步优化和处理，详情请看 Github Commit log和该文章的更新日志 Update log 。

![](http://file.is26.com/wp-image/2014/04/ghost-mobile.png)


###自定义Cover image

你要说我抄袭 [Medium](https://medium.com/)，嗯哼，你要说也没办法，自己过去看了不少国外网站，发现这种大 Banner 、大图片、大字体算是一大趋势。尤其是博客和资讯，大量留白，专注于中部核心内容。Ghostwill 支持用户自定义封面照片。

在 Markdown 编辑时，给img图片标签加上`cover-image`的alt值即可。如果没有自定义图片，会默认抓取文章中的第一张图片，如果文章没有图片，则使用默认图片。


下面这个视频是我的一个演示（下面的宽屏图片设置一样操作），蛋疼七牛哦，视频传了上去，老是播不了。放一张GIF图先。

![wrap](http://file.is26.com/wp-image/2014/04/cover-animation.gif)

<video width="640" height="380" class="wrap" controls>
  <source src="http://qiniu.is26.com/cover-image-animate.mp4" type="video/mp4">
</video>

PS:封面照片有视觉滚差效果。


###自选宽屏图片、视频

![](http://qiniu.is26.com/demo-show-wide.png)

通过给图片 `img` 标签设置 alt 值 `wrap`，给视频和其他 `iframe` 或者 `frame` 添加`class="wrap"`，可以让该[图片、视频、frame]自适应屏幕宽屏显示。对于有些需要重点突出的大图，可以根据需求自定义设置。

###文章内 url 体验优化

![iconfont](http://qiniu.is26.com/iconfont-opt.jpg)

把文章中一些常用的 url地址自动加上 iconfont，并且对应不同的提示颜色，支持国内外常用社交网站，让读者能快速知道 url 跳转目的地。

这是我自己写的一个插件，过段时间单独提取出来给其他平台的用户也用用。


###代码优化

```language-css
.hello{
    postion:absolute;
    color:red;
}

```

采用 [Prismjs](http://prismjs.com/)，对不同的代码高亮和添加颜色主题。

###社交icon

![](http://luolei.u.qiniudn.com/social-icons.jpg)

博客顶部可以设置自己的社交网站链接，均使用 iconfont ，果断时间分享一下如何自己配置 iconfont 的教程。

###其他

这是一个 HTML5 的主题，从一开始我就就没想支持IE8以下的用户，IE的用户就洗洗睡吧。（主要是根据自己博客的统计数据来的，现在我博客每天大概700-800的UV，超过一半的访客用的是 Chrome 和移动端 webkit 浏览器我会随便说么，好歹也是高端访客嘛）。

####Sass

开发的时候使用 CSS预处理[Sass](http://sass-lang.com/)。

####Grunt

必须 Grunt 自动化啊，另外放上自己的另外一篇文章[《让前端工作更快、更智能:利用StaticPage自动化工作流》](http://luolei.org/front-end-dev-with-grunt-staticpage-workflow/)。

####前端优化

css 压缩,js 压缩，采用[又拍云](http://www.upyun.com/?md=luolei)CDN全站加速。

####键盘控制

这个是我随便加的功能，按键盘`J`屏幕下滚，`K`上翻，嗯哼，是 VIM 的操作习惯。

###TO-DO-Task 待解决

2014.4月30日更新:

* 图片延迟加载(这个要改 Ghost core 代码，略危险）
* Menu 响应式处理
* 中文搜索功能
* iconfont 需添加更多的常用网站
* 交互优化:加载动画、页面切换转场动画
* 代码高亮优化:4月30日现在有点问题
* 低版本浏览器和微信内置浏览器的兼容性问题（坑啊！！！）
* 社交分享url分享方法
* 后台编辑直接把图片上传到又拍云or七牛等第三方（需要等 Ghost 官方API开发迭代）。
* 前端优化:进一步语义化 HTML 和 CSS，优化js逻辑，减少重绘，目前优化还粗放，线上版本还比较粗放。


## Copyright & License

Copyright (C) 2014 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
