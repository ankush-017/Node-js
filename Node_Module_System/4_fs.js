const fs = require('fs');

// // File reading
// let fileContent = fs.readFileSync('f1.txt');


// console.log('data: ' + fileContent);

// // writing file
// fs.writeFileSync('ankush.txt' , 'Ankush is very good developer');
// console.log("File haas been written"); 
// //in case if file not exit it creates a new file of same name as it provided in writeFileSync


// // append a file (or Update a file)
// fs.appendFileSync('ankush.txt', 'Ankush is also a very good behavioral person')

// // delete file
// fs.unlinkSync('f1.txt');
// console.log('file deleted Successfully');


// Directory

/* ------------------------------------------------------------------------------------ */

// Create a directory
// fs.mkdirSync('MyFirstDirectory');

// check the content inside the directory ...
let folderPath = 'C:\\Users\\ankush kumar\\Desktop\\Node js\\Node_Module_System\\MyFirstDirectory';

let folderContent = fs.readdirSync(folderPath);

console.log("Folder Content: " ,folderContent);
 
// check Wheater a file exist or not
let doesExist = fs.existsSync('MyFirstDirectory');
console.log(doesExist);

// remove directory
fs.rmdirSync('MyFirstDirectory');
console.log('File has been deleted ...'); // Directory must be Empty ...