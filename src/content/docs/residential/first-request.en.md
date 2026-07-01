# Residential Proxy · Send Your First Request

Send your first request with cURL or Python to confirm the proxy works.


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

## Expected result

The returned IP differs from your local egress IP — the proxy is working.
