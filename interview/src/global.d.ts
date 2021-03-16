
declare global {
  interface Array<T> {
    forkmap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    forkmap2<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  }
}


export {
}
