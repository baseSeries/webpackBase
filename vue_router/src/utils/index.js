// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。



// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。 

// 输入：[3,2,3]
// 输出：3 

// 输入：[2,2,1,1,1,2,2]
// 输出：2 
// 求中位数 
function majorityElement (nums) {
    let map = new Map();
    let num = 0
    let midIndex = Math.floor(nums.length / 2)
    let keyMax = 0
    for (let value of nums) {
        if (!map.has(value)) {
            map.set(value, 1)
        } else {
            let val = map.get(value)
            map.set(value, ++val)
        }


    }

    for (let [key, value] of map.entries()) {
        if (value > num) {
            num = value
            keyMax = key
        }

    }
    return keyMax
}
// majorityElement([2, 2, 1, 1, 1, 2, 2])


// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
// 示例 1：

// 输入：n = 6
// 输出：true
// 解释：6 = 2 × 3
// 示例 2：

// 输入：n = 8
// 输出：true
// 解释：8 = 2 × 2 × 2
// 示例 3：

// 输入：n = 14
// 输出：false
// 解释：14 不是丑数，因为它包含了另外一个质因数 7 。
// 示例 4：

// 输入：n = 1
// 输出：true
// 解释：1 通常被视为丑数。 
const isUgly = function (n) {
    let nums = [1, 2, 3, 5]
    if (n < 0) return false
    while (true) {
        if (nums.includes(n)) return true
        if (n % 2 == 0) {
            n /= 2
        } else if (n % 3 == 0) {
            n /= 3
        } else if (n % 5 == 0) {
            n /= 5
        } else {
            return false
        }
    }
}
console.log(isUgly(13));