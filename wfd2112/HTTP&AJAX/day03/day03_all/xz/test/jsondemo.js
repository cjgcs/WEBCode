//JS对象
let result = [
	{lid:1,title:"华为",price:88878},
	{lid:2,title:"OPPO",price:9999}	
]
console.log(typeof(result))    //查看JS对象的类型
console.log(result)						//输出JS对象
console.log()
console.log(result[0])
console.log(result[0].lid)
console.log()





//为了使用HTTP协议把上述数据发送给客户端，必须序列化
let str = JSON.stringify(result)   //将JS对象转换为JSON字符串
console.log(typeof(str))					 //查看str的类型
console.log(str)									//查看str内容
console.log()
//为了客户端方便使用，必须对其反序列化
let strjs = JSON.parse(str)
console.log(typeof(strjs))
console.log(strjs)