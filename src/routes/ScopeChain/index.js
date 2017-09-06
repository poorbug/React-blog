import { Author, Msgboard } from 'components/'

import React from 'react'

export default class ScopeChain extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>作用域链(scope chain)</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.07.02' path='scopechain' />
          <a href='https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html' title='参考'>参考</a>
          <h2>this 指向谁？</h2>
          <p>this 为当前执行环境的对象，全局即为 window</p>
          <h2>function 中的 this 指向谁？</h2>
          <p>这得看 function 是在哪调用的，同一个 function 在不同的环境中调用，this 也指向不同对象。同一个 function 的每次调用都是独立的。</p>
          <h2>什么是执行上下文（Execution Context）？</h2>
          <p>方法的执行环境，可以抽象理解为一个 Object。主要有三个属性：变量对象(variable object)，this指针(this value)，作用域链(scope chain)。</p>
          <h2>执行上下文栈(Execution Context Stack)</h2>
          <p>一系列活动的执行上下文从逻辑上形成一个栈。栈底总是全局上下文，栈顶是当前（活动的）执行上下文。</p>
          <h2>什么是作用域链(scope chain)？</h2>
          <p>当前执行环境的作用域向上延伸直到全局作用域所形成的链。查找变量的时候，从当前环境依次向上寻找直到找到为止。</p>
          <p>作用域链：函数环境 -> 父级环境 -> ... -> 直到 window</p>
        </article>
        <Msgboard path='scopechain' />
      </div>
    )
  }
}
