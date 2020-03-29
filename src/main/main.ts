import { BrowserWindow, app, dialog } from 'electron';

let win: BrowserWindow | null;

const getFile = () => {
  const files = dialog.showOpenDialog({
    properties: ['openFile'],
  });

  if (!files) return;

  console.log(files);
};

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 1300,
  });

  win.loadFile('./index.html');

  getFile();

  win.once('ready-to-show', () => {
    win.show();
  });
};

app.on('ready', createWindow);
