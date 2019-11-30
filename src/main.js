const { app, BrowserWindow } = require('electron');

createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('./index.html');
};

app.on('ready', createWindow);
