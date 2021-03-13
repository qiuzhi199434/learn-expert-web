const ctx = require.context('./ts', true, /\.ts$/)

interface Maps {
  [prop:string]: any
}
const importAll = (ctx:any)=> {
  const map:Maps = {}
  for (const key of ctx.keys()) {
    const keyArr: string[] = key.split('/')
    keyArr.shift()
    map[keyArr.join('.').replace(/\.ts$/g, '')] = ctx(key).default
  }
  return map
}

const allJs = importAll(ctx)

console.log(allJs)

