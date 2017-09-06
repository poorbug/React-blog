## 跨域资源共享（Cross-origin resource sharing）

[参考 - 阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)

[参考 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

### 什么是跨域

> 出于安全考虑，浏览器会限制从脚本内发起的跨域HTTP请求。

跨域问题是需要前后端协作的，以下情况会产生跨域:

1. 协议不同
2. 子域名不同
3. 端口不同

跨域请求分为简单请求与非简单请求

### 简单请求
有：

- HEAD
- GET
- POST
  - pplication/x-www-form-urlencoded
  - multipart/form-data
  - text/plain


浏览器自动加 `Origin`, 表示请求来源 // http://api.bob.com

`Origin` 在服务器许可范围，则返回信息会多出以下字段

```
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Content-Type: text/html; charset=utf-8
```

`Access-Control-Allow-Origin` 为请求的 `Origin` 或者 `*`, required

`Access-Control-Allow-Credentials` 默认为 `false`, 设置为 `true` 即表示请求带上 `cookie`

#### withCredentials
发送请求要带上 `cookie`, 服务器需要有 `Access-Control-Allow-Credentials`, AJAX 需要加上 `withCredentials`

* 发送 cookie 则 `Access-Control-Allow-Origin` 不能为 `*`

### 非简单请求
有：

- PUT
- DELETE
- PATCH
- ...
- Content-Type: application/json
- Content-Type 的值不属于下列之一:
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

发送一次预检请求（preflight request），方法为 `OPTIONS`(浏览器自动发送) 请求，包含：

- Origin
- Access-Control-Request-Method
- Access-Control-Request-Headers // 额外的头信息

### JSONP
定理：所有 src 属性的请求都不存在跨域问题

原理：

1. 客户端声明一个 JSONPCallback 方法，参数为服务端返回的 JSON 对象
2. get 请求服务端，参数为 JSONPCallback 方法名
2. 服务端将 JSON 对象打包进 JSONPCallback 以脚本的方式传回客户端
3. 客户端执行 JSONPCallback 获取 JSON 对象
