# 住宅代理 · 配置

支持账密认证与 IP 白名单两种方式，可按需选择。

## 账密认证
- 进入[控制台](https://www.lumiproxy.com/zh-hans/user/dashboard/)
- 代理
- [住宅代理](https://www.lumiproxy.com/zh-hans/user/residential/pricing/)
- [代理设置](https://www.lumiproxy.com/zh-hans/user/residential/user-pass-auth/)
![代理设置](/src/assets/img/residential/configuration/代理设置-zh.png)

## 账密创建

![用户列表](/src/assets/img/residential/configuration/用户列表-zh.png) 


### 自定义账号密码
:::danger 🚨
用户名和密码由6-12为数字和字母(大小写)组成

流量限制-限制该子账号流量使用上限

每日限额-单日限制该子账号流量使用上限
:::

![添加用户](/src/assets/img/residential/configuration/添加用户-zh.png)

- 快速添加是系统自动生成的一个子账号

::::info ℹ️
您只剩下 5/5 的代理身份验证帐户需要添加

代理账户若 30 天无请求或流量，将被视为风险账户并自动暂停。

:::tip 💡

如果需要多个子账号可以联系官方客服进行添加
:::
::::

## 提取IP代理
![账密认证](/src/assets/img/residential/configuration/账密认证-zh.png)


###  默认模式


```
Proxy server: as.lumiproxy.io
port: 5888
username: lumi-username
password: password

```

### 参数说明：
- `username`：用户名
- `password`：密码
- `area`：全球区域代码，例如：USA area-US
- `city`：城市所属，例如：纽约市 New York
- `state`：州代码示例：纽约州 Newark
- `session`：每次请求提供不同的IP；填写：尽量保证提供相同的IP地址；最大12位
- `life`：维持IP使用时间，单位：分钟

## 白名单认证

- 添加[IP 白名单](https://www.lumiproxy.com/zh-hans/user/residential/ip-whitelist/)中添加您的服务器出口 IP，即可免账密直连。

:::danger 🚨
不支持添加**中国大陆IP**白名单
:::

![IP白名单](/src/assets/img/residential/configuration/ip白名单-zh.png)


## API提取

![API提取](/src/assets/img/residential/configuration/iP提取-zh.png)



### 参数说明:
- `app_key`: 可以通过用户的个人中心获得的打开的app_key
- `pt`: 套餐ID，在提取界面上选择套餐，指定相应的提取套餐
- `num`: 单个IP提取量，最大500
- `cc`: 例如：俄罗斯：RU
- `state`: 例如：阿斯特拉罕州
- `city`: 例如：阿斯特拉罕
- `life`: 最大单IP提取时间为120分钟
- `protocol`: 代理协议，1.http/socks5
- `format`: 返回数据格式，1.txt 2.JSON
- `lb`: 返回数据格式，1.回车换行2.回车3.换行4.制表符

## 协议选择和端口

- **HTTP**
- **SOCKS5**
- **80**
- **443**

```
http://

socks5://

```