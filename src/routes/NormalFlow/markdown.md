### 文档流（normal flow）
===

[参考](https://www.zhihu.com/question/24529373)

#### 什么是文档流?

所有的盒子(元素)从上到下，从左到右排放，就是文档流。


#### 什么时候脱离文档流？

浮动（float）与 绝对布局（position: absolute）的时候。


#### 为什么要浮动？

浮动的初衷是排版需要，让内容(文字)可以环绕图片之类的元素。


#### 如何清除浮动？

```
  .container:after {
    content: '';
    display: block;
    clear: both;
  }
```

#### 清除浮动的原理

*1: 文档流中的盒子(元素)会忽略浮动元素的存在，但是 ** 文本(content flow) ** 却不会。

上面方法让 `:after` 成为块级元素(高度为 0)，然后利用 `content: ''` (空文本) 的特性(*1) 来欺骗 container ，从而使 container 撑到原本应有的高度。

备注：

*:after {
  float: none; // after 元素必须不浮动
}
