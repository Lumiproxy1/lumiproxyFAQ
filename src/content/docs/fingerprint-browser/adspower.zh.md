# AdsPower 代理集成

本章介绍 **Adspower** 的配置与使用说明。
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
## 步骤 1. 下载 AdsPower
前往 **[AdsPower](https://www.adspower.com/download)** 官网 下载并安装该应用程序。


## 步骤 2. 创建新配置文件

安装完成后，打开应用程序，点击 **新建配置文件** 来创建您的第一个浏览器配置文件。
![](/src/assets/img/fingerprint/ads.png)

## 步骤 3. 配置您的代理

接下来，我们来设置 lumiproxy 代理，按照以下步骤操作：
- 代理类型: 选择 HTTP 或 SOCKS5（根据您的代理类型）。
- 代理主机:  us.lumiproxy.io **(这里以旋转ip作为案例)**
- 代理端口: 输入 Lumiproxy 控制面板中的端口号
- 代理用户名: 输入您的 lumiproxy 代理区域 username。
- 代理密码: 输入您的 lumiproxy 代理区域 password。

![](/src/assets/img/fingerprint/ads1.png)

## 步骤 4. 测试代理连接
点击 **检查代理** 以确保代理配置正确。

:::info ℹ️
某些版本的 AdsPower 使用 google.com 作为默认的测试网站。lumiproxy 代理会阻止对 google.com 的访问，因此请确保测试网站不是搜索引擎网站。
:::



所有设置完成后，点击 **确定** 保存配置。



## 步骤 5. 启动浏览器
在 **标签** 下点击 **打开** 以启动已配置代理的浏览器。
![](/src/assets/img/fingerprint/ads2.png)

就这样！您已成功将 lumiproxy 代理集成到 AdsPower 中，现在可以开始使用了！

:::tip 💡
访问api.ip.cc
:::
