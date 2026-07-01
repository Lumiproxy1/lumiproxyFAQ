# How to Set Up LumiProxy in SwitchyOmega

> Manage your proxies with ease! Learn how to integrate LumiProxy into the SwitchyOmega browser extension to enhance privacy, streamline account management, and optimize web scraping workflows.

## How to Set Up LumiProxy in SwitchyOmega

### Step 1: Install SwitchyOmega

1. Visit the extension page appropriate for your browser:
* **[Chrome Web Store](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)**

* **[Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/switchyomega)**


2. Add SwitchyOmega to your browser. Once installed, the SwitchyOmega icon will appear in your browser toolbar.

### Step 2: Create a New Proxy Profile

1. Click the **SwitchyOmega icon** on your browser toolbar and select **Options** to open the settings page.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega1.avif)

2. On the settings page, click **New Profile** in the left menu.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega2.avif)

3. Enter a descriptive name for your profile (e.g., “LumiProxy”), select **Proxy Profile**, and click **Create** to save.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega3.avif)

### Step 3: Configure LumiProxy Settings

1. Enter the following LumiProxy connection details into the profile configuration fields:
* **Protocol**: Select HTTP or SOCKS5 depending on your chosen proxy type.
* **Server**: Enter `us.lumiproxy.io`.
* **Port**: Enter the port number provided in your [LumiProxy Dashboard](https://www.lumiproxy.com/user/dashboard/).


2. Click the **Lock (Padlock)** icon on the right side of the row to add your authentication credentials:
* **Username**: Your LumiProxy proxy username
* **Password**: Your LumiProxy proxy password


3. Click **Save Changes** within the credential popup.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega4.avif)

:::info
If you require a proxy from a specific country, append the target country code directly to your username, for example: `lumi-username-area-US`.
:::

### Step 4: Apply and Activate the Proxy

1. Click **Apply Changes** in the left sidebar menu to finalize the configuration setup.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega5.avif)

2. To activate the proxy, click the SwitchyOmega icon in your browser toolbar and select your newly configured profile from the dropdown menu.
![](/src/assets/img/extension/SwitchyOmega/SwitchyOmega6.avif)

Your LumiProxy setup is now fully integrated with SwitchyOmega. Whether you are managing multiple profiles, browsing securely, or scaling data scraping tasks, this setup gives you total control over your proxy environment.