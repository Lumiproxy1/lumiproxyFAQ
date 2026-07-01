# 无限住宅代理 · 发送您的第一个请求

下面通过 cURL 与 Python 发送您的第一个请求，验证代理是否生效。

## cURL

```bash
curl -x http://<user>:<pass>@gw.unlimited.example.com:7778 https://api.ip.cc

curl -x socsk5h://<user>:<pass>@gw.unlimited.example.com:7778 https://api.ip.cc
```

## Python（requests）

```python
import requests

proxies = {
  "http":  "http://<user>:<pass>@gw.unlimited.example.com:7778",
  "https": "http://<user>:<pass>@gw.unlimited.example.com:7778",
}
r = requests.get("https://api.ip.cc", proxies=proxies, timeout=10)
print(r.text)
```

## Node.js

```js
import { HttpsProxyAgent } from "https-proxy-agent";

const agent = new HttpsProxyAgent("http://<user>:<pass>@gw.unlimited.example.com:7778");
const res = await fetch("https://api.ip.cc", { agent });
console.log(await res.text());
```

## 预期结果

返回的 IP 与您本机出口 IP 不一致，即代表代理已生效。
