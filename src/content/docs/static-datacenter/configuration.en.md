# Static Datacenter Proxies · Configuration

Only Username & Password authentication is supported.

## Username & Password Authentication

* Go to the [Dashboard](https://www.lumiproxy.com/user/dashboard/)
* Proxies
* [Static Datacenter Proxies](https://www.lumiproxy.com/user/datacenter/pricing/)

![定价](/src/assets/img/Static-data/定价-en.png)

* [Proxy Settings](https://www.lumiproxy.com/user/datacenter/user-pass-auth/)

## User Creation
![用户列表](/src/assets/img/Static-data/用户列表-en.png) 

### Custom Username and Password

:::danger 🚨
The username and password must consist of 6–12 alphanumeric characters (letters and numbers, case-sensitive).
:::

![添加用户](/src/assets/img/Static-data/用户列表-en.png)

* **Quick Add:** Automatically generates a sub-account via the system.

::::info ℹ️
You have 5/5 proxy authentication accounts remaining to be added.

Proxy accounts with no requests or traffic for 30 consecutive days will be flagged as at-risk accounts and automatically suspended.

:::tip 💡
If you require more sub-accounts, please contact our official customer support to add them.
:::
::::

## Proxy IP Extraction

![账密认证](/src/assets/img/Static-data/提取ip-en.png)

### Default Mode

```text
Proxy server: xxx.xxx.xxx.xxx
port: 6011
username: lumi-username
password: password

```

### Parameter Description:

* `username`: Your proxy username.
* `password`: Your proxy password.
* `area`: Global country code (e.g., `area-US` for the United States).
* `city`: City location (e.g., `New York`).
* `state`: State location/code (e.g., `Newark`).
* `session`: Generates a different IP for each request when blank; fill this out to stick to the same IP address as much as possible (maximum 12 characters).
* `life`: The duration to maintain the IP session (unit: minutes).