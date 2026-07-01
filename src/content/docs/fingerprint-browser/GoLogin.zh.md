# 如何在 GoLogin 中设置 Lumiproxy

> 通过 GoLogin 和 Lumiproxy 增强您的网络爬取与多账户管理，实现强大的反检测功能和灵活的代理控制。
:::dinfo 🚨
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

## GoLogin 代理集成
按照以下步骤将 Lumiproxy 代理集成到 GoLogin：

### 安装 GoLogin
**从 [GoLogin 官网](https://gologin.com/) 下载并安装 GoLogin。**


### 创建账户
登录 GoLogin，开始设置您的浏览器配置文件。


### 创建新配置文件
点击 **+添加配置文件**，输入您的新浏览器配置文件的基本信息。

![](/src/assets/img/fingerprint/GoLogin/GoLogin1.avif)

### 配置代理设置

输入您的 Lumiproxy 代理信息：

* **代理类型**：选择 `HTTP`、或 `SOCKS5`（根据您的代理类型）。
* **主机**：输入 `us.lumiproxy.io`。
* **端口**：使用 [Lumiproxy 仪表盘](https://www.lumiproxy.com/user/dashboard/) 提供的端口号。
* **用户名**：输入您的 Lumiproxy 代理 `用户名`。
* **密码**：输入您的 Lumiproxy 代理 `密码`。

:::info ℹ️
**您还可以指定代理的国家/地区。例如，输入 `lumi-username-area-US` 可获取美国出口节点。**
:::
![](/src/assets/img/fingerprint/GoLogin/GoLogin2.avif)
   

### 测试代理
点击 **检查代理** 以确保一切正常运行。
 

### 保存并启动
点击 **创建配置文件** 以保存您的设置，然后点击 **运行** 以打开您的新配置文件，享受安全浏览体验。

![](/src/assets/img/fingerprint/GoLogin/GoLogin3.avif)

**就是这样！** 您现已成功将 Lumiproxy 代理集成到 GoLogin 中。
