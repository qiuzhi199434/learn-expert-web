/**鸡兔同笼算法
 * 鸡两条腿，兔四条腿，鸡兔总数n,腿数m
 * 思路: 先每个减两条腿，那么就只剩兔子了,假设兔子为x,鸡为y,则 x=(m-2n)/2; y= (4n-m)/2
 */

export const jitu = (n:number, m:number): {tu: number, ji: number} => {
  return {
    tu: (m - 2*n)/2,
    ji: (4*n - m)/2
  }
}

console.log(jitu(20, 50))


interface NumberArray {
  (arr: Array<number>): Array<number>
}
type Sort = (arr:number[]) => number[]
/**冒泡排序
 * 冒泡排序是依次对比相邻的两个数字，大的往后
 * 优化，因为每一次最大都在最后面，所以后面的不需要比较就是 j-i-1次比较就行了
 */
export const bubuleSort:NumberArray = (arry) => {
  const len = arry.length
  for (let i = 0; i< len -1; i++) {
    for (let j = 0; j < len - i -1; j++) {
      if (arry[j] > arry[j+1]) {
        let temp = arry[j]
        arry[j] = arry[j+1]
        arry[j+1] = temp
      }
    }
  }
  return arry
}

export const bubuleSort2:NumberArray = (arr) => {
  let len = arr.length -1
  while (len) {
    let i = 0
    while (i < len) {
      if (arr[i] > arr[i+1]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      i++
    }
    len--
  }
  return arr
}

/**快速排序
 *从数组中选定一个基数，然后把数组中的每一项与此基数做比较，
 小的放入一个新数组，大的放入另外一个新数组。然后再采用这样的方法操作新数组。
 直到所有子集只剩下一个元素，排序完成。
 */

export const quickSort:Sort = (arr) => {
  if (arr.length < 2) return arr
  const left = []
  const rigth = []
  const index = Math.floor(arr.length/2)
  const pivod = arr.splice(index, 1)[0]
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] < pivod) {
      left.push(arr[i])
    }else{
      rigth.push(arr[i])
    }
  }
  return quickSort(left).concat([pivod], quickSort(rigth))
}

export const quickSort2:Sort = (arr) => {
  let len = arr.length
  if (len < 2) return arr
  const left = []
  const right = []
  const pivod = arr[0]
  let index = 1
  while ( index < len) {
    if (arr[index] < pivod) {
      left.push(arr[index])
    } else {
      right.push(arr[index])
    }
    index++
  }
  return quickSort2(left).concat([pivod], quickSort2(right))
}



/**二叉排序树实现
 * todo
 */


