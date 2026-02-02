const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: false, // Security best practice
            contextIsolation: true, // Security best practice
            // partition: 'persist:fresh_session' // Uncomment if caching persists
        },
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'build/icon.png') // Explicit icon path for runtime
    });

    // Load index.html (standard naming)
    mainWindow.loadFile('index.html');

    // Open external links in browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        require('electron').shell.openExternal(url);
        return { action: 'deny' };
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
