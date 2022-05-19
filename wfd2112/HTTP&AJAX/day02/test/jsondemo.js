//js对象
let result=[
	{lid:1,title:"华为",price:8888},
	{lid:2,title:"OPPO",price:8899},
]

console.log(typeof(result))	//查看JS对象的类型
console.log(result)					//输出JS对象
console.log()


//序列化
let str=JSON.stringify(result)

console.log(typeof(str))	//查看JS对象的类型
console.log(str)					//输出JS对象
console.log()

//为了在客户端方便使用，必须对其反序列化
let strjs=JSON.parse(str)
console.log(typeof(strjs))	//查看JS对象的类型
console.log(strjs)					//输出JS对象
console.log()

