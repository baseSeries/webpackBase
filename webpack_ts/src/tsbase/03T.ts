{
	// 类 继承只能实现单继承
	// 实现 实现接口 类可以实现接口 implement

	interface ISwim {
		swimming: () => void;
	}
	interface IEat {
		eatings: () => void;
	}

	class Animal {}
	class Fish extends Animal implements ISwim, IEat {
		swimming() {
			console.log("Fish");
		}
		eatings() {
			console.log("object");
		}
	}
	class Person implements ISwim, IEat {
		swimming() {
			console.log("person");
		}
		eatings() {
			console.log("object");
		}
	}

	function swimAction(swimAble: ISwim) {
		swimAble.swimming();
	}
	swimAction(new Fish());
	swimAction(new Person());
}

{
	// interface和type的区别
	// 非对象类型 推荐type
	interface IFoo {
		name: string;
	}
	interface IFoo {
		age: number;
	}
	// 重复定义 接口会合并  type 不行
}
{
	// 字面量赋值
	interface IPerson {
		name: string;
		age: number;
	}
	// 如果直接给p1实现接口IPerson 报错
	// const p1: IPerson ={
	//     name:"dang",
	//     age:18,
	//     address:"北京"
	// }
	const p1 = {
		name: "dang",
		age: 18,
		address: "北京",
	};
	// refreshNess 擦除
	const p2: IPerson = p1;
	console.log(p2);
}

{
	//  枚举
	// 名称常量
	// enum Direction {
	// 	LEFT,
	// 	RIGHT,
	// 	TOP,
	// 	BOTTOM,
	// }
	enum Direction {
		LEFT = 100,
		RIGHT, //101
		TOP, //102
		BOTTOM, //103
	}
	function getDirection(direction: Direction) {}
	getDirection(Direction.LEFT);
}
{
	// 泛型 T
	function add<T>(num1: T): T {
		return num1;
	}
	// 1 明确的传入类型<T>
	add<number>(1);
	add<{ name: string }>({ name: "dang" });
	add<any[]>(["1"]);

	// 类型推到
	add(20);
	add("20");

	function foo<T, W>(x: T, y: W) {}
	foo<number, string>(1, "2");

	/*
	 *T  type的缩写
	 *K  V  key和value的缩写
	 *O   object的缩写
	 *E    element
	 *H    htmlElement
	 */
}

{
	// 泛型接口
	interface IPerson<T1 = string, T2 = number> {
		name: T1;
		age: T2;
	}
	// const p: IPerson<string, number> = {
	// 	name: "dang",
	// 	age: 29,
	// };
	const p: IPerson = {
		name: "dang",
		age: 29,
	};

	class Point<T> {
		x: T;
		y: T;
		z: T;
		constructor(x: T, y: T, z: T) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}
	let p1 = new Point(1, 2, 3);
	let p2 = new Point<number>(1, 2, 3);
	let p3: Point<number> = new Point(1, 2, 3);
}
{
	// 类型约束
	interface ILength {
		length: number;
	}
	// T 限制为ILength的子类
	function getLength<T extends ILength>(num: T) {
		return num.length;
	}
	getLength("2");
	getLength([2, 3]);
	getLength({ length: 3 });
	getLength(function () {});
}
