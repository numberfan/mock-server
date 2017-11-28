/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
const Mock = require('mockjs');
const Random = Mock.Random;
const createDatabase = require('./createDatebase');

module.exports = () => {
  /*动态生成[/stars, /news]*/
  let data = {
    stars: [],
    news: []
  };
  const starImages = [1, 2, 3].map(img => Random.image('120x60', Random.color(),Random.word(2,6)));
  for(let i = 0; i < 50; i++) {
    const contents = Random.cparagraph(0,10);
    data.stars.push({
      id: i,
      name: Random.cname(),
      desc: contents.substr(0,50),
      tag: Random.cword(2,8),
      views: Random.integer(100, 5000),
      images: starImages.slice(0, Random.integer(1,3))
    })
  }
  const newsImages = [1, 2, 3].map(img => Random.image('120x60', Random.color(),Random.word(2,6)));
  for(let i = 0; i < 100; i++) {
    const contents = Random.cparagraph(0,10);
    data.news.push({
      id: i,
      title: Random.cword(8,20),
      desc: contents.substr(0,50),
      tag: Random.cword(2,8),
      views: Random.integer(100, 5000),
      images: newsImages.slice(0, Random.integer(1,3))
    })
  }

  /*动态创建文件*/
  /*let obj = [
    {name: '张三'},
    {name: '李四'},
    {name: '王五'}
  ];
  createDatabase('t', obj);*/

  /*遍历database/已有的数据*/
  let datas = require('./getDatebase');
  data = Object.assign(data, datas);

  return data;
};