# 如何在 Proxifier 中配置 Lumiproxy

> 使用 Proxifier 简化网络管理！通过集成 Lumiproxy，您可以安全地为缺少原生代理支持的应用程序路由流量。借助 Proxifier 灵活的规则系统，您可以自定义流量路由，享受无缝、匿名的浏览体验。


## 如何在 Proxifier 中集成 Lumiproxy

### 步骤 1. 下载并安装 Proxifier

1. 访问 [Proxifier 官网](https://www.proxifier.com/download/) 下载应用程序。
2. 按照安装说明操作，并在系统中启动 Proxifier。

### 步骤 2. 访问代理设置

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier1.avif)

1. 打开 Proxifier，导航到 **Profile** 菜单。
2. 选择 **Proxy Servers** 管理代理配置。

### 步骤 3. 添加 Lumiproxy 代理

1. 点击 **Add** 按钮配置新代理。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier2.png)


2. 在 **Proxy Server** 对话框中输入以下信息：

* **Type**：选择 `HTTP` 或 `SOCKS5`。
* **Address**：`us.lumiproxy.io`。
* **Port**：输入来自 [Lumiproxy 仪表板](https://www.lumiproxy.com/zh-hans/user/dashboard/) 的端口号。
* 启用 **Authentication** 并提供：
  * **Username**：您的 Lumiproxy
 用户名。
  * **Password**：您的 Lumiproxy
 密码。

3. 点击 **OK** 保存设置。代理现在将显示在列表中。

:::info
  **`对于地理定位代理，请在用户名中包含国家代码（例如 lumi-username-area-US 表示美国节点）。`**
:::

### 步骤 4. 测试代理连接

1. 在 **Proxy Servers** 部分，选择已配置的代理。
2. 点击 **Check**，然后 **Start Testing**。确保测试成功后再继续。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier3.png)

### 步骤 5. 为应用创建代理规则

1. 转到 **Profile** > **Proxification Rules**。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier4.avif)
2. 点击 **Add** 设置新规则。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier5.png)

3. 给规则命名以便清晰识别。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier6.png)

4. 使用 **Browse** 按钮指定应用程序（如 Chrome、Firefox）。

![](/src/assets/img/Clash-proxy/Proxifier/Proxifier7.avif)

5. 选择流量路由方式：

* 通过代理。
* 直接连接互联网。
* 完全阻止。
![](/src/assets/img/Clash-proxy/Proxifier/Proxifier8.png)


6. 保存规则并将其移至列表顶部以优先执行。
![](/src/assets/img/Clash-proxy/Proxifier/Proxifier9.png)


### 步骤 6. 验证并开始浏览

1. 启动与规则关联的应用程序。
2. 访问 IP 检查网站（如 httpbin.org/ip）确认代理已激活。
使用 Lumiproxy 配置 Proxifier 后，您可以精确管理网络流量，通过安全代理路由应用程序，并确保复杂工作流程的隐私。无论是追求匿名、快速连接还是应用程序特定路由，这套配置都能让您轻松掌控互联网体验。
​
## 为什么使用 Proxifier 和 Lumiproxy 时会出现错误的地理位置或被阻止？
Proxifier 允许您控制运行中的应用程序，并选择性地通过 Lumiproxy 代理路由流量。如果应用尝试访问的是 IP 地址而非域名，Lumiproxy 可能会阻止请求或通过我们的 Superproxy 服务器路由，而非通过代理节点。
这意味着目标域将看到请求来自 Lumiproxy 服务器，而非您分配的代理，从而可能被阻止。
由于合规性规定，Lumiproxy 不允许针对 IP 地址进行访问。