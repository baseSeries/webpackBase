let num: number = 1000;
let num2 = 100;
let num3 = 0b11;
let num4 = 456;
let num5 = 0x789abc;

// 可推到出来的类型不加初始类型

let arr1: number[] = [1, 2];
let arr2: Array<number> = [2, 3];
// TS中尽量一个数组中存放一种类型的数据

let info = {
	name: "dang",
	age: 20,
};

// null undefined
let n1 = null;
n1 = 1;

// symbol
// unknown
let known: unknown;
known = 12345;
known = "123";

// let message:string = known;

// never
// 反向思考 穷举所有情况 列出错误情况且错误情况永远不会发生  如果发生请完善代码

// tuple  元组 适用较少数据的多种类型集合
let tupleArr: [string, number] = ["name", 123];

function useState<T>(state: T): [T, (newState: T) => void] {
	let currentState = state;
	let changeState = (newState: T) => {
		currentState = newState;
	};
	const tuple: [T, (newState: T) => void] = [currentState, changeState];
	return tuple;
}

const [counter, setCounter] = useState(10);
const [title, setTitle] = useState("abx");
const [flag, setFlag] = useState(true);

// as  !
type sex = "man" | "women";
type myObj = {
	name: string;
	age: sex;
};
let obj: myObj = {
	name: "dang",
	age: "man",
};

let el = document.getElementById("app") as HTMLInputElement;
el.value = "12";

type myFn = (name: string) => string;
const myFns: myFn = function (name: string): string {
	return name.repeat(5);
};
myFns("2");

interface NumberDictionary {
	[index: string]: number | string;
	length: number; // ok
	name: string;
}

// 函数类型
type footType = (name: number) => number;
function foot(name: string): string {
	return name;
}
const bar: footType = function (name) {
	return name;
};

// 函数当做参数传递
type fnType = (name: string) => string;
const paramsFn: fnType = function (name: string): string {
	return name;
};
const useFn = function (fn: fnType) {
	let name = "";
	fn(name);
};
useFn(paramsFn);

// 类型缩小  类型保护
// 1 type of
type cakeType = string | number;
// 2 switch
type sexType = "man" | "women";
// 3 instanceof
type DogType = {
	wang: () => void;
};
class Dog {
	wang() {}
}
let dog: DogType = new Dog();
type Cat = {
	maio: () => void;
};
//  in
type cakeObj = {
	name: string;
	width: number;
};
function boor(
	cake: cakeType,
	sex: sexType,
	animal: DogType | Cat,
	cakeInfo: cakeObj
): void {
	// typeof
	if (typeof cake === "number") {
	} else {
	}
	// 2 switch
	switch (sex) {
		case "man":
			console.log(sex);
			break;
		case "women":
			console.log(sex);
			break;
		default:
			console.log(sex);
	}
	// 3 instanceof
	if (animal instanceof Dog) {
	} else {
	}
	// in
	if (cake in cakeInfo) {
	} else {
	}
}
// 可选类型 需要写在必选类型的后面
// 可选类型属于
// 剩余参数
function sum(init: number, ...nums: number[]) {
	console.log(nums);
	// init 1
	// nums [2,3]
	let sums = 0;
	for (let value of nums) {
		sums += value;
	}
	console.log(init, sums);
}
sum(1, 2, 3);
