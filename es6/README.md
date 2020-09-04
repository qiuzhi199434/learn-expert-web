
<!-- 浏览器环境引入：https://unpkg.com/@babel/standalone/babel.min.js
例子：
<body>
    //可以在https://www.babeljs.cn/repl在线测试你的代码
    <div id="output"></div>
</body>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 //Your custom script here
<script type="text/babel">
    const getMessage = () => "Hello World";
    document.getElementById('output').innerHTML = getMessage();
</script> -->

#babel 官方认为，把不稳定的 stage0-3 作为一种预设是不太合理的，@babel/preset-env、@babel/polyfill等只支持到stage-4级别，因此 babel 新版本废弃了 stage 预设，转而让用户自己选择使用哪个 proposal 特性的插件，这将带来更多的明确性（用户无须理解 stage，自己选的插件，自己便能明确的知道代码中可以使用哪个特性）。

#babel-loader 7.x 对应 babel-cli 6.x  babel-core 6.x;    webpack 3.x  
1.@babel/preset-env + @babel/polyfill可以转译语法、新 API，但存在污染全局问题
2.@babel/preset-env + @babel/plugin-transform-runtime + @babel/runtime-corejs2，可按需导入，转译语法、新 API，且避免全局污染（babel7 中@babel/polyfill 是@babel/runtime-corejs2 的别名），但是检测不到'hello'.includes('h')这种句法；

#babel-loader 8.x  对应 @babel/cli 7.x @babel/core 7.x ;  webpack 4.x 
1.@babel/preset-env + core-js + regenerator-runtime
2.@babel/preset-env + @babel/plugin-transform-runtime + @babel/runtime 或 @babel/runtime-corejs3   vue-cli3使用的这种方案

#babel-core  babel转码器
#默认只转换新的JavaScript句法（syntax）
#core-js 能转换新的api   regenerator-runtime(提供generator函数的转码)

#babel-cli 命令行工具
#转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
# -s 参数生成source map文件



