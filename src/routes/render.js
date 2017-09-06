import { Author, ImgTxt, Msgboard } from 'components/'

import React from 'react'

export default class Render extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>浏览器渲染过程</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.06.30' path='render' />
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/browser-render.jpeg' txt='浏览器渲染概图' />
          <h2>渲染顺序</h2>
          <ol>
            <li>HTML 解析为 DOM Tree</li>
            <li>CSS 解析为 CSSOM</li>
            <li>JS 操作 DOM Tree & CSSOM</li>
            <li>
              前三步操作形成 Rendering Tree
              <ul>
                <li>Rendering Tree repaints *1.</li>
                <li>Rendering Tree reflows *2.</li>
              </ul>
            </li>
            <li>Browser paints the Rendering Tree</li>
          </ol>
          <h2>备注</h2>
          <p>*1 Repaint 不重新布局，只是改变背景颜色之类的样式</p>
          <p>*2 Reflow 需要对 Rendering Tree 进行重新布局，此时对 GPU 消耗大，性能较差，特别时移动端会有严重功耗</p>
          <p>*3 fixed 滚动性能较差</p>
          <h2>优化</h2>
          <ul>
            <li>把 DOM 脱离文档再操作</li>
            <li>操作的 DOM 层级越低越好</li>
            <li>NO table layout</li>
          </ul>
        </article>
        <Msgboard path='render' />
      </div>
    )
  }
}
