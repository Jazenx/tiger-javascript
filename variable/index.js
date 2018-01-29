// 基本类型和引用类型的值
// 基本数据类型：Undefined、Null、Boolean、Number、String。
// 引用类型的值是保存在内存中的对象。JavaScript不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。
// 在操作对象时，实际上是在操作对象的应用而不是实际的对象。

// 动态的属性
// 对于引用类型的值，可以增删改属性和方法
var person = new Object();
person.name = "Jason";
console.log(person.name);  // "Jason"
// 不能给基本类型的值添加属性
var name = "Rose";
name.age = 123;
console.log(name.age); // undefined

// 复制变量值
// 基本类型：将存储在变量对象中的值复制一份放到为新变量分配的空间中。
// 引用类型：复制的是指向存储在堆中的一个对象地址的指针。

// 传递参数
// 参数只能按值传递
// 基本类型：被传递的值会被复制给一个局部变量。
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
console.log(count); // 20, 没有变化
console.log(result); // 30
// 引用类型：会把传递的值在内存中的地址复制给一个局部变量
function setName(obj) {
    obj.name = 'Jason';
}
var person = new Object();
setName(person);
console.log(person.name); // "Jason"
// 当在函数内部重写obj时，这个变量引用的就是一个局部对象了，而这个局部对象会在函数执行完毕后立即被销毁
function setName(obj) {
    obj.name = 'Jason';
    obj = new Object();
    obj.name = 'Gery';
}
var person = new Object();
setName(person);
console.log(person.name); // 'jason'

// 检测类型
// 基本类型：typeof 
// 引用类型：instanceof 检测对象 返回true or false
result = variable instanceof Object;
console.log(person instanceof Object);
console.log(person instanceof Array);
console.log(person instanceof RegExp);

// 执行环境及作用域
// 执行环境定义了变量或函数有权访问的其他数据，决定了它们的各自行为
// 作用域链：当代码在一个环境中执行时，会创建变量对象的一个作用域链。保证对执行环境有权访问的所有变量和函数的有序访问。
// 没有块级作用域 es6后有
// 声明变量：使用var声明的变量会自动被添加到最接近的环境中。如果没有使用var声明，变量会被自动添加到全局环境。
// 查询表示符：查询过程从作用域的前端开始，向上逐级查询与给定名字匹配的标识符，一层层向上，全局变量结束。

// 垃圾收集 看看就好




