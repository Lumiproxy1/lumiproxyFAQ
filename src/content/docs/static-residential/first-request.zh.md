# 静态住宅代理 · 发送您的第一个请求

下面通过 cURL 与 Python 发送您的第一个请求，验证代理是否生效。

## cURL

```bash
curl -x http://lumi-u0zfl5xkhey8:pj8FT8H4vp6imEij@XXX.XXX.XXX.XXX:6011 https://api.ip.cc

curl -x socks5h://lumi-u0zfl5xkhey8:pj8FT8H4vp6imEij@XXX.XXX.XXX.XXX:6011 https://api.ip.cc

```

## Python（requests）

```python
import requests

proxyip = "http://lumi-u0zfl5xkhey8:pj8FT8H4vp6imEij@XXX.XXX.XXX.XXX:6011"
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
  'proxy':'http://lumi-u0zfl5xkhey8:pj8FT8H4vp6imEij@XXX.XXX.XXX.XXX:6011'
},function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})


```

## 预期结果
返回的 IP 与您本机出口 IP 一致，即代表代理已生效。
