![logo linkedln adder2](https://github.com/icypeas-tech/linkedin-adder/assets/128605482/bfba5fa7-8496-467a-987e-b8373a3f8049)



<h1 align="center">
The definitive solution that is both free and open-source, designed for automatically accepting connection requests on LinkedIn!

</h1>


LinkedIn Adder is an open-source Chrome extension developed by the Icypeas team, enabling you to effortlessly accept connection requests on LinkedIn using a provided button.

Is it possible to accomplish this without using a button? This involves fetching the user's session cookie to initiate requests for accepting connection requests.
• Look for an Npoint API (a command that facilitates the action) and examine the DevTools.
• Locate the API request responsible for accepting connection requests and carry out a manual test within DevTools.
• Streamline the process through automation (requires the session cookie and an investigation into its feasibility).

<p align="center">
  <img width="400"  src="https://github.com/icypeas-tech/linkedin-adder/assets/128605482/7112d781-c181-4be1-bc56-e9783b6d4d07">
</p>


## 💻 Install the project in developer mode

- [ ] Download the entire project
- [ ] Go to Chrome > Settings > Extensions > Developer mode > Load unpacked extension
- [ ] Select the project directory
- [ ] Enable the extension

## 🚦 Test

- [ ] Click the icon situated in the upper-right corner, followed by selecting the "Add" button once you've reached the relevant page.
(Warning: This action cannot be undone!)

• A future envisioning involves the elimination of the button, with all processes unfolding seamlessly and autonomously!

## 📋 Files

- [ ] manifest.json: This file contains essential information about the Chrome extension, such as its name, version, description, permissions, and scripts. It also includes declarations of entry points, namely the popup page and content scripts.
- [ ] popup.html: Responsible for defining the popup page of the extension, visible when the user interacts with the extension icon.
- [ ] popup.js: The JavaScript script linked to the popup page. It manages user events and interactions that occur on the popup page, like buttons and links.
- [ ] background.js: This script monitors clicks on the extension icon and triggers the execution of the content script, which handles the removal of invitations.
- [ ] content.js: An injected content script operating within the web page, handling actions like button clicks.
- [ ] jsconfig.js (includes the chrome package to enable auto-completion in VSCode).


##  👨‍💻 Support

If you have any questions or need assistance, feel free to get in touch with us. We're here to help and support you : support@icypeas.com



