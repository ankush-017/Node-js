const fs = require('fs');

console.log('First Line');


// let data = fs.readFileSync('j1.txt');
// console.log('Data of f1 -> '+ data);
// let data2 = fs.readFileSync('j2.txt');
// console.log('Data of f2 -> '+ data2);


// For in Async file read file read in radomly which converts result in came random file data

// For serial Async file read   pass the next file read;

fs.readFile('j1.txt',cb1); // flie path, callback

function cb1(err,data){
    if(err){
        console.log('Error in file reading '+ err);
    }
        console.log('Data of File-1 => '+ data);

        fs.readFile('j2.txt',cb2); // flie path, callback
}

function cb2(err,data){
    if(err){
        console.log('Error in file reading '+ err);
    }
        console.log('Data of File-2 => '+ data);

        fs.readFile('j3.txt',cb3); // flie path, callback
}

function cb3(err,data){
    if(err){
        console.log('Error in file reading '+ err);
    }
        console.log('Data of File-3 => '+ data);
}

console.log('Last Line');