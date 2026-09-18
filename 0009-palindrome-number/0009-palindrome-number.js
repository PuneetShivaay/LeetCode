/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0){
        return false
    }

    let original = x
    let reversed_num = 0

    while (x>0){
        let remainder = x % 10
        reversed_num = (reversed_num * 10) + remainder
        x = Math.floor(x / 10);
    }

    return original == reversed_num
};