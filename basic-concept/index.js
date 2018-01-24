// JavaScript的基本概念。

// ECMAScript中的一切（变量、函数名和操作符区分大小写。

/* 
标识符规范
    1.第一个字符必须是字母、下划线、或一个美元符号。剩余其他字符随意。
    2.ECMAScript标识符采用驼峰大小写格式。like： doSomethingImportant
 */

// 严格模式
// "use strict"

// 变量
// ECMAScript的变量是松散类型的，可以用来保存任何类型的数据。每个变量只是一个用于保存值的占位符而已

/* 
数据类型
    基本数据类型：Undefined、Null、Boolean、Number、String。
    复杂数据类型：Object：本质上是由一组无序的名值对组成的。 
 */

// typeof操作符
var message = "some string";
console.log(typeof message); // "string"
console.log(typeof (message)); // "string"
console.log(typeof 88); // "number"

// Undefined类型
var message2;
console.log(message2 == undefined); // true
var message3 = undefined;
console.log(message3 == undefined); // true

// Null类型
// null值表示空指针
var car = null;
console.log(typeof car); // "Object"

// Boolean类型
// true or false
// 要将一个值转换为其对应的Boolean值，可以调用函数Boolean()
var message4 = "hello word";
var msg4AsBoolean = Boolean(message);
console.log(msg4AsBoolean); // true

// Number类型
var intNum = 88; // 整数
var octalNum = 070; // 56 8进制，第一位为0，然后是8进制数字序列（0-7）
var hexNum = 0xA; // 10 16进制 0x + (0-7 & a-f)
// 浮点数值
var floatNum = 3.125e+7; // 等于 31250000
// 数值范围
var max = Number.MAX_VALUE;
var min = Number.MIN_VALUE;


/* NaN(非数值 Not a Number)
    1.任何设计NaN的操作都会返回NaN
    2.NaN与任何值不相等
 */
console.log(NaN == NaN); // false
isNaN() // 判断是否为NaN
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN('10')); // false （可以被转换成数值10）
console.log(isNaN('bule')); // ture (不能转换成数值)
console.log(isNaN(true)); // false (可以转换成数值1)

// 数值转换
Number('123');
parseInt('AF', 16) // 十六进制解析
parseFloat('23.2') // 只解析十进制

// String类型
// 字符字面量 \n \t \b \r \\ \' \" \xnn \unnnn
// 字符串的特点：字符串是不可变的
// 转换为字符串
var age2 = 11;
var ageAsString = age2.toString(); // 字符串"11"
var flag = true;
var flagAsString = flag.toString(); // 字符串"true"
toString(10); // 参数默认十进制

// 在不知道要做转换的值是不是null或undefined情况下使用String()
var value = null;
console.log(String(value)); // "null" ubdefined同理

// Object类型
var obj = new Object();
/* 
Object的每个实例都具有下列属性和方法
    1.constructor: 构造函数，保存着用于创建当前对象的函数。
    2.hasOwnProperty(propertyName): 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在，propertyName必须以字符串形式指定。
    3.isPrototypeOf(object): 用于检查传入的对象是否是当前对象的原型。
    3.propertyIsEnumerable(propertyName): 用于检查给定的属性是否能够使用for-in语句来枚举。
    4.toLocaleString(): 返回对象的字符串表示，该字符串与执行环境的地区对应。
    5.toString(): 返回对象的字符串表示。
    6.valueOf(): 返回对象的字符串、数值或布尔值表示
 */

// 一元操作符（只能操作一个值的操作符）
// 递增和递减操作符
// 前置型递增和递减（副效应）
var age3 = 29;
++age3; // 等同于 age3 = age3 + 1;
var age4 = 29;
var anotherAge = --age4 + 2;
console.log(age4); // 28
console.log(anotherAge); // 30 

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2 // 21; num1 => 1
var num4 = num1 + num2 // 21

// 后置型递增和递减(递增和递减操作是在包含它们的语句被求值后才执行)
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2; // 22 num1 = 2 自己解释一波 num1(2) 先于 num2 做加法，然后才执行递减操作
var num4 = num1 + num2; // 21 num1 = 1

// 一元加和减操作符
// + 就像Number()
// - 用于表示负数
var numy = 25;
numy = -numy; // -25

// 位操作符
var numx = -18;
console.log(numx.toString(2)); // "-10010"
// 按位非（NOT）~ 返回数值的反码
var num1 = 25;
var num2 = ~num1;
console.log(num2); // -26
// 按位与（AND） & 将两个数值的每一位对齐 按照与返回每位值
var result = 25 & 3;
console.log(result); // 1
// 按位或（OR） | 将两个数值的每一位对齐 按照或返回每位值
var result = 25 | 3;
console.log(result); // 27
// 按位异或（OR） | 将两个数值的每一位对齐 按照异或返回每位值
var result = 25 ^ 3;
console.log(result); // 26
// 左移（不会影响操作数的符号位）
var oldValue = 2; // 等于二进制的10
var newValue = oldValue << 5; // 等于二进制的1000000，十进制的64
// 有符号的右移
var oldValue = 64; // 等于2进制的1000000
var newValue = oldValue >> 5; // 等于二进制的10,即十进制的2
// 无符号右移
var oldValue = 64; // 等于2进制的1000000
var newValue = oldValue >>> 5; // 等于二进制的10,即十进制的2
var oldValue = -64; // 等于2进制的1111111111111111111111111000000
var newValue = oldValue >>> 5; // 十进制的134217726

// 布尔操作符
// 逻辑非 !
// 逻辑与 &&
// 逻辑或 ||

// 乘性操作符
// 乘法 *
// 除法 /
// 求模（余数） % 

// 加性操作符
// 加法 +
// 减法 -

// 关系操作符 < > <= >=

// 相等操作符
// 相等和不想等 == !=
// 全等和不全等 === !==
// 条件操作符(三目运算符)
variable = boolean_expression ? true_value : false_value;
// 赋值操作符 =
// 逗号操作符
var num1 = 1, num2 = 2, num3 = 3;
var num = (2, 1, 3, 4, 7, 9); // num = 9

// 语句
// if语句(推荐代码块)
if (i > 25) {
    console.log("Greater than 25.");
} else if (i < 0 ) {
    console.log("Less than 0.");
} else {
    console.log("Between 0 and 25, inclusive.");
}
// do-while语句
do {
    statement
} while (expression);
// while语句
while(expression) {
    statement
}
// for语句
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// for-in 语句 一种精准的迭代语句，可以用来枚举对象的属性
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
    }
}
// label 语句
label: statement

start: for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// break和continue语句
// break语句会立即退出循环，强制继续执行循环后面的语句
// continue语句虽然也是立即退出循环，但退循环后会从循环的顶部继续执行
// with语句（不建议使用）
// switch语句
switch (key) {
    case value:
        
        break;

    default:
        break;
}

// 函数
function name(params, params1) {
    statement
}
// 理解参数
// 调用函数传参可以传递任意参数。ECMAScript中的参数在内部使用一个数组来表示的
// 函数体内可以通过arguments对象来访问这个参数数组
function sayHi() {
    console.log('hello' + arguments[0] + ',' + arguments[1]);
    console.log(arguments.length); // 查看传递多少个参数
}
// 没有重载