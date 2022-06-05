# kuayu

kuayu = 「跨域」的中文拼音，这个就是为了启动一个允许跨域的浏览器，这个在前端接口调试的时候很有用。

以往是通过设置终端别名，或者另存快捷方式的方法来启动跨域浏览器。
```bash
# Chrome
alias kyc='open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/<myname>/chromeData';
# Edge
alias kye='open -n /Applications/Microsoft\ Edge.app/ --args --disable-web-security --user-data-dir=/Users/<myname>/edgeData';
```

设置别名后，还需要手动创建一个 `user-data-dir` 目录

`kuayu` 就可以简化以上的一系列操作

## 安装
```
npm i kuayu -g
```

## 执行
终端输入 `kuayu` 即可

``` bash
? 请选择浏览器 (Use arrow keys)
  -✨-🌛-🪐-
❯ chrome 
  firefox 
  edge 
```
