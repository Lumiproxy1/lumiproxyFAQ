# 如何将Lumiproxy 与 MoreLogin 配置

> 使用Lumiproxy 在 MoreLogin 上增强您的多账户管理，实现安全、匿名浏览，并更好地防止检测。
:::info 🚨
**确保海外环境已开全局模式**
**操作：**
1. `Win + R` → 输入 `cmd` 回车
2. 输入命令：
```
curl myip.ipip.net
```
 **结果判断：**
* 🌍 **显示海外IP** → 全局 ✅
* 🇨🇳 **显示国内IP** → 未开全局 ❌

:::

## MoreLogin 代理集成

以下是如何轻松将Lumiproxy 代理与 MoreLogin 集成的方法：

### 安装 MoreLogin
**访问 [MoreLogin 官网](https://www.morelogin.com/)，下载并安装应用程序。**


### 创建账户
登录并开始进行设置。
 

### 创建新配置文件
点击 **+New profile** 按钮，填写您的配置文件信息。
![](/src/assets/img/fingerprint/MoreLogin/MoreLogin1.avif)


### 设置初始配置文件
输入配置文件名称，选择您需要的浏览器指纹，并点击 **Advanced Create** 进入高级设置。

![](/src/assets/img/fingerprint/MoreLogin/MoreLogin2.avif)

### 配置代理设置
滚动到 **Proxies** 部分，输入您的Lumiproxy 代理信息：

* **代理类型**：选择 `HTTP` 或 `SOCKS5`（根据您的代理类型）。
* **代理服务器**：输入 `us.lumiproxy.io`。
* **代理端口**：使用您在 [Lumiproxy 控制面板](https://www.lumiproxy.com/user/dashboard/) 中提供的端口号。
* **代理账号**：输入您的Lumiproxy 代理 `用户名`。
* **代理密码**：输入您的Lumiproxy 代理 `密码`。


:::info ℹ️

 **您还可以为代理指定国家/地区。例如，输入 `lumi-username-area-US` 将为您提供美国的出口节点。**

:::

![](/src/assets/img/fingerprint/MoreLogin/MoreLogin3.avif) 

### 测试代理
点击 **Check Proxy** 确保代理连接正常。

### 保存并启动

点击 **Confirm** 保存设置，然后点击 **Start**，在安全的浏览环境中启动您的配置文件。
![](/src/assets/img/fingerprint/MoreLogin/MoreLogin4.avif)


完成！您已成功将Lumiproxy 代理集成到 MoreLogin 中。
