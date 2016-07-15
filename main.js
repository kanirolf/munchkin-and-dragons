/* Based off tutorial life on Electron website */

const electron = require("electron");

// module to controll app life
const {app} = electron;

// module to create app window 
const {BrowserWindow} = electron;

// Keep global reference so that the window isn't garbage collected when the 
// window creation function ends. 
let mainWindow;
let mainWindowConfig = {
    size: {
        width: 800,
        height: 600
    },
    view: "" 
};

let createWindow = () => {
    mainWindow = new BrowserWindow(mainWindowConfig.size);
    mainWindow.loadURL(mainWindowConfig.view);
    mainWindow.on('close', () => {
        mainWindow = null;
    });
};