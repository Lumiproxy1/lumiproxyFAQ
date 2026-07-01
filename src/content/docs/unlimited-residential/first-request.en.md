# Unlimited Residential Proxy · Send Your First Request

Send your first request with cURL or Python to confirm the proxy works.

## cURL

```bash
curl -x http://<user>:<pass>@gw.unlimited.example.com:7778 https://api.ip.cc


curl -x socsk5h://<user>:<pass>@gw.unlimited.example.com:7778 https://api.ip.cc
```

## Python (requests)

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

## Expected result

The returned IP differs from your local egress IP — the proxy is working.
