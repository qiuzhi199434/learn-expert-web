/**手写new过程 */
const my_new = function (fn:any, ...arg:any[]) {
  const obj = Object.create(fn.prototype)
  const result = fn.call(obj, ...arg)
  return result instanceof Object ? result : obj
}
function person (this: any, name:string, age:number) {
  this.name = name
  this.age = age
}
person.prototype.eat = function () {
  console.log(`我是${this.name}今年${this.age}岁了，我很会吃饭`)
}
const person1 = my_new(person, 'daidai', 20)

console.log(person1)

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
  return this.reduce(function (pre, cur, index, arr) {
    pre.push(fn.call(thisArg, cur, index, arr))
    return pre
  }, [])
}

console.log([1,2].forkmap2(function(this:any,item, index, arr){
  console.log(index, arr, this)
  return item * item
}, {name: 'adai'}))

/**实现一个批量请求函数 multiRequest(urls, maxNum)，
 * 要求最大并发数 maxNum，每当有一个请求返回，就留下一个空位，
 * 可以增加新的请求，所有请求完成后，结果按照 urls 里面的顺序依次打出。
*/
const request = (url:string) => {
  return new Promise((resolve, reject)=>{
      if (Math.floor(Math.random() * 10) === 2) {
        reject(url)
      }else {
        setTimeout(()=>{
          resolve(url)
        }, Math.floor(Math.random() * 10) * 100)
      }
  })
}
const multiRequest = (urls: string[], maxNum:number) => {
  return new Promise((resolve)=>{
    let stackNum = 0
    const _urls = [...urls]
    const reqlsit: {[prop:string]: any} = {}
    const reslsit:any[] = []
    const next = (url?:string) => {
      let path:any
      if (url) {
        path = url
      } else {
        if(stackNum >= maxNum || _urls.length == 0) return
        path = _urls.shift()
        stackNum++
      }
      request(path).then((res)=>{
        stackNum--
        reqlsit[path] =  res
        if (stackNum === 0 && _urls.length == 0) {
          for (let i=0; i < urls.length;i++) {
            reslsit.push(reqlsit[urls[i]])
          }
          resolve(reslsit)
        } else {
          next()
        }
      }).catch((err) => {
        next(err)
      })
    }
    while (stackNum < maxNum) {
      next()
    }
  })
}

const multiRequest2 = (urls:string[], maxNum = 3) => {
  return new Promise<Array<any>>((resolve, reject) => {
    const quee:any[] = []
    const _urls = [...urls]
    const reslt:any[] = []
    const reqobj: {[prop:string]:any} = {}
    const next = (url?:string) => {
      let path:any
      if (url) {
        path = url
      }else {
        if (quee.length >= maxNum || _urls.length == 0) return
        path = _urls.shift()
        quee.push(path)
      }
      request(path).then(res => {
        quee.splice(quee.indexOf(path), 1)
        reqobj[path] = res
        if (quee.length === 0 && _urls.length === 0) {
          for (let i=0; i< urls.length; i++) {
            reslt.push(reqobj[urls[i]])
            resolve(reslt)
          }
        }else{
          next()
        }
      }).catch(err=>{
        next(err)
      })
    }
    while (quee.length < maxNum) {
      next()
    }
  })
}
multiRequest2(['a','b','c','d','e','f'], 3).then((res) => {
  console.log(res)
})


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


/**js 插入大量dom优化，渲染1万条数据 */
const renderList = () => {

}



/** 用递归的方法实现fibonicc(n)函数，输入数字n,输出波菲那契数列第n项数字，并给该函数加缓存功能 */
const fibonicc = (n:number):number => {
  if (n <= 2) return 1
  return fibonicc(n-1) + fibonicc(n-2)
}
const fibonicc2= (n:number, res1 = 1, res2 = 1):number => {
  if (n<1) return n
  if (n<=2) return res2
  return fibonicc2(n-1, res1, res1+ res2)
}
