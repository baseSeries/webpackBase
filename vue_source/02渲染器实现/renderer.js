function h (tag, props, child) {
    return { tag, props, child }
}
function mount (VNode, container,) {

    let el = VNode.el = document.createElement(VNode.tag)

    if (VNode.props) {
        for (let key in VNode.props) {
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLocaleLowerCase(), VNode.props[key])
            } else {
                el.setAttribute(key, VNode.props[key])
            }

        }
    }
    if (VNode.child) {
        if (typeof VNode.child == "string") {
            el.textContent = VNode.child
        } else {
            VNode.child.forEach(item => {
                mount(item, el)
            })
        }
    }

    container.appendChild(el)

}

function patch (n1, n2) {
    if (n1.tag != n2.tag) {

        let elParent = n1.el.parentNode
        elParent.removeChild(n1.el)
        mount(n2, elParent)
    } else {
        let el = n2.el = n1.el
        let newProps = n2.props || {}
        let oldProps = n1.props || {}
        // 处理props
        // 追加新的props
        for (let key in newProps) {
            let newValue = newProps[key]
            let oldValue = oldProps[key]
            if (newValue != oldValue) {
                if (key.startsWith('on')) {
                    el.addEventListener(key.slice(2).toLocaleLowerCase(), newValue)
                } else {
                    el.setAttribute(key, newValue)
                }
            }
        }

        // 删除老的props
        for (let key in oldProps) {
            if (!(key in newProps)) {
                if (key.startsWith('on')) {
                    el.removeEventListener(key.slice(2).toLocaleLowerCase(), oldProps[key])
                } else {
                    el.removeAttribute(key)
                }
            }
        }


        // 处理child
        let newChild = n2.child || []
        let oldChild = n1.child || []

        // 考虑新孩子和老孩子的类型情况 
        // 1.当新孩子是字符串是 不管老孩子是什么类型都要发生修改 
        if (typeof newChild == "string") {
            if (typeof oldChild == "string") {
                if (newChild != oldChild) {
                    el.textContent = newChild
                }
            } else {
                el.innerHTML = newChild
            }

        } else if (typeof oldChild == "string") {
            // 如果老孩子是字符串 新孩子是数组 清除老孩子的内容  挂在旧孩子的数组孩子
            el.innerHTML = ''
            newChild.forEach(item => {
                mount(item, el)
            })
        } else {
            // 新孩子 旧孩子都是数组  diff算法  
            // newVal [v1,v3,v4]
            // oldVal [v1,v2,v3,v4]
            // 如果存在key 比较每个key 所对应的值  
            // 如果不存在key 循环进行比较
            // 找出新旧孩子中最少的那个  逐项进行比较  新孩子多的追加 老孩子多的删除
            let min = Math.min(newChild.length, oldChild.length)
            for (let i = 0; i < min; i++) {
                // 比较新孩子和旧孩子  其实就是两个VNode对比
                patch(oldChild[i], newChild[i])
            }
            // 上面处理了最短项的前几个
            // 下面处理多于项的情况

            // 新孩子多于的项追加挂在
            if (newChild.length > oldChild.length) {
                newChild.slice(min).forEach(item => {
                    mount(item, el)
                })
            }

            // 老孩子多余的项删除
            if (newChild.length < oldChild.length) {
                oldChild.slice(min).forEach(item => {
                    el.removeChild(item.el)
                })
            }
        }

    }
}