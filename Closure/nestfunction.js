//In JavaScript, a function can also contain another function. This is called a nested function
function greet(name){
    function displayName(){
        console.log(`Hi ${name}`);
    }
    displayName();
}
greet('samy');