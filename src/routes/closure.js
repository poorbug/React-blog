import { Author, Msgboard } from 'components/'

import React from 'react'

export default class Closure extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>我是如何发现闭包的</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.06.29' path='closure' />
          <p>上学的时候写过一段代码，一组数据，for 循环发 length 个请求，回调将请求结果放到 <code>result = []</code> 中对应的位置，模拟出来大概就是以下代码 </p>
          <pre>
            <code>
{
`var result = []
for(var i=0; i<20; i++) {
  setTimeout(() => { result[i] = i }, 1000)
}`
}
            </code>
          </pre>
          <p>了解相关闭包知识后，发现问题在于<strong>i 为匿名函数的外部变量，当 i 在外部改变时，匿名函数内的 i 也随之变化</strong>, 所以在执行匿名函数时，<code>i === 20</code></p>
          <p>找到问题所在后，那么就有解决问题的方向了，<strong>把 i 变为匿名函数的内部变量，那么即使外部改变，内部也不会改变了（对象另说）</strong></p>
          <pre>
            <code>
{
`var result = []
function clo(n) {
  setTimeout(() => { result[n] = n }, 1000)
}

for(var i=0; i<20; i++) {
  clo(i)
}`
}
            </code>
          </pre>
          <p>此时，i 作为参数传到 clo 方法中，成为了 clo 的内部变量 n，此后即使 i 变化了，对于匿名函数而言，n 还是 clo 中的内部变量，还是那个 n</p>
        </article>
        <Msgboard path='closure' />
      </div>
    )
  }
}
