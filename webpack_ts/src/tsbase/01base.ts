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
