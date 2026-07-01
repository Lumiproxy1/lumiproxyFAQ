# 如何使用 Postern 设置 Lumiproxy

> 将 Lumiproxy 与 Postern 集成，以轻松管理您的代理配置。按照本指南安全配置代理，实现高效、无缝的浏览体验。


## 如何使用 Postern 设置 Lumiproxy

### 下载并安装 Postern
1. 在 **Google Play** 商店中搜索 **Postern**，并在您的 **Android** 设备上安装该应用。
2. 打开应用并允许所有必需的权限。

### 配置代理设置
1. 打开 Postern，点击 **Add Proxy** 以开始配置新代理。

![](/src/assets/img/extension/Postern/Postern1.avif)
   

2. 填写您的 Lumiproxy 代理详细信息：

* **服务器名称**：输入一个描述性名称（例如 "Lumiproxy Proxy"）。
* **服务器地址**：`us.lumiproxy.io`。
* **服务器端口**：使用您的 [Lumiproxy 控制面板](https://www.lumiproxy.com/zh-hans/user/dashboard/) 中提供的端口号。
* **服务器类型**：根据您的代理类型选择 `HTTP` 或 `SOCKS5`。
* **用户名**：输入您的 Lumiproxy `username`。
* **密码**：输入您的 Lumiproxy `password`。

3. 点击 **Save** 保存代理配置。
 

### 配置规则以启用代理
1. 进入应用菜单，导航到 **Rules**。

![](/src/assets/img/extension/Postern/Postern2.avif)
  

2. 点击 **Add Rule** 以创建新的代理规则。

![](/src/assets/img/extension/Postern/Postern3.avif)

3. 进行以下设置：

* **匹配方法**：选择 **Match All** 以将所有流量路由至代理。
* **规则类型**：选择 **Proxy/Tunnel**。
* **代理/代理组**：确保已选择您配置的代理（例如 `http://us.lumiproxy.io/:port`）。

4. 点击 **Save** 以完成规则配置。
  
### 激活代理
1. 打开应用菜单，切换 **VPN Off** 以启用连接。
2. 启用后，所有流量将通过您的 Lumiproxy 代理进行路由。

![](/src/assets/img/extension/Postern/Postern4.avif)

:::info ℹ️
对于地理定位代理，请更新您的用户名格式以包含国家代码（例如 `lumi-username-area-US`），以便路由至特定位置。
:::
  

现在，Lumiproxy 已成功配置到 Postern，您的应用流量将安全、匿名地传输。无论是个人使用还是业务场景，这种设置都能确保隐私和无缝连接。
