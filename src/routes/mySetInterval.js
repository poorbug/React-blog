import { Author, Msgboard } from 'components/'

import React from 'react'

export default class MySetInterval extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>用 setTimeout 实现 setInterval & clearInterval</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.06.27' path='setInterval' />
          <p>某一次面试面试官给出的题目, 代码如下：</p>
          <pre>
            <code>
{
`function mySetInterval(fn, timeout) {
  var clear = { flag: true }

  function intervalFn() {
    if (clear.flag === true) {
      fn()
      setTimeout(() => { arguments.callee() }, timeout)
    }
  }

  setTimeout(() => {
    intervalFn()
  }, timeout)
  return clear
}

function myClearInterval(clear) {
  clear.flag = false
}

var interval = mySetInterval(() => { console.log(1) }, 1000)
setTimeout(() => { myClearInterval(interval) }, 10000)`
}
            </code>
          </pre>
          <p>这个问题比较关键的一点是 <code>mySetInterval</code> 的返回值，将返回值指向函数内部的 <code>clear</code>，然后在外部通过指针改变返回值这个对象（外部叫<code> interval </code> 内部叫 <code> clear </code>）的内部的值(<code>flag</code>)，则函数内部指针所指向的对象(<code>clear</code>)也同时发生改变，此时终止递归，<code>interval</code>停止。 </p>
        </article>
        <Msgboard path='setInterval' />
      </div>
    )
  }
}
