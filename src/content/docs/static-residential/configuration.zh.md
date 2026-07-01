# 静态住宅代理 · 配置

只支持账密方式。

## 账密认证
- 进入[控制台](https://www.lumiproxy.com/zh-hans/user/dashboard/)
- 代理
- [静态住宅代理](https://www.lumiproxy.com/zh-hans/user/static/pricing/)

![定价](/src/assets/img/Static-residential/静态定价-zh.png)

- [代理设置](https://www.lumiproxy.com/zh-hans/user/static/user-pass-auth/)

## 账密创建

![用户列表](/src/assets/img/Static-residential/用户列表-zh.png) 


### 自定义账号密码
:::danger 🚨
用户名和密码由6-12为数字和字母(大小写)组成
:::

![添加用户](/src/assets/img/Static-residential/用户列表-zh.png)

- 快速添加是系统自动生成的一个子账号

::::info ℹ️
您只剩下 5/5 的代理身份验证帐户需要添加

代理账户若 30 天无请求或流量，将被视为风险账户并自动暂停。

:::tip 💡

如果需要多个子账号可以联系官方客服进行添加
:::
::::

## 提取IP代理
![账密认证](/src/assets/img/Static-residential/生成IP-zh.png)


###  默认模式


```
Proxy server: xxx.xxx.xxx.xxx
port: 6011
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



