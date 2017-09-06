## ES5
=== 

#### Array
- Array.isArray(a)
- arr.indexOf(e, i)
- arr.lastIndexOf(e, i) // 从第 i 个开始查找 e, 返回 index
- arr.every((item, index, arr)=>{}, context)
- arr.some((item, index, arr)=>{}, context) // 返回 boolean
- arr.forEach((item, index, arr)=>{}, context) // 无返回
- arr.map((item, index, arr)=>{}, context) // 返回一个映射数组
- arr.filter((item, index, arr)=>{}, context) // 返回一个过滤后的数组
- arr.reduce((sum, item, index, arr)=>{}, initialValue) // 返回累加结果
- arr.reduceRight((sum, item, index, arr)=>{}, initialValue)


#### String
- str.trim // 去掉头尾的换行与空格


#### Function
- fn.bind(target, arg1...) // 为 fn 指定 context(this 指向)


#### JSON
- JSON.parse()
- JSON.stringify()


#### Date
- Date.now  // 获取当前时间毫秒数


## ES6
===

#### let & const
let 不存在变量提升 // 死区


#### class & extends & super


#### () => {}
箭头函数的 this 为定义时所在的对象（箭头函数没有自己的 this 对象）


#### 模版字符串(template string)
```
`${str} is a string`
```

#### 解构(Destructuring)赋值
const { name, age } = me
const me = { name, age }

- 交换变量的值: [x, y] = [y, x];
- 返回多个值：let { foo, bar } = example();


#### 默认值(Default)
(me = 'poorbug') => {}


#### 剩余运算符 rest
const { name, age, ...others } = me


#### 数组
- 扩展运算符（spread）: [...arr]
- Array.from(obj) // 返回转化后的数组
- Array.of(5, 9, 1) // [5, 9, 1]
- [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
- arr.find((item, index, arr)=>{}) // 找到第一个符合的 item
- arr.findIndex((item, index, arr)=>{}) // 找到第一个符合的 item 的 index
- keys & values & entries // 获取相应遍历器
- arr.includes() // 返回 boolean


#### Symbol
- Symbol() 生成独一无二的值


#### Set & Map
1. set 类似于 Array，但是无重复成员，可用来去重 //new Set([...[1,2,1]]) = [1,2]
2. Map 类似于 Object，但是 key 可以是任何值，包括 Object


#### Promise
- Promise.all()
- Promise.race()
- Promise.resolve()
- Promise.reject()


#### class

- 类的所有实例共享一个原型对象

```
var p1 = new Point(2,3);
var p2 = new Point(3,2);

`p1.__proto__` === `p2.__proto__`


```
- 类不存在变量提升


#### 装饰器（Decorator）
- @connect({}, {})
- 用于修改类的行为


### 模块化(Module)
- 编译时加载 ／ 静态加载
- import 具有提升效果
- as
- singleton

优势：require() 为运行时加载（动态加载），需要加载所有的方法，再取出所需，import 只加载所需方法


- arr.find()
- arr.fill()
- 解构赋值
- 箭头函数
- let & const
- 模版字符串
- 剩余运算符
- 默认值
- 模块化
