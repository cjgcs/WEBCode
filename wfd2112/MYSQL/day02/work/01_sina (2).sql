#设置编码为utf8
set names utf8;
#丢弃数据库如此存在 sina
drop database if exists sina;
#创建数据库sina，设置编码为utf8
create database sina charset=utf8;
#进入数据库
use sina;
#创建数据表news
create table news(
  nid int,
  title varchar(10),
  origin varchar(100),
  ctime datetime,
  detail varchar(100)
);
#插入数据
insert into news values('1','美司法部宣布终止“中国行动计划”，承认助长对亚裔歧视','环球网资讯','2022-02-24 10:10:25','据美国有线电视新闻网（CNN）报道，奥尔森表示，司法部此前对该计划进行了为期数月的审查，并得出结论：亚裔美国人和学者社区长期以来对该计划的批评是有道理的——他们一直认为该计划不仅助长了歧视，还损害了美国吸引顶尖人才和追求尖端研究的努力。');
insert into news values('2','电视台出身的市领导落马，曾与“火书记”共事多年','上观新闻','2022-02-24 09:29:34','王扎东1960年6月出生，是甘肃夏河人，早年曾在广电系统工作。他1982年参加工作后进入甘南州广播电视局工作了5年，随后又任甘南州电视台藏语专题部主任。1988年起，他任甘南州广播局副局长，并先后兼任电台副台长、台长。1996年至2009年，他历任迭部县副县长、县长、县委书记，甘南州副州长，甘南州委常委、统战部部长等职。');
insert into news values('3','普京不接电话，乌克兰总统慌了，凌晨电视演讲说起俄语','极目新闻','2022-02-24 10:14:17','乌克兰总统泽连斯基凌晨发表电视演讲，一开始还在用乌克兰语，却用俄语完成演讲。他称给普京打了电话，普京却没接。');
#修改数据
update news set nid='5',title='就我想欧文' where nid='1';
#删除数据
delete from news where nid='3';

