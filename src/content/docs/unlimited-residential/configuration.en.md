# Unlimited Residential Proxies · Configuration

Two authentication methods are supported: **Username & Password Authentication** and **IP Whitelist Authentication**. You can choose either based on your needs.

## Username & Password Authentication

* Go to the [Dashboard](https://www.lumiproxy.com/user/dashboard/)
* Proxies
* [Unlimited Proxies](https://www.lumiproxy.com/user/unlimited/pricing/)

![代理设置](/src/assets/img/Unlimited/代理设置-en.png)

* [Proxy Settings](https://www.lumiproxy.com/user/unlimited/user-pass-auth/)

## User Creation
![用户列表](/src/assets/img/Unlimited/用户列表-en.png) 

### Custom Username and Password

:::danger 🚨
The username and password must consist of 6–12 alphanumeric characters (letters and numbers, case-sensitive).

**Traffic Limit:** Restricts the maximum total traffic usage for this sub-account.

**Daily Limit:** Restricts the maximum daily traffic usage for this sub-account.
:::

![添加用户](/src/assets/img/Unlimited/添加用户-en.png)

::::info ℹ️
You have 5/5 proxy authentication accounts remaining to be added.

Proxy accounts with no requests or traffic for 30 consecutive days will be flagged as at-risk accounts and automatically suspended.

:::tip 💡
If you require more sub-accounts, please contact our official customer support to add them.
:::
::::

## Proxy IP Extraction
![账密认证](/src/assets/img/Unlimited/账密提取-en.png)
### Default Mode

```text
Proxy server: 
port: 
username: 
password: 

```

### Parameter Description:

* `username`: Your proxy username.
* `password`: Your proxy password.
* `area`: Global country code (e.g., `area-US` for the United States).
* `city`: City location (e.g., `New York`).
* `state`: State location/code (e.g., `Newark`).
* `session`: Generates a different IP for each request when blank; fill this out to stick to the same IP address as much as possible (maximum 12 characters).
* `life`: The duration to maintain the IP session (unit: minutes).

## Whitelist Authentication

* Add your server's outbound IP to the [IP Whitelist](https://www.lumiproxy.com/user/unlimited/ip-whitelist/) to connect directly without a username and password.

:::danger 🚨
Adding **Mainland China IPs** to the whitelist is not supported.
:::
![IP白名单](/src/assets/img/Unlimited/ip白名单-en.png)
## API Extraction
![API提取](/src/assets/img/Unlimited/api提取-en.png)
### Parameter Description:

* `app_key`: The active app key obtained from the user personal center.
* `pt`: Package ID. Select a plan on the extraction interface to specify the corresponding plan.
* `num`: Number of IPs to extract per request (maximum 500).
* `cc`: Country code (e.g., `RU` for Russia).
* `state`: State or region (e.g., `Astrakhan Oblast`).
* `city`: City name (e.g., `Astrakhan`).
* `life`: Maximum duration for a single extracted IP session is 120 minutes.
* `protocol`: Proxy protocol (`1` for HTTP / SOCKS5).
* `format`: Return data format (`1` for TXT, `2` for JSON).
* `lb`: Line break formatting (`1` for CR+LF, `2` for CR, `3` for LF, `4` for Tab).

## Protocol Selection and Ports

* **HTTP**
* **SOCKS5**
* **80**
* **443**

```text
http://

socks5://

```