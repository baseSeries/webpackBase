// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

//  

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0] 
const moveZeroes = (nums) => {
    // let left = 0;
    // let right = nums.length - 1
    // while (left <= right) {
    //     if (nums[left] == 0) {
    //         let popNum = nums.splice(left, 1)
    //         nums.push(popNum[0])
    //         right--
    //     } else {
    //         left++
    //     }
    // }
    // return nums

    return nums.sort((a, b) => b ? 0 : -1)
    /*
    sort方法的参数是一个function,该function的参数为a和b，对应在数组中的现象是a初始排在b的前面（默认），
    所以不管是判断a还是判断b：1.判断a的情况,a如果是0，返回-1(sort方法的参数function返回值如果小于0，a排到b的前面)，即把全部的0排到数组前面；2. 判断b的情况,b如果是0，返回-1，a在b的前方，b要排在a的后面，即要把0排到其他数字的后面，最终把全部0排到数组后面。
    */
}
// console.log(moveZeroes([0, 1, 0, 3, 12]));


// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false 
// 找一种映射关系 然后替换
const wordPattern = (pattern, s) => {
    // 1
    const arr = s.split(' ')

    // 2
    if (pattern.length !== arr.length) return false

    // 3
    const map = {
        [pattern[0]]: arr[0]
    }
    const map2 = {
        [arr[0]]: pattern[0]
    }

    // 4
    for (let i = 1; i < pattern.length; i++) {
        if (!map[pattern[i]]) {
            map[pattern[i]] = arr[i]
        } else if (map[pattern[i]] !== arr[i]) {
            return false
        }
        if (!map2[arr[i]]) {
            map2[arr[i]] = pattern[i]
        } else if (map2[arr[i]] !== pattern[i]) {
            return false
        }
    }

    // 5
    return true

}
console.log(wordPattern('he', "unit"));