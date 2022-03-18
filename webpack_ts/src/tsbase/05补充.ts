import axios from "axios";
import _ from "lodash"; //npm i --save-dev @types/lodash
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
	console.log(res, "res");
});

console.log(_.joins(["1", "2"]));
dangDang = "jisn";
// .ts  .d.ts
// .d.ts  声明类型的文件
