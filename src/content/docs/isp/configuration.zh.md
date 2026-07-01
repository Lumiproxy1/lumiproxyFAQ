# 长效 ISP · 配置

支持账密认证。

## 账密认证
- 进入[控制台](https://www.lumiproxy.com/zh-hans/user/dashboard/)
- 代理
- [长效 ISP 代理](https://www.lumiproxy.com/zh-hans/user/isp/pricing/)
- [代理设置](https://www.lumiproxy.com/zh-hans/user/isp/user-pass-auth/)

![代理设置](/src/assets/img/isp/代理设置-zh.png)

## 账密创建

![用户列表](/src/assets/img/isp/用户列表-zh.png) 


### 自定义账号密码
:::danger 🚨
用户名和密码由6-12为数字和字母(大小写)组成

流量限制-限制该子账号流量使用上限

每日限额-单日限制该子账号流量使用上限
:::

![添加用户](/src/assets/img/isp/添加用户-zh.png)

- 快速添加是系统自动生成的一个子账号

::::info ℹ️
您只剩下 5/5 的代理身份验证帐户需要添加

代理账户若 30 天无请求或流量，将被视为风险账户并自动暂停。

:::tip 💡

如果需要多个子账号可以联系官方客服进行添加
:::
::::

## 提取IP代理
![账密认证](/src/assets/img/isp/提取IP-zh.png)


###  默认模式


```
Proxy server: isp.lumiproxy.io
port: 3144
username: lumi-username
password: password

```

### 指定IP
:::info 💡

要使用已分配的 IP，请将 lumi-username_ip-xxx.xxx.xxx.xxx 作为后缀附加到用户名中。
:::

### 参数说明：
- `username`：用户名
- `password`：密码
- `area`：全球区域代码，例如：USA area-US
- `city`：城市所属，例如：纽约市 New York
- `state`：州代码示例：纽约州 Newark
- `session`：每次请求提供不同的IP；填写：尽量保证提供相同的IP地址；最大12位
- `life`：维持IP使用时间，单位：分钟