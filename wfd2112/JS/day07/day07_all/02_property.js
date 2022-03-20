var obj={
  a:1,
  b:2
}
//检测属性是否存在
//console.log(obj.b===undefined);
//console.log( obj.hasOwnProperty('c') );
//console.log( 'c' in obj );

//练习：创建商品对象，包含的属性有编号，标题，价格；如果产地属性不存在，则添加该属性；如果价格属性存在，则打八折。
var laptop={
  lid:43,
  title:'神州战神',
  price:5700
}
//判断不存在
//laptop.madeIn===undefined
if(!laptop.hasOwnProperty('madeIn')){
  laptop.madeIn='中国';
}
if('price' in laptop){
  laptop.price*=0.8;
}

console.log(laptop);










