const electron = require('electron');
const url = require('url');
const path = require('path');
const { Encrypt, Decrypt } = require('./hexEncryptor');

const {app, BrowserWindow, ipcMain} = electron;

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 700,
        height: 600,
        title: "Heksaszyfrer",
        icon: "./icons/icon.ico",
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true
        },
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file:',
        slashes: true,
    }));

    ipcMain.on('encrypt:input', (e, value) => {
        e.sender.send('encrypt:output', Encrypt(value));
    });
    ipcMain.on('decrypt:input', (e, value) => {
        e.sender.send('decrypt:output', Decrypt(value));
    });
});