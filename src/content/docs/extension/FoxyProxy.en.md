# How to Set Up LumiProxy in FoxyProxy

> Elevate your browsing experience effortlessly with FoxyProxy! By integrating LumiProxy, you can securely manage and toggle between proxy servers for smooth and efficient web scraping, secure browsing, and application testing. Follow this guide to set up LumiProxy with FoxyProxy to optimize your online operations.

## How to Integrate LumiProxy into FoxyProxy

### Install the FoxyProxy Extension

* **For Chrome:** Visit the **[Chrome Web Store](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp)** and click **Add to Chrome**.

* **For Firefox:** Head over to the **[Mozilla Add-ons Page](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)** and click **Add to Firefox**.

Once the installation is complete, you will see the FoxyProxy icon in your browser toolbar.

### Open FoxyProxy Settings
![](/src/assets/img/extension/FoxyProxy/FoxyProxy1.avif)
1. Click the FoxyProxy icon in your toolbar and select **Options** from the dropdown menu.
2. This will launch the FoxyProxy settings page, where you can manage your proxy configurations.

### Add a New Proxy Configuration
![](/src/assets/img/extension/FoxyProxy/FoxyProxy2.avif)
1. In the FoxyProxy settings menu, navigate to the **Proxies** tab.
2. Click the **Add** button to open the proxy configuration window.

### Enter LumiProxy Proxy Connection Details

1. Fill out your LumiProxy credentials and server info in the proxy setup form:
* **Type:** Choose **HTTP** or **SOCKS5** depending on your proxy protocol.
* **Hostname:** Enter `us.lumiproxy.io`.
* **Port:** Use the port number provided in your [LumiProxy Dashboard](https://www.lumiproxy.com/user/dashboard/).
* **Username:** Enter your LumiProxy proxy username.
* **Password:** Enter your LumiProxy proxy password.


2. Once all the details have been filled out, click **Save** to store the proxy configuration.

If you need to use a proxy targeting a specific country, append the country code right after your username (for example, `lumi-username-area-US` for a United States proxy session).

### Activate and Test Your Proxy

1. To enable your newly configured proxy, click the FoxyProxy icon in your browser toolbar and select the proxy profile you just created.
2. Visit [api.ip.cc](https://api.ip.cc) to check and verify your connection status. The displayed IP address should match your LumiProxy proxy session.

:::info ℹ️
If you are using LumiProxy Datacenter or ISP proxies, you will be able to check the proxy IP address directly. Standard Residential proxies may be blocked by our internal test target policy, which might return an error message. Follow our alternative verification steps to view detailed residential proxy session data, including geographic location info.
:::

![](/src/assets/img/extension/FoxyProxy/FoxyProxy3.avif)
You have successfully configured FoxyProxy with LumiProxy, enabling a safe, smooth browsing experience and high-efficiency network operations. Whether testing applications, scraping data, or boosting privacy protection, this setup makes managing your proxy workflows quick and seamless.