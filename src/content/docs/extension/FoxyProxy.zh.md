# 如何使用 FoxyProxy 设置Lumiproxy

> 使用 FoxyProxy 轻松提升您的浏览体验！通过集成Lumiproxy，您可以安全地管理和切换代理服务器，以实现流畅高效的网页抓取、安全浏览和应用测试。请按照本指南设置Lumiproxy 与 FoxyProxy，以优化您的在线操作。


## 如何将Lumiproxy 集成到 FoxyProxy

### 安装 FoxyProxy 扩展程序">
- 对于 Chrome：访问 [Chrome 网上应用店](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp)，然后点击 添加至 Chrome。

- 对于 Firefox：前往 [Mozilla 附加组件页面](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)，然后点击 添加至 Firefox。

安装完成后，您将在浏览器工具栏中看到 FoxyProxy 图标。
  

 ### 打开 FoxyProxy 设置
1. 点击工具栏中的 FoxyProxy 图标，并从下拉菜单中选择 选项。
2. 这将打开 FoxyProxy 设置页面，您可以在其中管理代理配置。

![](/src/assets/img/extension/FoxyProxy/FoxyProxy1.avif)

### 添加新的代理配置">
1. 在 FoxyProxy 设置菜单中，进入`代理`选项卡。
2. 点击 `添加` 按钮，打开代理配置窗口。

![](/src/assets/img/extension/FoxyProxy/FoxyProxy2.avif)

### 输入Lumiproxy 代理详细信息
1. 在代理设置表单中，输入您的Lumiproxy 账户信息：
  -  `类型`：根据您的代理类型选择 `HTTP`或 `SOCKS5`。
  - `主机名` ：输入 `us.lumiproxy.io`。
  -  `端口`：使用您的 [Lumiproxy 仪表板](https://www.lumiproxy.com/zh-hans/user/dashboard/s) 提供的端口号。
  -  `用户名`：输入您的Lumiproxy 用户名。
  -  `密码`：输入您的Lumiproxy 密码。

2. 输入所有详细信息后，点击 `保存 `以存储代理配置。

  
如果要使用特定国家的代理，请在用户名后添加国家代码（例如，`lumi-username-area-US` 表示使用美国代理）。
   

### 激活并测试您的代理

1. 要启用已配置的代理，请点击工具栏中的 FoxyProxy 图标，并选择您刚刚创建的代理。
2. 访问 [api.ip.cc](https://api.ip.cc) 以验证连接。显示的 IP 地址应与您的Lumiproxy 代理匹配。

:::info ℹ️
如果您使用的是Lumiproxy 的数据中心或 ISP 代理，您将能够查看代理 IP 地址。住宅代理可能会被我们的策略阻止，因此您可能会收到错误提示。若要查看住宅代理的详细信息（包括位置）
:::

![](/src/assets/img/extension/FoxyProxy/FoxyProxy3.avif)

现在，您已成功配置 FoxyProxy 与Lumiproxy，可以享受安全、流畅的浏览体验，并高效地进行网络操作。无论是测试应用、抓取数据，还是增强隐私保护，该设置都能让您的代理管理变得更加轻松便捷。
