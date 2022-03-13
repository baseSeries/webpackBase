// 基本思路时 有一个类 搜集一个属性被依赖的函数  放到一个集合中 当这个属性改变时  执行被收集的函数

class Dep {
    constructor() {
        this.subscribe = new Set();
    }
    addEffect (effect) {
        this.subscribe.add(effect);
    }
    notify () {
        this.subscribe.forEach(effect => { effect() });
    }
}

let dep = new Dep();

let counter = 100;

let dbCounter = function () {
    console.log(counter * 2);
}
dep.addEffect(dbCounter)

let powCounter = function () {
    console.log(counter * counter);
}
dep.addEffect(powCounter)

counter = counter * 2
dep.notify()