import { Link } from 'react-router'
import React from 'react'
import s from './style'

export default class Home extends React.Component {
  render() {
    return (
      <div className={s.box}>
      	<h1>Coding Muscle</h1>
      	<p><Link to='me' >🚲 Poorbug</Link></p>
      	<ul>
          { /* <li><Link to='resume' >简历</Link></li> */ }
          <li><Link to='getup' >React 博客工程 上线</Link></li>
          <li><Link to='threejs' >Three.js 起手式</Link></li>
          <li><Link to='app' >新 SpeedX App 页面开发总结</Link></li>
          <li><Link to='setInterval' >用 setTimeout 实现 setInterval & clearInterval</Link></li>
          <li><Link to='closure' >我是如何发现闭包的</Link></li>
          <li><Link to='render' >浏览器渲染过程</Link></li>
          <li><Link to='normal-flow' >普通流(Normal flow)</Link></li>
          <li><Link to='hoisting' >声明提升(Hoisting)</Link></li>
          <li><Link to='scope-chain' >作用域链(Scope chain)</Link></li>
          <li><Link to='cors' >跨域(CORS)</Link></li>
      	</ul>
      </div>
    )
  }
}
