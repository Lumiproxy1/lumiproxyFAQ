# 紫鸟浏览器
本章介绍 **紫鸟浏览器** 的配置与使用说明。

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

## 紫鸟浏览器 代理集成
按照以下步骤在 紫鸟浏览器 中设置 Lumiproxy 代理：

### 步骤 1. 安装 VMLogin
下载并安装 **[紫鸟浏览器](https://www.ziniao.com/)**。启动应用程序并登录您的账户。

### 步骤 1. 创建代理窗口
点击**管理系统** 中的 **设备管理** -> **添加自有设备**；

![](/src/assets/img/fingerprint/ziniao/ziniao1-zh.png)


### 步骤 2. 配置 Lumiproxy 代理
* **Proxy type**：根据代理类型选择 `HTTP` 或 `SOCKS5`。
* **IP address**：输入 `us.lumiproxy.io`。
* **Port**：使用您在 [Lumiproxy 仪表板](https://www.lumiproxy.com/user/dashboard/) 中提供的端口号。
* **Username**：输入 Lumiproxy 代理 `username`。
* **Password**：输入 Lumiproxy 代理 `password`。

![](/src/assets/img/fingerprint/ziniao/ziniao2-zh.png)


### 步骤 3. 检测代理IP的连通性

填写好信息后，然后进行检查网络，检测代理IP的连通性！

![](/src/assets/img/fingerprint/ziniao/ziniao3-zh.png)

### 步骤 4. 启动浏览器
在 **账号管理** -> **全部账号** 界面，看到刚刚配置的账号信息，点击**启动**按钮开始使用，

![](/src/assets/img/fingerprint/ziniao/ziniao4-zh.png)



:::tip 💡
访问api.ip.cc
:::