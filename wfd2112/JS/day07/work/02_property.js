var obj={
  a:1,
  b:2
}
//检测属性是否存在
console.log(obj.b===undefined);
console.log(obj.hasOwnProperty('c'));
console.log('c' in obj);

//练习：创建商品对象，包含的属性有编号，标题，价格；如果产地属性不存在，则添加该属性；如果价格属性存在，则打八折。
var goods={
  id:01,
  title:'kingsdom',
  price:9999
}/*
if(!goods.hasOwnProperty('madeIn')){
  goods.madeIn='China';
}

if(goods.madeIn===undefined){
  goods.madeIn='China';
}*/

if(!('madeIn'  in goods)){
  goods.madeIn='China';
}

if('price' in goods){
  goods.price*=0.8;
}
console.log(goods);













