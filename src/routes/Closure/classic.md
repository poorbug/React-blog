[参考](http://www.cnblogs.com/xxcanghai/p/4991870.html)
```
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?
//问:三行a,b,c的输出分别是什么？
```

1.
```
a = {
  fun: function(m) {
    return fun(m, n)
  }
}

a.fun(1) = function(1) {
  return fun(1, 0)
}
// 0

a.fun(2) = function(2) {
  return fun(2, 0)
}
// 0
```

2.
```
fun(0) = {
  fun: function(m) {
    return fun(m, n)
  }
}
// u

fun(0).fun(1) = function(1) {
  return fun(1, 0)
}
// 0

fun(0).fun(1).fun(2) = fun(1, 0).fun(2) = function(2) {
  return fun(2, 1)
}
// 1

fun(0).fun(1).fun(2).fun(3) = fun(2, 1).fun(3) = function(3) {
  return fun(3, 2)
}
// 2
```

3.
```
c = fun(0).fun(1) = function(1) {
  return fun(1, 0)
}
// 0

fun(1, 0).fun(2) = fun(2, 0)
// 1
```
