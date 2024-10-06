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