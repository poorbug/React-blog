## 声明提升(hoisting)
```
(function(a){
    console.log(a);
    var a = 10;
    function a(){};
}(100))
```
问题由上面代码引出

[参考](http://www.cnblogs.com/Gary-Guoweihan/p/6251870.html)

Js代码分为两个阶段：**解析阶段** & **执行阶段**

#### 什么是提升？
函数声明与变量声明在解析阶段会被提升到相应作用域的顶部执行。

*1 函数声明的优先级大于变量声明

*2 赋值与运算会在原地等待直到执行阶段才运行

*3 解析阶段：函数声明的权重比变量声明的优先级高

```
console.log(a);
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
// 当同一个命名同时有函数声明与变量声明，函数声明优先级较高
```

```
if (true) {
  var a = 1
}

相当于

var a
if (true) {
  a = 1
}
// 判断语句不产生块作用域
```


