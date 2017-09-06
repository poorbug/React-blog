import { Author, Msgboard } from 'components/'

import React from 'react'

export default class Hoisting extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>声明提升(hoisting)</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.07.02' path='hoisting' />
          <pre>
            <code>
{
`(function(a){
    console.log(a);
    var a = 10;
    function a(){};
}(100))`
}
            </code>
          </pre>
          <p>问题由上面代码引出</p>
          <a href='http://www.cnblogs.com/Gary-Guoweihan/p/6251870.html' title='参考'>参考</a>
          <p>Js代码分为两个阶段：<strong>解析阶段</strong> & <strong>执行阶段</strong></p>
          <h2>什么是提升？</h2>
          <p>函数声明与变量声明在解析阶段会被提升到相应作用域的顶部执行。</p>
          <ol>
            <li>函数声明的优先级大于变量声明</li>
            <li>赋值与运算会在原地等待直到执行阶段才运行</li>
            <li>解析阶段：函数声明的权重比变量声明的优先级高</li>
          </ol>
          <pre>
            <code>
{
`console.log(a);
function a() {};
var a = 1;
console.log(a);

// 或者

console.log(a);
var a = 1;
function a() {};
console.log(a);

> function a(){}
> 1
// 当同一个命名同时有函数声明与变量声明，函数声明优先级较高`
}
            </code>
          </pre>
          <pre>
            <code>
{
`
if (true) {
  var a = 1
}

相当于

var a
if (true) {
  a = 1
}
// 判断语句不产生块作用域
`
}
            </code>
          </pre>
        </article>
        <Msgboard path='hoisting' />
      </div>
    )
  }
}
