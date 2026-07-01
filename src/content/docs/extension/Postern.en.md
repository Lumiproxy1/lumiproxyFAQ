# How to Set Up LumiProxy in Postern

> Integrate LumiProxy with Postern to easily manage your proxy configurations. Follow this guide to securely configure your proxy for an efficient and seamless browsing experience.

## How to Set Up LumiProxy in Postern

### Download and Install Postern

1. Search for **Postern** in the **Google Play Store** and install the app on your **Android** device.
2. Open the app and grant all required permissions.

### Configure Proxy Settings

1. Open Postern and click **Add Proxy** to begin configuring a new proxy profile.

![](/src/assets/img/extension/Postern/Postern1.avif)

2. Fill out your LumiProxy proxy connection details:

* **Server Name**: Enter a descriptive name (e.g., "LumiProxy Proxy").
* **Server Address**: `us.lumiproxy.io`.
* **Server Port**: Use the port number provided in your [LumiProxy Dashboard](https://www.lumiproxy.com/user/dashboard/).
* **Server Type**: Choose `HTTP` or `SOCKS5` depending on your proxy protocol type.
* **Username**: Enter your LumiProxy proxy `username`.
* **Password**: Enter your LumiProxy proxy `password`.

3. Click **Save** to store the proxy configuration.

### Configure Rules to Enable the Proxy

1. Open the side menu in the app and navigate to **Rules**.

![](/src/assets/img/extension/Postern/Postern2.avif)

2. Click **Add Rule** to create a new proxy routing rule.

![](/src/assets/img/extension/Postern/Postern3.avif)

3. Configure the following rule properties:

* **Match Method**: Select **Match All** to route all device traffic through the proxy.
* **Rule Type**: Select **Proxy/Tunnel**.
* **Proxy/Proxy Group**: Ensure the proxy profile you just created is selected (e.g., http://us.lumiproxy.io/:port`).

4. Click **Save** to complete the rule setup.

### Activate the Proxy

1. Open the side menu in the app and toggle **VPN Off** to turn on the connection (it will switch to indicate that the VPN is active).
2. Once enabled, all your network traffic will be securely routed through your LumiProxy proxy.

![](/src/assets/img/extension/Postern/Postern4.avif)

:::info ℹ️
For geo-targeted proxies, update your username format to include a country code suffix (for example, `lumi-username-area-US`) to route your session through a specific location.
:::

You have successfully configured LumiProxy in Postern, and your device application traffic will now be transmitted securely and anonymously. Whether for personal use or business operations, this setup ensures privacy and a seamless connection.