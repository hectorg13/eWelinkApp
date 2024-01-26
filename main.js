const ewelink = require('ewelink-api');

(async () => {
const connection = new ewelink({
  email: 'hector.glhe@gmail.com',
  password: 'e6aeqjLAkJcd#bF&',
  region: 'us',
  APP_ID: 'Uw83EKZFxdif7XFXEsrpduz5YyjP7nTl',
  APP_SECRET: 'mXLOjea0woSMvK9gw7Fjsy7YlFO4iSu6'
});


const device = await connection.getDevice('10018b491b');

const getStatusSwitch = await connection.getDevicePowerState('10018b491b');


//const usageHistory = await connection.getDevicePowerUsage('10018b491b');
//console.log(usageHistory);


// Se obtienen los datos a consumir

console.log('Nombre: '+ device.name);
console.log('Conexion: '+ device.online);
console.log('Corriente: '+ device.params.current);
console.log('Voltaje: '+ device.params.voltage);
console.log('Estado Switch: '+ getStatusSwitch.state);

//Esta función ajusta si el sensor está accionado o no
const newState = 'on'
const setStatus = await connection.setDevicePowerState('10018b491b',newState);
console.log(setStatus);

})();