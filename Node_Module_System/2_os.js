const os = require('os');

console.log("Operating System Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Home Directory:", os.homedir());
console.log("Network Interfaces:", os.networkInterfaces());