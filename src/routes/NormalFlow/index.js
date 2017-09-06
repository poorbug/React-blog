import { Author, Msgboard } from 'components/'

import React from 'react'

export default class NormalFlow extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>文档流（normal flow）</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.07.01' path='normalflow' />
          <a href='https://www.zhihu.com/question/24529373' title='参考'>参考</a>
          <h2>什么是文档流?</h2>
          <p>所有的盒子(元素)从上到下，从左到右排放，就是文档流。</p>
          <h2>什么时候脱离文档流？</h2>
          <p>浮动（float）与 绝对布局（position: absolute）的时候。</p>
          <h2>为什么要浮动？</h2>
          <p>浮动的初衷是排版需要，让内容(文字)可以环绕图片之类的元素。</p>
          <h2>如何清除浮动？</h2>
          <pre>
            <code>
{
`.container:after {
  content: '';
  display: block;
  clear: both;
}`
}
            </code>
          </pre>
          <h2>清除浮动的原理</h2>
          <p>*1: 文档流中的盒子(元素)会忽略浮动元素的存在，但是 <strong>文本(content flow)</strong> 却不会。</p>
          <p>上面方法让 <code>:after</code> 成为块级元素(高度为 0)，然后利用 <code>content: ''</code> (空文本) 的特性(*1) 来欺骗 container ，从而使 container 撑到原本应有的高度。</p>
          <p>备注：</p>
          <pre>
            <code>
{
`*:after {
  float: none; // after 元素必须不浮动
}`
}
            </code>
          </pre>
        </article>
        <Msgboard path='normalflow' />
      </div>
    )
  }
}
