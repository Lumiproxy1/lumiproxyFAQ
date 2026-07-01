# 如何使用 VMLogin 设置 Lumiproxy
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

## VMLogin 代理集成

按照以下步骤在 VMLogin 中设置 Lumiproxy 代理：

### 步骤 1. 安装 VMLogin
下载并安装 [VMLogin](https://www.vmlogin.us/download.html)。启动应用程序并登录您的账户。

### 步骤 2. 创建新浏览器配置文件
在主菜单中，点击 **New browser profile** 按钮以打开设置页面。

![](/src/assets/img/fingerprint/VMLogin/VMLogin1.avif)

### 步骤 3. 设置配置文件
在 **Display name** 字段中输入浏览器配置文件名称。然后点击 **Setting proxy server** 按钮配置代理设置。

![](/src/assets/img/fingerprint/VMLogin/VMLogin2.avif)

### 步骤 4. 配置 Lumiproxy 代理
启用 **Proxy server** 开关，并填写 Lumiproxy 代理信息：

* **Proxy type**：根据代理类型选择 `HTTP` 或 `SOCKS5`。
* **IP address**：输入 `us.lumiproxy.io`。
* **Port**：使用您在 [Lumiproxy 仪表板](https://www.lumiproxy.com/user/dashboard/) 中提供的端口号。
* **Username**：输入 Lumiproxy 代理 `username`。
* **Password**：输入 Lumiproxy 代理 `password`。

:::info ℹ️
  **对于特定国家/地区的代理，可使用格式 `lumi-username-area-US` 以获取美国出口节点。**
:::

### 步骤 5. 测试代理
点击 **Test Proxy** 测试连接。如果测试成功并显示详细的 IP 信息，点击 **Confirm**。完成代理设置后点击 **Save**。

### 步骤 6. 保存配置文件
配置代理并设置其他偏好后，点击 **Save profile** 按钮以完成浏览器配置文件的保存。

**完成！** 您已成功将 Lumiproxy 代理集成到 VMLogin。
