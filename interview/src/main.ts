const ctx = require.context('./ts', true, /\.ts$/)

interface AllFileModule {
  [prop:string]: any
}

const importAll = (ctx:any)=> {
  const allFileModule:AllFileModule = {}
  for (const key of ctx.keys()) {
    const keyArr: string[] = key.split('/')
    keyArr.shift()
    allFileModule[keyArr.join('.').replace(/\.ts$/g, '')] = ctx(key)
  }
  return allFileModule
}

const allJs = importAll(ctx)

console.log(allJs)



