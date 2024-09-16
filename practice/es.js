const arrowfunction1 = () =>{
    for(let i=0;i<3;i++){
        console.log("arrow function");
    }
}
const singlearrowfunction = () => console.log("arrow function in single line");

function normal(){
    console.log("normal function");
}
singlearrowfunction();
arrowfunction1();
normal();
