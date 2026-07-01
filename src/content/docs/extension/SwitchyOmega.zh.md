# 如何在 SwitchyOmega 中设置 Lumiproxy

> 轻松管理您的代理！学习如何将 Lumiproxy 集成到 SwitchyOmega 浏览器扩展中，以增强隐私、简化账户管理，并优化网页抓取工作流。



## 如何在 SwitchyOmega 中设置 Lumiproxy

### 步骤 1：安装 SwitchyOmega

1. 访问适用于您的浏览器的扩展页面：
   * [Chrome 扩展](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)
   * [Firefox 插件](https://addons.mozilla.org/en-US/firefox/addon/switchyomega)

2. 将 SwitchyOmega 添加到浏览器。安装完成后，工具栏中将显示 SwitchyOmega 图标。

### 步骤 2：创建新的代理配置文件

1. 点击浏览器工具栏的 **SwitchyOmega 图标** 并选择 **Options** 打开设置页面。

![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega1.avif)

2. 在设置页面，点击 **New Profile**。

![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega2.avif)

3. 为配置文件提供一个描述性名称（例如 “Lumiproxy”），选择 **Proxy Profile**，然后点击 **Create** 保存。

![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega3.avif)

### 步骤 3：配置 Lumiproxy 代理详情

1. 在配置文件中输入以下 Lumiproxy 代理信息：

   * **Protocol**：根据代理类型选择 HTTP 或 SOCKS5。
   * **Server**：输入 `us.lumiproxy.io`。
   * **Port**：输入 [Lumiproxy 仪表板](https://www.lumiproxy.com/zh-hans/user/dashboard/) 提供的端口号。

2. 点击 **Lock** 图标添加认证信息：

   * **Username**：您的 Lumiproxy 用户名
   * **Password**：您的 Lumiproxy 密码

3. 点击 **Save Changes** 保存代理配置。

![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega4.avif)


:::info 
  如果需要特定国家的代理，请在用户名后添加国家代码，例如 `lumi-username-area-US`。
:::

### 步骤 4：应用并激活代理

1. 点击 **Apply Changes** 完成设置。

![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega5.avif)

2. 要启用代理，从浏览器工具栏的 SwitchyOmega 下拉菜单中选择已配置的配置文件。


![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega6.avif)


现在，您的 Lumiproxy 代理已与 SwitchyOmega 完全集成。无论是管理多个账户、安全浏览，还是高效抓取数据，这个设置都能为您提供灵活且可控的代理体验