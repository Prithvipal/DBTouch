const { app, BrowserWindow, Menu } = require('electron')
// require('electron-reload')(__dirname);


// Set Env

process.env.NODE_ENV = "devlopment"

const isDev = process.env.NODE_ENV !== "production" ? true : false
const isMac = process.platform == "darwin" ? true : false
const isLinux = process.platform == "linux" ? true : false


let mainWindow

function createWindow () {
  mainWindow= new BrowserWindow({
    width: 930,
    height: 570,
    icon:"",
    title:"DB Editor",
    resizable: isDev?true:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('./app/home.html')
  mainWindow.webContents.openDevTools()
}

app.on("ready", () => {
  createWindow()
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  mainWindow.on("ready", () => mainWindow = null)
})

// app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

const template = [  
  ...(isMac ? [{role: 'appMenu'}]: []),
  {
  label: 'Connect',
  submenu: [
    { label: 'Test' }]
  },
  {
    label: 'View',
    submenu: [
      { label: 'Test' }]
    },
    {
      label: 'Help',
      submenu: [
        { label: 'Test' }]
      }
  ]
