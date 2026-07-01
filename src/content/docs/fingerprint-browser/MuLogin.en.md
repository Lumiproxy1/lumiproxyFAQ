# How to Use LumiProxy in MuLogin

> Enhance your MuLogin experience by integrating LumiProxy proxies. This guide will show you how to set up secure, anonymous connections for better automation, data collection, and account management.

## How to Configure LumiProxy Proxies in MuLogin

Follow these steps to set up your LumiProxy proxy within MuLogin:

### Access the MuLogin Dashboard

1. Visit [MuLogin](https://www.mulogin.com/) and log into your account.
2. Once logged in, you will be directed to the main dashboard, which lists your existing browser profiles (if any).

### Create or Edit a Browser Profile

1. To create a brand new profile, click the **"Quick Create"** button.

![](/src/assets/img/fingerprint/MuLogin/MuLogin1.avif)

2. To modify an existing profile, select the target profile from the list and click **"Edit"**, **"Settings"**, or the **gear icon** (the UI text may vary slightly depending on your software version).

![](/src/assets/img/fingerprint/MuLogin/MuLogin2.avif)

### Enter Profile Name and Access Proxy Settings

1. On the **"Basic Configuration"** page, find the **"Display Name"** field.
2. Enter a highly recognizable name to make it easy to manage later on.

![](/src/assets/img/fingerprint/MuLogin/MuLogin3.avif)

3. Scroll down to locate the **"Proxy Settings"** section and click it to open the proxy configuration interface.

![](/src/assets/img/fingerprint/MuLogin/MuLogin4.avif)

### Enter LumiProxy Proxy Details

1. Once inside the proxy configuration interface, fill in the following connection details:

* **Protocol/Type**: Choose `HTTP` or `SOCKS5` (depending on the type of proxy you purchased from LumiProxy).
![](/src/assets/img/fingerprint/MuLogin/MuLogin5.avif)

* **Proxy Address**: Enter `us.lumiproxy.io` or the specific proxy endpoint provided by LumiProxy.
* **Port**: Fill in the exact port number obtained from your [LumiProxy Dashboard](https://www.lumiproxy.com/user/dashboard/).
* **Username & Password**: Enter your LumiProxy proxy credentials.

:::info ℹ️
If you need to route your session through a specific country, append the country tag to your proxy username, for example: `lumi-username-area-US` (using the United States as an example).
:::

After entering the LumiProxy proxy details, click **"Check Proxy"** or **"Test Connection"** to verify that the connection works perfectly.
If the test passes successfully, click **"Save"** to apply your settings.

### Launch the Browser Profile and Verify

With your settings saved, launch this specific browser profile directly from the MuLogin dashboard.
Once the browser window opens, visit [api.ip.cc](https://www.google.com/search?q=https%3A%2F%2Fapi.ip.cc) to confirm that your IP address has successfully changed to the LumiProxy proxy IP.

If the IP address matches your proxy target location, your MuLogin profile is now successfully integrated with LumiProxy. This setup will significantly boost your online capabilities, allowing you to manage multiple accounts safely, lower detection risks, and maintain a smooth, stable workflow.