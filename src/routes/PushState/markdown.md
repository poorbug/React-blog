### react-router 原理
===

1. 利用 `history.pushState` 改变页面所示 url
2. 添加一个 listener 用于监听 url 的变化，从而改变视图
