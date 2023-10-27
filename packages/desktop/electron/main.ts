import path from 'node:path';
import { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain } from 'electron';
const trayWindow = require('electron-tray-window');

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist');
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

async function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    // show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  win.removeMenu();
  win.setSize(1000, 600);

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
  // TRAY
  // const image = await nativeImage.createThumbnailFromPath(
  //   path.join(process.env.PUBLIC, 'logo-light.png'),
  //   { width: 24, height: 24 },
  // );
  //
  // trayWindow.setOptions({
  //   trayIconPath: image,
  //   windowUrl: VITE_DEV_SERVER_URL
  //     ? VITE_DEV_SERVER_URL
  //     : `file://${path.join(process.env.DIST, 'index.html')}`,
  //   width: 800,
  //   height: 430,
  //   margin_x: -800 / 2,
  // });
}

app.on('window-all-closed', () => {
  win = null;
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(createWindow);
