# Adspower

This chapter introduces the configuration and usage instructions for **AdsPower**.

## Step 1. Download AdsPower
Go to the official **[AdsPower](https://www.adspower.com/download)** website to download and install the application.

##  Step 2. Create a New Profile
Once the installation is complete, open the application and click **New Profile** to create your first browser profile.

![](/src/assets/img/fingerprint/ads.png)

## Step 3. Configure Your Proxy
Next, set up the LumiProxy proxy by following these steps:

* **Proxy Type:** Select **HTTP** or **SOCKS5** (depending on your proxy type).
* **Proxy Host:** `us.lumiproxy.io` **(Using rotating IP as an example here)**
* **Proxy Port:** Enter the port number from your LumiProxy dashboard.
* **Proxy Username:** Enter your LumiProxy proxy zone username.
* **Proxy Password:** Enter your LumiProxy proxy zone password.

![](/src/assets/img/fingerprint/ads1.png)

## Step 4. Test the Proxy Connection
Click **Check Proxy** to ensure that the proxy is configured correctly.

:::info ℹ️
Some versions of AdsPower use `google.com` as the default test website. Since LumiProxy proxies block access to `google.com`, please ensure that the test website is not a search engine website.
:::

After all settings are complete, click **OK** to save the configuration.

## Step 5. Launch the Browser

Under the **Profiles** tab, click **Open** to launch the browser with the configured proxy.


That's it! You have successfully integrated the LumiProxy proxy into AdsPower and are now ready to use it!
![](/src/assets/img/fingerprint/ads2.png)


:::tip 💡
Visit `api.ip.cc` in the opened browser to check your current proxy IP address.
:::


