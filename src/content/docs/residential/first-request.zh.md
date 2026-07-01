# 住宅代理 · 发送您的第一个请求

下面通过 cURL 与 Python 发送您的第一个请求，验证代理是否生效。

## cURL


```bash
curl -x http://lumi-j0o89jpo9:erh4545he45h@as.lumiproxy.io:5888 https://api.ip.cc

curl -x socks5h://lumi-j0o89jpo9:erh4545he45h@as.lumiproxy.io:5888 https://api.ip.cc

```

## Python

```python
import requests

proxyip = "http://lumi-j0o89jpo9:erh4545he45h@as.lumiproxy.io:5888"
url = "https://api.ip.cc"
proxies={
    'http':proxyip,
    'https':proxyip,
}
data = requests.get(url=url,proxies=proxies)
print(data.text)

```

## Node.js

```js
var request = require('request');
request({
  'url':'https://api.ip.cc',
  'method': "GET",
  'proxy':'http://lumi-j0o89jpo9:erh4545he45h@as.lumiproxy.io:5888'
},function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})


```

## 预期结果

返回的 IP 与您本机出口 IP 不一致，即代表代理已生效。
