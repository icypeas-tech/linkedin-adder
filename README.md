# LinkedIn-adder

## Description

LinkedIn Adder is a Chrome extension that allows you to automatically accept connection requests on LinkedIn with a button here.

- without button ? Retrieves the user's session cookie to send requests for accepting connection requests.
Find an Npoint API (command that allows performing the action) and inspect the DevTools.
Identify the API request for accepting a connection request and test it manually in DevTools.
Automate the service (requires session cookie and investigate if it can be done).

## Install the project in developer mode

- [ ] Download the entire project
- [ ] Go to Chrome > Settings > Extensions > Developer mode > Load unpacked extension
- [ ] Select the project directory
- [ ] Enable the extension

## Test

- [ ] Click on the icon that appears in the top right corner, then click the "Add" button after navigating to the appropriate page
(Irreversible action!)
One day there will be no button, everything happens automatically!

## Files

- [ ] manifest.json: File for the Chrome extension containing its information (name, version, description, permissions, scripts...) + Declaration of entry points (popup page and content scripts).
- [ ]  popup.html: Defines the popup page of the extension that is displayed when the user clicks on the extension icon.
- [ ] popup.js: JavaScript script associated with the popup page: Handles user events/interactions on the popup page (button, link, etc.).
- [ ] background.js: Script to listen for the click on the extension icon and execute the content script to remove the invitations.
- [ ] content.js: Content script injected into the web page (handles the button click).
- [ ] jsconfig.js (include the chrome package to benefit from auto-completion in VSCode).




