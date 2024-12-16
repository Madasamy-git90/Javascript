function greet(name){
    function displayName(){
        console.log(`Hi ${name}`);
    }
    return displayName;
}
const g1 = greet('samy')
//console.log(g1);
g1();