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
