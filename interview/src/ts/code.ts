/**阻止事件冒泡和阻止默认事件 */
const stopBubble = function (e:Event) {
  if (e&&e.stopPropagation) {
    e.stopPropagation()
  } else {
    (window.event as any).cancelBubble = true
  }
}

const preventDefault = function (e:Event) {
  if (window.event) {
    window.event.returnValue = false
  } else {
    e.preventDefault()
  }
}


/**js实现map方法 */
Array.prototype.forkmap = function (fn, thisArg) {
  const arr = this
  const result = []
  for (let i=0; i < arr.length; i++) {
    result.push(fn.call(thisArg, arr[i], i, arr))
  }
  return result
}

Array.prototype.forkmap2 = function (fn, thisArg) {
  const result:any[] = []
  this.reduce(function (pre, cur, index, arr) {
    result.push(fn.call(thisArg, cur, index, arr))
  }, [])
  return result
}

console.log(Array.prototype.push.call([],1, 2, 3))
