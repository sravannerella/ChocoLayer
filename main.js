const {app, BrowserWindow} = require('electron'),
		path = require('path'),
		url = require('url');

function createWindow(){

	let window = new BrowserWindow({
		titleBarStyle: 'default',
		minHeight: 500,
  		minWidth: 500,
  		show: true
	});

	window.once('ready-to-show', function(){
		window.show();
	});

	window.loadURL(
		url.format({
			pathname: path.join(__dirname, 'app/views/main.html'),
			protocol: 'file:',
			slashes: true
		})
	);

	window.setMenu(null);

	window.on('closed', ()=>{
		window = null;
	});
}

app.on('ready', createWindow);