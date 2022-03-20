//创建数组
var arr=[70,89,66,'tedu',true,function(){},{}];
//console.log(arr);

//练习：创建数组，保存一组工资；创建数组，保存一组商品名称
var salary=[8000,7500,6000,12000];
var laptop=['小米Air','神州战神','燃7000'];
//下标(索引)：数组自动为每个元素添加的编号，是一个从0开始的整数
//console.log( laptop[3] );
laptop[0]='apple';
laptop[3]='外星人';
laptop[6]='联想小新';
//console.log(laptop);

//练习：创建数组，包含若干个城市，修改其中的元素，在最后添加新的元素
var city=['北京','成都','郑州','深圳'];
//city[1]='重庆';
//city[2]='杭州';
//city[4]='广州';
//city[5]='济南';
//console.log(typeof city);
city[city.length]='南京';
city[city.length]='武汉';
//获取数组元素个数
//console.log(city, city.length);

//练习：创建空数组，使用数组的长度往数组中添加若干个汽车品牌名称
var car=[];
car[car.length]='比亚迪';
car[car.length]='五菱宏光';
car[car.length]='小鹏';
//清空数组
car.length=0;

console.log(car);





