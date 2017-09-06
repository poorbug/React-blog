import { Author, Msgboard } from 'components/'

import React from 'react'

export default class Cors extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>跨域（CORS: Cross-Origin Resource Sharing)</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.09.04' path='cors' />
          <ol>
            <li><a href='http://www.ruanyifeng.com/blog/2016/04/cors.html' title='参考 - 阮一峰'>参考 - 阮一峰</a></li>
            <li><a href='https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS' title='参考 - MDN'>参考 - MDN</a></li>
          </ol>
          <h2>什么是跨域</h2>
          <blockquote>出于安全考虑，浏览器会限制从脚本内发起的跨域HTTP请求。</blockquote>
          <p>跨域问题是需要前后端协作的，以下情况会产生跨域: </p>
          <ol>
            <li>协议不同</li>
            <li>子域名不同</li>
            <li>端口不同</li>
          </ol>
          <p>跨域请求分为简单请求（simple request）与非简单请求（not-so-simple request）</p>
          <h2>简单请求</h2>
          <p>有：</p>
          <ul>
            <li>HEAD</li>
            <li>GET</li>
            <li>POST
              <ul>
                <li>pplication/x-www-form-urlencoded</li>
                <li>multipart/form-data</li>
                <li>text/plain</li>
              </ul>
            </li>
          </ul>
          <p>浏览器自动加 <code>Origin</code>, 表示请求来源 // http://api.bob.com</p>
          <p><code>Origin</code> 在服务器许可范围，则返回信息会多出以下字段</p>
          <pre>
            <code>
{
`Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Content-Type: text/html; charset=utf-8`
}
            </code>
          </pre>
          <p><code>Access-Control-Allow-Origin</code> 为请求的 <code>Origin</code> 或者 <code>*</code>, required</p>
          <p><code>Access-Control-Allow-Credentials</code> 默认为 <code>false</code>, 设置为 <code>true</code> 即表示请求带上 <code>cookie</code></p>
          <h3>withCredentials</h3>
          <p>发送请求要带上 <code>cookie</code>, 服务器需要有 <code>Access-Control-Allow-Credentials</code>, AJAX 需要加上 <code>withCredentials</code></p>
          <p>* 发送 cookie 则 <code>Access-Control-Allow-Origin</code> 不能为 <code>*</code></p>
          <h2>非简单请求</h2>
          <p>有：</p>
          <ul>
            <li>PUT</li>
            <li>DELETE</li>
            <li>PATCH</li>
            <li>...</li>
            <li>Content-Type: application/json</li>
            <li>Content-Type 的值不属于下列之一:
              <ul>
                <li>application/x-www-form-urlencoded</li>
                <li>multipart/form-data</li>
                <li>text/plain</li>
              </ul>
            </li>
          </ul>
          <p>发送一次预检请求（preflight request），方法为 <code>OPTIONS</code> (浏览器自动发送) 请求，包含：</p>
          <ul>
            <li>Origin</li>
            <li>Access-Control-Request-Method</li>
            <li>Access-Control-Request-Headers // 额外的头信息</li>
          </ul>
          <h2>JSONP</h2>
          <p>定理：所有 src 属性的请求都不存在跨域问题</p>
          <p>原理：</p>
          <ol>
            <li>客户端声明一个 JSONPCallback 方法，参数为服务端返回的 JSON 对象</li>
            <li>get 请求服务端，参数为 JSONPCallback 方法名</li>
            <li>服务端将 JSON 对象打包进 JSONPCallback 以脚本的方式传回客户端</li>
            <li>客户端执行 JSONPCallback 获取 JSON 对象</li>
          </ol>
        </article>
        <Msgboard path='cors' />
      </div>
    )
  }
}
