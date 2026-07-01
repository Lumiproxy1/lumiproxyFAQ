# 如何将 Lumiproxy 与 Sphere 浏览器集成

> 将 Lumiproxy 与 Sphere 浏览器集成，以安全且匿名地管理多个账户。按照此逐步指南进行无缝配置。

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
## 如何将 Lumiproxy 与 Sphere 浏览器集成

### 步骤 1. 下载并安装 Sphere 浏览器

1. 访问 [Sphere 浏览器官网](https://linkensphere.info/en/#) 并下载应用程序。
2. 在设备上安装软件，并使用账户凭据登录。
3. 打开 Sphere 浏览器并点击 **Proxy** 开始配置设置。

![](/src/assets/img/fingerprint/linkensphere/linkensphere1.avif)


### 步骤 2. 配置代理设置

1. 在创建配置文件窗口中，在 **Profile Name** 字段中提供唯一且描述性的名称，以便轻松识别浏览器实例。
2. 前往您的 [Lumiproxy 仪表板](https://www.lumiproxy.com/user/dashboard/)
3. 在 **Overview** 标签的 **Access Details** 部分，使用文本编辑器生成连接字符串，格式如下：`` host:port:username:password` ``
4. 返回 Sphere 浏览器，将凭据粘贴到相应字段中。
5. 点击 **Create** 按钮（带勾选图标）保存代理设置。

:::info 
  对于地理定位代理，将用户名格式化为 `lumi-username-area-XX`（例如 `lumi-username-area-US`）以选择特定位置。
:::

### 步骤 3. 启动并验证

1. 找到刚配置的配置文件。
2. 点击 **Check Proxy** 确保连接成功。

![](/src/assets/img/fingerprint/linkensphere/linkensphere2.avif)

将 Lumiproxy 与 Sphere 浏览器集成，可确保安全且匿名的浏览体验，满足您的需求。无论是管理多个账户还是访问地理限制内容，此配置都能提供所需的隐私性和灵活性。立即开始利用 Lumiproxy 和 Sphere 浏览器的强大功能吧！
