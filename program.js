document.writeln('hello,world!');

var add = function (a , b){
	return a + b;
}
//当一个函数保存为一个对象的属性时，称它为一个方法。当一个方法被调用时this绑定到该对象（方法调用模式 ）
var myObject = {
	value : 0,
	increment : function (inc) {
		this.value += typeof inc ==="number" ? inc : 1;
	}
}

myObject.increment();
document.writeln(myObject.value);
myObject.increment();
document.writeln(myObject.value);
//当一个函数并非一个对象的属性时，它被当做一个函数来调用（函数调用模式）
myObject.doublefun = function(){
	var that = this;
	var helper = function () {
		that.value = add(that.value , that.value);
		
	}
	helper();//以函数的形式调用
}
myObject.doublefun();
console.info(myObject);
document.writeln(myObject.value);
//apply调用模式
var func1 = function() {
    this.name = "程序员";
};
func1.apply(null);
alert(name);//name此时变成全局变量(apply在这里相当于函数调用)

var func2 = function() {
    this.name = "程序员2";
};
var o = {};
func2.apply(o);
alert(o.name);//apply在这里相当于方法调用

//js 中的函数调用有四种模式，分别是：函数式、方法式、构造 器式和 apply 式. 而这些模式中，this 的含义分别为：在函数中 this 是全局对象 window，在方 法中 this 指当前对象，在构造函数中 this 是被创建的对象，在 apply 模式中 this 可以随意的指定.。在 apply 模式中如果使用 null，就是函数模式，如果使用对象，就是方法模式。

//给类型增加方法：
Function.prototype.method = function (name , func ){
	this.prototype[name] = func;//测试的时候发现，此处的name可以当做变量传入，但写成this.prototype.name时，变量name不能传入，直接定义为name了。
	return this;
}

function Person(name){
    this.name=name;//每个person实例对象私有属性
}
            
Person.prototype.share=[];//每个person实例对象共有属性（原型的主要作用）
            
Person.prototype.printName=function(){
	alert(this.name);
}
Person.method("hello",function(){alert("hello!")});
var person1= new Person("haojiahong");
person1.share.push(11);
person1.printName();//这个属于方法模式调用，所以在printName函数中可以使用this.name。
person1.hello();
var person2 = new Person("haoshuai");
person2.printName();
person2.share.push(22);
console.info(person1);
console.info(person1.share);//测试share是否是person1和person2共有属性
console.info(person2.share);

//Javascript有两组相等运算符，一组是==和!=，另一组是===和!==。前者只比较值的相等，后者除了值以外，还比较类型是否相同。

