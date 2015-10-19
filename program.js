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