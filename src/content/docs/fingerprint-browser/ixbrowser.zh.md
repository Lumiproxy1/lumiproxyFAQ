# 如何将 Bright Data 与 ixBrowser 集成
使用 **Lumiproxy** 和 **IXBrowser** 简化您的账户管理并保护您的浏览安全。按照本指南配置 Lumiproxy，以实现无缝且匿名的 IXBrowser 体验
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
## 如何将 Lumiproxy 与 IXBrowser 集成

### 下载并安装 IXBrowser

1. 访问 **[IXBrowser](https://ixbrowser.com/zh)** 官网 并下载应用程序。
2. 安装软件并使用您的账户凭据登录。

### 创建新配置文件
打开 **IXBrowser** ，进入 **浏览器配置**  下的 配置文件列表 版块。
点击 创建新配置文件 以开始设置新的浏览器实例。
在配置文件设置中，在 配置文件名称 字段输入一个描述性名称，以便稍后轻松识别您的配置文件。

![](/src/assets/img/fingerprint/ixb1.png)

### 配置代理设置
1. 在配置文件设置页面，切换到 **代理配置** 选项卡。
2. 选择 **自定义** 以启用代理设置选项。
填写从您的 **Lumiproxy** 控制面板 获取的代理信息：
- 代理类型：根据您的代理类型选择 `HTTP` 或 `SOCKS5`。
- 代理主机：us.lumiproxy.io **(这里以旋转ip作为案例)**
- 代理端口：输入 Lumiproxy 控制面板中的端口号。
- 代理账号：使用您的 Lumiproxy 用户名。
- 代理密码：使用您的 Lumiproxy 密码。
输入完毕后，点击 **创建** 以保存配置。

:::info ℹ️
若使用地理定位代理，请按照 lumi-username-area-XX 格式设置您的用户名（例如：lumi-username-area-US），以访问特定地区。
:::


### 启动配置文件
返回 **配置文件列表** 版块。
找到您新创建的配置文件，点击 **打开** 以使用配置的 **Lumiproxy** 代理设置启动浏览器。

![](/src/assets/img/fingerprint/ixb2.png)
将 **Lumiproxy** 与 **IXBrowser** 集成可确保私密且可靠的账户管理，同时提升您的在线匿名性。无论您是管理多个账户还是进行地理定位操作，此设置都能为您提供安全无缝的浏览体验。立即开始，享受更高效的操作体验！

:::tip 💡
访问api.ip.cc
:::
