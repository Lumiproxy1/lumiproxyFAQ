# How to Integrate Lumiproxy with ixBrowser

Use **Lumiproxy** and **ixBrowser** to simplify your account management and protect your browsing privacy. Follow this guide to configure Lumiproxy for a seamless and anonymous ixBrowser experience.

## How to Integrate Lumiproxy with ixBrowser

### Download and Install ixBrowser

1. Visit the official **[ixBrowser](https://ixbrowser.com/en)** website and download the application.
2. Install the software and log in using your account credentials.

### Create a New Profile

Open **ixBrowser** and go to the **Profile List** section under **Browser Configurations**.

Click **Create New Profile** to start setting up a new browser instance.

In the profile settings, enter a descriptive name in the **Profile Name** field for easy identification later.

![](/src/assets/img/fingerprint/ixb1.png)

### Configure Proxy Settings

1. On the profile settings page, switch to the **Proxy Configuration** tab.
2. Select **Custom** to enable the proxy settings options.

Fill in the proxy information obtained from your **Lumiproxy** Control Panel:

- **Proxy Type**: Select `HTTP` or `SOCKS5` based on your proxy type.
- **Proxy Host**: us.lumiproxy.io *(using rotating IP as an example)*
- **Proxy Port**: Enter the port number from your Lumiproxy Control Panel.
- **Proxy Username**: Use your Lumiproxy username.
- **Proxy Password**: Use your Lumiproxy password.

After entering the information, click **Create** to save the configuration.

:::info ℹ️

If using geolocation-based proxies, set your username in the format `lumi-username-area-XX` (e.g., `lumi-username-area-US`) to access specific regions.

:::

### Launch the Profile

Return to the **Profile List** section.

Locate your newly created profile and click **Open** to launch the browser with the configured **Lumiproxy** proxy settings.

Integrating **Lumiproxy** with **ixBrowser** ensures private and reliable account management while enhancing your online anonymity. Whether you're managing multiple accounts or performing geolocation-based operations, this setup provides a secure and seamless browsing experience. Get started today and enjoy more efficient operations!

:::tip 💡

Visit api.ip.cc

:::