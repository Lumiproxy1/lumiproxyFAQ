# Long Acting ISP · Configuration

Supports username and password authentication.

## Username and Password Authentication
- Go to the [Control Panel](https://www.lumiproxy.com/user/dashboard/)
- Proxy
- [Long Acting ISP Proxies ](https://www.lumiproxy.com/user/isp/pricing/)
- [Proxy Settings](https://www.lumiproxy.com/user/isp/user-pass-auth/)

![Proxy Settings](/src/assets/img/isp/代理设置-en.png)

## Username and Password Creation

![User List](/src/assets/img/isp/用户列表-en.png)

### Custom Username and Password
:::danger 🚨
The username and password must consist of 6–12 alphanumeric characters (uppercase and lowercase letters allowed).

- **Traffic Limit** – Limits the total traffic usage for this sub-account.
- **Daily Limit** – Limits the daily traffic usage for this sub-account.
:::

![Add User](/src/assets/img/isp/添加用户-en.png)

- **Quick Add** automatically generates a sub-account via the system.

::::info ℹ️
You have `5/5` proxy authentication accounts remaining to add.

If a proxy account has no requests or traffic for 30 days, it will be considered a risky account and automatically suspended.

:::tip 💡

If you need multiple sub-accounts, please contact official customer support to add them.
:::
::::

## Retrieve Proxy IP
![Username and Password Authentication](/src/assets/img/isp/提取ip-en.png)

### Default Mode

```
Proxy server: isp.lumiproxy.io
Port: 3144
Username: lumi-username
Password: password
```

### Specify IP
:::info ℡
To use an assigned IP, append `_ip-xxx.xxx.xxx.xxx` to your username (e.g., `lumi-username_ip-123.45.67.89`).
:::

### Parameter Descriptions:
- `username` – Your username
- `password` – Your password
- `area` – Global region code, e.g., USA → `area-US`
- `city` – City name, e.g., New York City → `New York`
- `state` – State code, e.g., Newark (New York State) → `Newark`
- `session` – Provide a different IP per request. To keep the same IP, set a session value (max 12 characters).
- `life` – IP usage retention time, in minutes