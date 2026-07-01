# 如何在 MuLogin 中使用 Lumiproxy

> 通过集成 Lumiproxy 代理增强您的 MuLogin 体验。本指南将向您展示如何设置安全、匿名的连接，以实现更好的自动化、数据收集和账户管理。

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
## 如何在 MuLogin 中配置 Lumiproxy 代理

按照以下步骤在 MuLogin 中设置 Lumiproxy 代理：

### 访问 MuLogin 仪表盘

1. 访问 [MuLogin](https://www.mulogin.com/) 并登录您的账户。
2. 登录后，您将看到仪表盘，其中列出了已有的浏览器配置文件（如果有的话）。
 

### 创建或编辑浏览器配置文件
1. 如果需要新建配置文件，点击 **“快速创建”** 按钮。
![](/src/assets/img/fingerprint/MuLogin/MuLogin1.avif)
   

2. 如果想修改已有配置文件，选择对应文件，然后点击 **“编辑”**、**“设置”** 或 **齿轮图标**（不同版本 UI 可能略有不同）。
![](/src/assets/img/fingerprint/MuLogin/MuLogin2.avif)

### 输入名称并进入代理设置
1. 在 **“基本配置”** 页面，找到 **“显示名称”** 字段。

2. 输入一个便于识别的名称，以便日后管理。

![](/src/assets/img/fingerprint/MuLogin/MuLogin3.avif)

3. 向下滚动，找到 **“代理设置”** 选项，并点击进入代理配置界面。

![](/src/assets/img/fingerprint/MuLogin/MuLogin4.avif)

### 输入 Lumiproxy 代理信息
1. 进入代理设置界面后，填写以下信息：

* **协议/类型**：选择 `HTTP`或 `SOCKS5`（根据您在 Lumiproxy 购买的代理类型）。
 ![](/src/assets/img/fingerprint/MuLogin/MuLogin5.avif)           

* **代理地址**：输入 `us.lumiproxy.io` 或 Lumiproxy 提供的地址。

* **端口号**：填写您在 [Lumiproxy 仪表盘](https://www.lumiproxy.com/zh-hans/user/dashboard/) 获取的端口号。

* **用户名 & 密码**：输入您的 Lumiproxy 账户信息。

:::info ℹ️

如果需要使用特定国家的代理出口，请在用户名中添加 lumi-username-area-US（示例为美国）。

:::

输入 lumiproxy 代理信息后，点击 “测试代理” 或 “检查网络” 以确保代理连接正常。
如果测试通过，点击 “保存” 确认设置。

### 启动浏览器配置文件并验证

保存设置后，在 MuLogin 仪表盘中启动该浏览器配置文件。
进入浏览器后，访问 api.ip.cc 以确认您的 IP 地址是否已变更为 lumiproxy 代理的 IP。
如果 IP 地址正确匹配，则表示 MuLogin 已成功集成 lumiproxy 代理。
至此，您已成功在 MuLogin 中配置 lumiproxy 代理。这将大幅提升您的在线操作能力，让您能够更安全地管理多个账户，减少被检测的风险，并保持流畅、稳定的工作流。