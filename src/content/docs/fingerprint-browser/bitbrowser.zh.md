# 如何在 BitBrowser 中使用 Lumiproxy

使用 **lumiproxy** 和 **BitBrowser** 简化您的多账号浏览。本指南将指导您如何将 **lumiproxy** 代理集成到 **BitBrowser**，以确保所有账号的安全、私密和高效浏览。
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
## 如何在 BitBrowser 中使用 Lumiproxy

### 步骤 1：下载并安装 BitBrowser

1. 访问官方 **[BitBrowser](https://www.bitbrowser.net/)** 网站 并下载适用于您的设备的应用程序。
2. 按照安装指南完成安装，并在安装完成后启动应用程序。
3. 使用您的凭据登录 BitBrowser 账号。

### 步骤 2：进入浏览器账号管理页面
1. 登录后，您将进入 BitBrowser 的主界面。
2. 在菜单或仪表板中找到 **“浏览器账号”** 选项。
![](/src/assets/img/fingerprint/bit1.png)

### 步骤 3：创建新的浏览器账号
1. 点击 **“+ 添加”** 按钮以创建新的浏览器账号。
2. 在账号设置窗口中，为该账号命名，以便后续识别。
![](/src/assets/img/fingerprint/bit2.png)

### 步骤 4：输入 Lumiproxy 代理信息
登录您的 Lumiproxy 账号，并选择您要使用的代理区域。在 **概览** 页面下的 **访问详情** 中，您可以找到所需的代理信息。
1. 在账号配置页面向下滚动至 **“代理”** 部分。
2. 按以下方式输入您的 Lumiproxy 代理信息：
- `类型`：根据 Lumiproxy 代理类型选择协议（`HTTP` 或 `SOCKS5`）。
- `主机`：us.lumiproxy.io **(这里以旋转ip作为案例)**
- `端口`：输入 Lumiproxy 控制面板中的端口号
- `用户名`：输入您的 Lumiproxy 代理用户名。对于特定区域的代理，请调整用户名格式（例如 `lumi-username-area-US`）。
- `密码`：输入您的 Lumiproxy 代理密码。
3. 仔细检查所有输入信息，确保准确无误。


### 步骤 5：测试并保存代理设置
1. 点击 **“检查代理”** 按钮以验证连接是否成功。
2. 如果测试成功，点击 **“确认”** 以保存账号设置。


### 步骤 6：启动账号并验证设置
1. 在 **浏览器账号** 仪表板中，找到您刚刚创建的账号并点击 **“打开”**。
2. 浏览器启动后，访问 `api.ip.cc` 以确认显示的 IP 是否与您的 Lumiproxy 代理 IP 匹配。
3. 如果 IP 匹配，说明代理已成功集成，您的账号可以进行安全私密的浏览。
![](/src/assets/img/fingerprint/bit3.png)

通过将 Lumiproxy 代理集成到 BitBrowser，您可以安全高效地管理多个在线身份。无论是管理社交媒体账号、电商运营还是研究任务，Lumiproxy 都能确保稳定、私密且具备地理灵活性的浏览体验。在 BitBrowser 上享受流畅的工作流和更高的匿名性吧！


:::tip 💡
访问api.ip.cc
:::
