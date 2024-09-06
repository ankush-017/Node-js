const path = require('path');

let ext = path.extname('C:\Users\ankush kumar\Desktop\Node js\Node_Module_System\ankush.text');//(file extension)
let baseName = path.basename('C:\\Users\\ankush kumar\\Desktop\\Node js\\Node_Module_System\\ankush.text');
console.log(baseName);
console.log(ext);

console.log(__filename);
console.log(__dirname);