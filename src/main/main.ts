import { BrowserWindow, app, dialog } from 'electron';

let win: BrowserWindow | null;

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

  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }

  win.once('ready-to-show', () => {
    win.show();
  });
};

app.on('ready', createWindow);

exports.getFile = () => {
  const files = dialog.showOpenDialog({
    buttonLabel: 'Upload',
    filters: [{ extensions: ['pdf'], name: 'PDFs' }],
    properties: ['openFile'],
    title: 'Upload Paper',
  });

  if (!files) return;

  const file = files[0];

  console.log(file);
};
