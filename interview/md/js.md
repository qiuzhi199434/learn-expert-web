1. 手写new 的过程

2. js实现map

3. 实现一个批量请求函数 multiRequest(urls, maxNum)，要求最大并发数 maxNum，每当有一个请求返回，就留下一个空位，可以增加新的请求，所有请求完成后，结果按照 urls 里面的顺序依次打出

4. 阻止事件冒泡和阻止默认事件

5. 数字转格式，前面加上，三位拆分添加一个",",小数点后保留两位，不需要考虑四舍五入，例如1234578.7889，输出，三位拆分添加一个",",小数点后保留两位，不需要考虑四舍五入，例如1234578.7889，输出1,234,578.78

6. js 插入大量dom优化，渲染1万条数据

7. 原型链

8. typescript泛型的理解，内置方法的具体实现，具体怎么实现的

9. promise then怎么实现的链式调用，怎么优雅的实现链式调用，一个类，怎么去添加链式调用方法

10. 手写promise

11. async/await 实现原理

12. 数组合并方法

13. 用递归的方法实现fibonicc(n)函数，输入数字n,输出波菲那契数列第n项数字，并给该函数加缓存功能

14. 请用尽可能少的代码实现一个函数，用于计算用户一个月共计交费多少港元（代码请清晰简洁，我们希望能看到你的编码风格和习惯）。

用户在富途平台上进行交易，需要交平台使用费。平台使用费的梯度收费方案如下：
订单数  每笔价格
1-5    30
6-20   15
21-50  10
51-100  9
101-500 8
501-1000 7
1001-2000 6
2001-3000  5
3001-4000  4
4001-5000  3
5001-6000  2
6001及以上  1
假设一个用户，一个月交易了6笔订单，则在梯度1交费共计：30港元 * 5 = 150港元，在第二梯度交费：15港元，一共交费165港元。

15. 下列执行顺序
let date = new Date(); 
setTimeout(()=>{
  console.log(new Date() - date); 
},1000)
let a = 0;
while((new Date()-date)<3000){
a++; 
}

16. 如何改变能够按期望输出0 1 2 3 4，为什么
for (var i = 0; i < 5; i++) {

    setTimeout(function() {

      console.log(i);

    }, i * 1000);
}

17. 原型继承和class继承的区别

18. 为什么class继承会要调用 super()，super()的使用场景有哪些

19. 防抖和节流的实现，主要区别是什么

20. 深拷贝和浅拷贝的区别，怎么实现深拷贝和浅拷贝

21. 实现一个观察者类observe

22. Map 和 WeakMap的区别,跟对象的区别

23. for in 和 for of的区别

24. 装饰器

25. let const var 区别 const可以声明不赋值吗

