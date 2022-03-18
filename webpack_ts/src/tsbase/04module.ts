{
	// namespace
}

// export function format(time:string){
//     return "2022-2-2"
// }
// export function format(price:number){
//     return 2022
// }
// 导出命名空间 才能在外部使用
export namespace time {
	export function format(time: string) {
		return time;
	}

	export const times = "23";
}
namespace price {
	export function format(price: number) {
		return price;
	}
}
time.format("2022-2");
time.times;
price.format(2022);
