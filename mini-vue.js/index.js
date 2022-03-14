// createApp需要返回一个对象 带有mount函数
function createApp (rootComponent) {
    return {
        mount (select) {
            const container = document.querySelector(select)
            // 根组件是否挂载过 是挂载还是刷新 
            let isMounted = false
            let oldVNode = null
            // 使用watchEffect 来进行数据的依赖收集
            // 因为调用render函数的时候使用了data中的数据
            watchEffect(() => {
                if (!isMounted) {
                    oldVNode = rootComponent.render()
                    mount(oldVNode, container)
                    isMounted = true
                } else {
                    let newVNode = rootComponent.render()
                    patch(oldVNode, newVNode)
                    oldVNode = newVNode

                }
            })

        }
    }

}