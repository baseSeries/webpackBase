// 默认推导
// ts默认推到出this
{
	const info = {
		name: "dang",
		eating() {
			console.log(this.name);
		},
	};

	// 推导不出
	type thisType = { name: string };
	function eating(this: thisType, message: string) {
		console.log(this.name);
	}
	const info2 = {
		name: "dang",
		eating: eating,
	};
	// 隐式绑定
	info.eating();
	// 显示绑定
	info2.eating("哈哈");
	eating.call({ name: "dang" }, "呵呵");
	eating.apply({ name: "dang" }, ["弟弟"]);

	// 函数重载
	// 联合类型对参数 操作很麻烦

	// 重载 overload 将函数的声明和函数体分开
	function add(num1: number, num2: number): number;
	function add(num1: string, num2: string): string;
	function add(num1: any, num2: any): any {}

	let result = add(1, 2);
	let result2 = add("1", "2");
	console.log(result, result2);

	// 函数的重载不能直接执行函数体 必须要匹配到声明的函数
	// add({ name: "dang" }, { age: 18 });
}

{
	// 类
	class Person {
		// 类型注解
		name: string;
		age: number;
		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}
		eating() {
			console.log(this.name + "age:" + this.age);
		}
	}

	let person = new Person("dang", 29);
}
{
	class Person {
		name: string;
		age: number;
		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}
		eating() {
			console.log(this.name + "eating");
		}
	}
	// 类的继承 extends
	class Student extends Person {
		sno: number;
		constructor(name: string, age: number, sno: number) {
			super(name, age);
			this.sno = sno;
		}
		// 重写
		eating() {
			console.log(this.name + "eating");
			super.eating();
		}
		studying() {
			console.log("studying");
		}
	}
	class Teacher extends Person {
		constructor(name: string, age: number) {
			super(name, age);
		}
	}
	let students = new Student("dang", 18, 1);
}

{
	// 多态
	// 父类引用指向子类对象 const animals:Animal = new Dog()
	// 多态的目的是为了写出更通用的代码
	class Animal {
		action() {
			console.log("Animal action");
		}
	}
	class Dog extends Animal {
		action() {
			console.log("Dog run");
		}
	}
	class Fish extends Animal {
		action() {
			console.log("Fish swim");
		}
	}

	function makeAnimalAction(action: Animal[]) {
		action.forEach((item) => {
			console.log(item.action);
		});
	}
	makeAnimalAction([new Dog(), new Fish()]);
}
{
	// 类成员的修饰符
	// public
	//  private 仅用自身类内部调用访问
	// protected 受保护的 在类中和子类中访问
	// readonly 只读属性  若是对象 则可以修改类似于const
	class Person {
		readonly name: string;
		private aeg: number;
		protected son: number;
		constructor(name: string, age: number, son: number) {
			this.name = name;
			this.aeg = age;
			this.son = son;
		}
	}
	class Student extends Person {
		getName() {
			return this.son;
		}
	}
}

{
	// get set
	class Person {
		private _name: string;
		age: number;
		constructor(name: string, age: number) {
			this._name = name;
			this.age = age;
		}
		get name() {
			return this._name;
		}
		set name(newVal) {
			this._name = newVal;
		}
	}

	let person = new Person("dang", 18);
	console.log(person.name);
	person.name = "bo";
}
{
	// 静态成员
	class Student {
		static time: string = "20:00";
		static getTime() {
			return Student.time;
		}
	}
	Student.getTime();
}

{
	// 抽象类
	// 只定义方法 不进行实现  在子类中必须实现抽象类的方法
	// abstract
	abstract class Person {}
}
{
	// interface 接口
	// 和type 差不多
	// 可定义只读属性
	interface IInfo {
		name: string;
		age?: number;
		eating: (flag: boolean) => boolean;
	}
	const info: IInfo = {
		name: "dang",
		eating(boolean) {
			return !!boolean;
		},
	};
}
{
	// 索引类型
	interface IFontLanguage {
		[index: number]: string;
	}
	const fontLanguage: IFontLanguage = {
		1: "Vue",
		2: "JavaScript",
		3: "Node",
		// "aba":'1'
	};
}
{
	// 函数类型

	// 1  type实现
	type addType = (num1: number, num2: number) => number;
	const useAdd = function (num1: number, num2: number, addFn: addType) {
		return addFn(num1, num2);
	};
	const add: addType = function (num1: number, num2: number): number {
		return num1 + num2;
	};
	useAdd(1, 2, add);

	// interface实现
	interface IAddType {
		// 动态调用接口
		(num1: number, num2: number): number;
	}
	const useAdd1 = function (num1: number, num2: number, addFn: IAddType) {
		return addFn(num1, num2);
	};
	const add2: IAddType = function (num1: number, num2: number): number {
		return num1 + num2;
	};
	useAdd1(2, 3, add2);
}
{
	// 接口继承
	// 使用extends关键字实现继承 集成多个接口时用逗号隔开，
	interface ISwim {
		swimming: () => void;
	}
	interface IFly {
		fly: () => void;
	}

	// 继承相当于交叉类型
	interface IAction extends ISwim, IFly {}
	const action: IAction = {
		swimming() {},
		fly() {},
	};

	// & 交叉类型
	type MyType1 = ISwim | IFly;
	type MyType2 = ISwim & IFly;

	const obj1: MyType1 = {
		fly() {},
	};
	const obj2: MyType2 = {
		swimming() {},
		fly() {},
	};
}
