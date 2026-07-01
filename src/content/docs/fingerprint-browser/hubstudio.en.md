# Hubstudio Proxy Integration

Streamline your account management and secure your browsing with **LumiProxy** and **Hubstudio**. Follow this guide to configure LumiProxy for a seamless and anonymous **Hubstudio** experience.

## Step 1. Download Hubstudio

Go to the official **[Hubstudio](https://www.hubstudio.com/index.html)** website to download and install the application.

## Step 2. Create a New Profile

Once the installation is complete, open the application and click **New Profile** to create your first browser profile.
![](/src/assets/img/fingerprint/Hubstudio/Hubstudio1-zh.png)

## Step 3. Configure Your Proxy

Next, let's set up the LumiProxy proxy. Follow these steps:

* **Proxy Type:** Select **HTTP or SOCKS5** (depending on your proxy protocol).
* **Proxy Host:** `us.lumiproxy.io` **(using rotating IP as an example here)**
* **Proxy Port:** Enter the port number from your LumiProxy Dashboard.
* **Proxy Username:** Enter your LumiProxy proxy zone **username**.
* **Proxy Password:** Enter your LumiProxy proxy zone **password**.
![](/src/assets/img/fingerprint/Hubstudio/Hubstudio2-zh.png)
## Step 4. Test the Proxy Connection

Click **Check Proxy** to ensure the proxy is configured correctly.

![](/src/assets/img/fingerprint/Hubstudio/Hubstudio3-zh.png)
:::info ℹ️
Some versions of Hubstudio use google.com as the default test website. LumiProxy proxies block direct access to google.com for connection tests, so please ensure your test website target is changed to a non-search engine URL.
:::

Once all configurations are complete, click **OK** to save your settings.

## Step 5. Launch the Browser

Under the **Environment List / Tabs** view, click **Open** to launch the browser with your configured proxy.
![](/src/assets/img/fingerprint/Hubstudio/Hubstudio4-zh.png)

That's it! You have successfully integrated LumiProxy proxies into Hubstudio and are ready to go!

:::tip 💡
You can visit `api.ip.cc` inside the launched browser to verify your active IP details.
:::