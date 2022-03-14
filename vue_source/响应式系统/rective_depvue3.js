// 基本思路时 有一个类 搜集一个属性被依赖的函数  放到一个集合中 当这个属性改变时  执行被收集的函数

class Dep {
    constructor() {
        this.subscribe = new Set();
    }
    depend () {
        //    依赖的收集
        if (activeEffect) {

            this.subscribe.add(activeEffect)
        }
    }
    notify () {
        this.subscribe.forEach(effect => { effect() });
    }
}

let activeEffect = null
function watchEffect (effect) {
    activeEffect = effect;
    effect()//首次调用 调用get set 自动收集依赖
    activeEffect = null
}

// vue 中的dep 是map引用另一个map
let targetMap = new WeakMap()
function getDep (target, key) {
    // 根据target 取出对应的map对象 没有就创建一个map对象
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    // 取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep)
    }
    return dep
}

// vue方式 对数据进行劫持 然后依赖收集
function reactive (raw) {
    return new Proxy(raw, {
        get (target, key) {
            let dep = getDep(target, key)
            dep.depend()
            return target[key]
        },
        set (target, key, newValue) {
            let dep = getDep(target, key)
            target[key] = newValue
            dep.notify()
        }
    })


}



// 测试代码
let info = reactive({ name: 'dang', age: 100 });
let foo = reactive({ height: 18 })

watchEffect(function () {
    console.log("effect1", info.age, info.name);
})
watchEffect(function () {
    console.log("effect2", info.age * info.age);
})
watchEffect(function () {
    console.log("effect3", info.age, foo.height);
})
watchEffect(function () {
    console.log("effect4", foo.height);
})

info.age++
// foo.height++
