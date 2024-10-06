// Modularity Concept

function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function multi(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}
<<<<<<< HEAD
function rem(a,b){
    console.log(a%b);
}



// Here I export to use function in different file

module.exports = {
    addition: add,
    substraction: sub,
    multiplication: multi,
    division: div,
    remainder: rem,
};
=======


// Here I export to use function in different file
module.exports = {add,sub,multi,div};
>>>>>>> 254cc2b70e18ded338083741ce9ab4e7c5a642b7
