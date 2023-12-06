![logo linkedln adder2](https://github.com/icypeas-tech/linkedin-adder/assets/128605482/bfba5fa7-8496-467a-987e-b8373a3f8049)



<h1 align="center">
The solution, free and open-source, crafted for seamlessly automating LinkedIn connection requests acceptance!

</h1>


LinkedIn Adder is a Chrome extension developed by the Icypeas team, an open-source tool that allows you to seamlessly accept LinkedIn connection requests with the click of a button.

Is it possible to accomplish this without using a button? This involves fetching the user's session cookie to initiate requests for accepting connection requests.


- Look for an Npoint API (a command that facilitates the action) and examine the DevTools.
* Locate the API request responsible for accepting connection requests and carry out a manual test within DevTools.
+ Streamline the process through automation (requires the session cookie and an investigation into its feasibility).

<p align="center">
  <img width="400"  src="./src/image/linkedIn-adder.png">
</p>


## 💻 Install the project in developer mode

- [ ] Download the entire project
- [ ] Go to Chrome > Settings > Extensions > Developer mode > Load unpacked extension
- [ ] Select the project directory
- [ ] Enable the extension

## 🚦 Usage

Optimize your LinkedIn experience with LinkedIn Adder:

- [ ] Activate LinkedIn Adder by simply pressing the extension.
- [ ] Navigate to https://www.linkedin.com/mynetwork/invitation-manager/.
- [ ] Ensure smooth operation by pressing the LinkedIn Adder extension again.
- [ ] Accept pending requests effortlessly by pressing the 'Add all connection requests' button.
- [ ] Stay on the page until all pending requests are successfully accepted.

Seamlessly manage your LinkedIn connections—just another way our startup approach enhances your workflow.
This video demonstrates how to use it :

<p dir="auto" align="center"><animated-image data-catalyst="">

https://github.com/icypeas/linkedin-adder/assets/137278677/43ef41a6-43dd-43b2-a81f-c2a3be95e2da

</p>

## 📋 Files

- [ ] manifest.json: This file contains essential information about the Chrome extension, such as its name, version, description, permissions, and scripts. It also includes declarations of entry points, namely the popup page and content scripts.
- [ ] popup.html: Responsible for defining the popup page of the extension, visible when the user interacts with the extension icon.
- [ ] popup.js: The JavaScript script linked to the popup page. It manages user events and interactions that occur on the popup page, like buttons and links.
- [ ] background.js: This script monitors clicks on the extension icon and triggers the execution of the content script, which handles the removal of invitations.
- [ ] content.js: An injected content script operating within the web page, handling actions like button clicks.
- [ ] jsconfig.js (includes the chrome package to enable auto-completion in VSCode).


##  👨‍💻 Support

If you have any questions or require assistance, don't hesitate to reach out. Our dedicated support team is here to help you every step of the way. Contact us at support@icypeas.com for prompt and reliable assistance.

##  🙋 Credits

This extension has been developed and open sourced by the team behind Icypeas https://www.icypeas.com/



