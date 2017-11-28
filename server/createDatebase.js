/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
let fs = require('fs');
let path = require("path")

/*创建目录*/
function mkdirSync (url, mode, cb) {
  url = '/server/database' + url;
  let arr = url.split("/");
  mode = mode || '0755';
  cb = cb || function(){};

  //处理 ./aaa ../ddd/d 或者空
  if (!arr[0] || arr[0] === "." || arr[0] == "..") {
    arr.shift();
  }
  // 移除尾部名称
  arr.pop();
  /*创建文件夹*/
  function inner(cur){
    console.log('是否存在文件', fs.existsSync(cur), cur);
    // 不存在就创建一个
    if(!fs.existsSync(cur)){
      fs.mkdirSync(cur, mode)
    }
    if(arr.length){
      inner(cur + "/"+arr.shift());
    }else{
      cb();
    }
  }
  arr.length && inner(arr.shift());
}

/*创建文件*/
function fileSync (url, data) {
  let urlArr = url.split('/');
  let filename = './server/database' + url + '.js';
  urlArr[0] ? urlArr[0] : urlArr.shift();
  // url
  // example: a/b -> a_b
  let urlVal = urlArr.join('_');
  let dataObj = {
    url: urlVal,
    resp: data
  };
  let fileData = 'module.exports =' + JSON.stringify(dataObj);
  fs.open(filename, 'w', function (err, fd) {
    if (err) {
      console.log(`文件写入:${err}`)
    }
    fs.write(fd, fileData, () => {
      console.log('文件写入成功')
    })
  });
}

module.exports = (url, data) => {
  url = url.charAt(0) === '/' ? url : '/' + url;
  mkdirSync(url, '0755', function () {
    fileSync(url, data)
  });
};