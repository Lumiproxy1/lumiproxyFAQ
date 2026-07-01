# How to Use LumiProxy in BitBrowser

Streamline your multi-account browsing using **LumiProxy** and **BitBrowser**. This guide will walk you through integrating **LumiProxy** proxies into **BitBrowser** to ensure secure, private, and efficient browsing for all your accounts.

## How to Use LumiProxy in BitBrowser

### Step 1: Download and Install BitBrowser

1. Visit the official **[BitBrowser](https://www.bitbrowser.net/)** website and download the application compatible with your device.
2. Follow the installation guide to complete the setup, then launch the application once installed.
3. Log in to your BitBrowser account using your credentials.

### Step 2: Go to the Browser Profiles Management Page

1. After logging in, you will be directed to the BitBrowser main interface.
2. Locate the **"Browser Profiles"** (or **"Browser Accounts"**) option in the menu or dashboard.

![](/src/assets/img/fingerprint/bit1.png)

### Step 3: Create a New Browser Profile

1. Click the **"+ Add"** button to create a new browser profile.
2. In the profile settings window, give the profile a name for easy identification later.
![](/src/assets/img/fingerprint/bit2.png)

### Step 4: Enter LumiProxy Proxy Information

Log in to your LumiProxy account and select the proxy zone you want to use. You can find the required proxy information under **Access Details** on the **Overview** page.

1. On the profile configuration page, scroll down to the **"Proxy"** section.
2. Enter your LumiProxy proxy details as follows:
* **Type:** Select the protocol (**HTTP** or **SOCKS5**) based on your LumiProxy proxy type.
* **Host:** `us.lumiproxy.io` **(Using rotating IP as an example here)**
* **Port:** Enter the port number from your LumiProxy dashboard.
* **Username:** Enter your LumiProxy proxy username. For proxies in specific regions, adjust the username format accordingly (e.g., `lumi-username-area-US`).
* **Password:** Enter your LumiProxy proxy password.


3. Double-check all entered information to ensure accuracy.

### Step 5: Test and Save Proxy Settings

1. Click the **"Check Proxy"** button to verify if the connection is successful.
2. If the test succeeds, click **"Confirm"** to save the profile settings.

### Step 6: Launch the Profile and Verify Settings

1. In the **Browser Profiles** dashboard, find the profile you just created and click **"Open"**.
2. Once the browser launches, visit `api.ip.cc` to confirm whether the displayed IP matches your LumiProxy proxy IP.
3. If the IP matches, the proxy has been successfully integrated, and your profile is ready for secure and private browsing.

![](/src/assets/img/fingerprint/bit3.png)

By integrating LumiProxy proxies into BitBrowser, you can manage multiple online identities securely and efficiently. Whether managing social media accounts, running e-commerce operations, or conducting research tasks, LumiProxy ensures a stable, private, and geographically flexible browsing experience. Enjoy a smooth workflow and enhanced anonymity on BitBrowser!

:::tip 💡
Visit `api.ip.cc` in the opened browser to check your current proxy IP address.
:::








