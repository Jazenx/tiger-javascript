// 引用类型

// 引用类型的值（对象）是引用类型的一个实例。
// 对象是某个特定引用类型的实例
var person = new Object();
// Object类型
// 创建Object的两种方式
// 1.使用new操作符后跟Object构造函数
var person = new Object();
person.name = 'jason';
person.age = 25;
// 2.使用对象字面量表示法 推荐
var person = {
    name: 'jason',
    age: 25
}

// Array类型
var colors = new Array(); // 使用Array构造函数
var colors = new Array(20); //  定义length属性
var colors = new Array('red', 'blue', 'green'); // 非数值参数会创建值
var colors = ['red', 'blue', 'green']; // 字面量创建
// 检测数组
Array.isArray(value);
// 转换方法
var colors  = ['red', 'blue', 'green'];
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // [ 'red', 'blue', 'green' ]
console.log(colors); // [ 'red', 'blue', 'green' ]
console.log(colors.join('||')); //red||blue||green
// 队列方法
// 访问规则：栈数据结构->后进先出;队列数据结构->先进先出（FIFO）
var colors = new Array();
var count = colors.push('red', 'green'); // 向数组末端推入2项 
console.log(count); // 2
count = colors.push('black'); // 推入另外一项
console.log(colors);
console.log(count); // 3
var item = colors.shift(); // 取得第一项
console.log(item); // 'red'
console.log(colors.length); // 2 
// shift() ：移除数组中的第一项并返回该项，同时将数组长度减1
// unshift() ：在数组前端添加任意个项并返回新数组的长度
var colors = new Array();
var count = colors.unshift('red', 'green');
console.log(count); // 2
count = colors.unshift('black');
console.log(count); // 3
var item = colors.pop(); // 取得最后一项
console.log(item); // 'green'
console.log(colors.length); // 2 
// 重排序方法
// reverse()
var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values); // [ 5, 4, 3, 2, 1 ]
// sort() 转换成字符串后比较
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); // [ 0, 1, 10, 15, 5 ] 不符合需求
// sort(func)
var values = [0, 1, 5, 10, 15];
function compare(value1, value2) {  
    if(value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0
    }
}
values.sort(compare); // [ 0, 1, 5, 10, 15 ]
console.log(values);
// 操作方法
// concat() 基于当前数组中的所有项创建一个新数组
var colors = ['red', 'green', 'blue'];
var colors2 =  colors.concat('yellow', ['black', 'brown']);
console.log(colors); // [ 'red', 'green', 'blue' ]
console.log(colors2); // [ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]
// slice() 基于当前数组中的一个或多个项创建一个新数组
var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);
console.log(colors2); // [ 'green', 'blue', 'yellow', 'purple' ]
console.log(colors3); // [ 'green', 'blue', 'yellow' ]
// slice() 最强大的数组方法
// 删除 splice(0, 2) 会删除数组中的前两项
// 插入 splice(2, 0, 'red', 'green') 会从当前数组位置2的项开始插入字符串'red','green'
// 替换 splice(2, 1, 'red', 'green') 会删除当前数组位置2的项，然后从当前数组位置2的项开始插入字符串'red','green'
// 位置方法
// indexOf() lastIndexOf() 接收两个参数：要查找的项和表述查找起点位置的索引
var num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(num.indexOf(4));
// 迭代方法
num.every(callbackfn) // 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
num.filter(callbackfn, value) // 对数组中的每一项运行给定函数，返回该函数返回true的项组成的数组
num.forEach(callbackfn) // 对数组中的每一项运行给定函数，这个方法没有返回值
num.map(callbackfn) // 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
num.some(callbackfn) // 对数组中的每一项运行给定函数，如果该函数对任一都返回true，则返回true
// 归并方法
// reduce() 和 reduceRight() 这两个方法都会迭代数组的所有项，然后构建一个最终返回的值
// 接收四个参数：前一个值、当前值、项的索引、数组对象
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
    return prev + cur;    
})
console.log(sum);

// Date类型
var date = new Date();
Date.parse('May 25, 2004') // 接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
Date.UTC(year, month) // 接收年月 
Date.now() // 返回表示调用这个方法时的日期和时间的毫秒数
// 继承的方法
tiLocaleString()
toString()
valueOf()
// 以上三个并没有什么软用
// 日期格式化方法
toDateString() // 以特定于实现的格式化显示星期几、月、日和年；
toTimeString() // 以特定于实现的格式显示时、分、秒和时区；
toLocaleDateString() // 以特定于实现的格式显示时、分、秒和时区；
toLocaleTimeString() // 以特定于实现的格式显示时、分、秒；
toUTCString() // 以特定于实现的格式显示完整的UTC日期。
// 日期/时间组件方法 UTC日期指的是没有时区偏差的情况下（暂不归纳）
getTime() // 返回表示日期的毫秒数；与valueOf()方法返回的值相同
setTime() // 以毫秒设置日期，会改变整个日期
getFullYear() // 取得4位数的年份
setFullYear() // 设置日期的年份，传入的年分值必须是4位数字

