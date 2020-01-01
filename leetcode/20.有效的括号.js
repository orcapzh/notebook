/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

function checkByStack(s) {
  const len = s.length
  let stack = []
  let i = 0
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  while(i < len) {
    const char = s[i]
    if (/[\{\(\[]/.test(char)) {
      stack.push(char)
    } else {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop()
      } else {
        return false
      }
    }
    i++
  }

  return stack.length > 0 ? false : true
}

function checkByReplace(s) {
  let len = Math.ceil(s.length / 2)
  while(len--) {
    s = s.replace(/(\(\))|(\[\])|(\{\})/, '')
  }

  return !s.length
}

var isValid = function(s) {
  return checkByReplace(s)
};
// @lc code=end
