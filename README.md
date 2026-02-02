How to Build the Oticon Comparator App

To turn your HTML file into a desktop application (.exe and .deb), follow these steps.

Prerequisites

Install Node.js: Download and install "LTS" version from nodejs.org.

Setup Steps

Create a new folder on your computer named OticonApp.

Place the following three files inside that folder:

Oticon_Comparator_Tool.html (The HTML file you already created)

package.json (The code provided above)

main.js (The code provided above)

Installing Dependencies

Open your Terminal (Linux) or Command Prompt/PowerShell (Windows).

Navigate to your folder:

cd path/to/OticonApp


Install the required software libraries:

npm install


Testing the App

Before building, check if it works:

npm start


A window should open displaying your tool.

Building the Installers

To generate the .exe and .deb files, run:

npm run dist


Output

Once the process finishes, look inside the new dist folder created in your directory:

Windows: Look for Oticon Comparator Setup 1.0.0.exe

Linux: Look for oticon-intent-comparator_1.0.0_amd64.deb

Important Note on Internet Access

Your HTML tool currently uses CDN links (Tailwind CSS, FontAwesome, Chart.js) that require an internet connection to load.

If you want the app to work completely offline:

Download the .js and .css files from those CDN URLs.

Save them in your OticonApp folder (e.g., in a subfolder named assets).

Update your Oticon_Comparator_Tool.html <script> and <link> tags to point to these local files instead of the https://... URLs.
