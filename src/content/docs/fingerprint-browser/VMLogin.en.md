# How to Set Up LumiProxy in VMLogin

## VMLogin Proxy Integration

Follow these steps to set up your LumiProxy proxy within VMLogin:

### Step 1. Install VMLogin

Download and install **[VMLogin](https://www.vmlogin.us/download.html)**. Launch the application and log into your account.

### Step 2. Create a New Browser Profile

In the main menu, click the **New browser profile** button to open the configuration interface.

![](/src/assets/img/fingerprint/VMLogin/VMLogin1.avif)

### Step 3. Set Up Profile Details

Enter a name for your browser profile in the **Display name** field. Then, click the **Setting proxy server** button to configure your proxy details.

![](/src/assets/img/fingerprint/VMLogin/VMLogin2.avif)

### Step 4. Configure LumiProxy Proxy Settings

Enable the **Proxy server** toggle switch and fill out the LumiProxy connection details:

* **Proxy type**: Choose `HTTP` or `SOCKS5` based on your proxy protocol.
* **IP address**: Enter `us.lumiproxy.io`.
* **Port**: Use the port number provided in your [LumiProxy Dashboard](https://www.lumiproxy.com/user/dashboard/).
* **Username**: Enter your LumiProxy proxy `username`.
* **Password**: Enter your LumiProxy proxy `password`.

:::info ℹ️
**For country-specific proxy targeting, use the format `lumi-username-area-US` to route your connection through a United States exit node.**
:::

### Step 5. Test the Proxy Connection

Click **Test Proxy** to check the connection. If the test succeeds and displays detailed IP information, click **Confirm**. Once the proxy settings are complete, click **Save**.

### Step 6. Save the Browser Profile

After configuring the proxy and setting up other preferences, click the **Save profile** button to finalize your browser profile configuration.

**All done!** You have successfully integrated LumiProxy proxies into VMLogin.