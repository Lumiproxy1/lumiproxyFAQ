# Static Datacenter Proxy · Send Your First Request

Send your first request with cURL or Python to confirm the proxy works.

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
## Expected result

The returned IP differs from your local egress IP — the proxy is working.
