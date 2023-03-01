let a : number[] = [1,2];
let b : string[] = ["k"];
type Age = number;
type Name = string;

type Player = {
    readonly name:Name,
    age?:Age
}

const nico :Player ={
    name : "nico",
    // age:12
}

const lynn : Player={
    name : "lynn",
    age : 12
}

// player.name = 1; error

// if(player.age && player.age <10){
    
// }



function playerMaker(name:string):Player{
    return {
        name:name,

    }
}

const yoonjin = playerMaker("yoonjin");
yoonjin.age = 12 // how?


const playermaker = (name:string):Player=>({name})


const play : readonly [string, number, boolean]=["NICO",12,true]

let z : undefined = undefined
let t : null


/*
unknown
- 타입 지정을 하지 않음
*/ 

let un : unknown;

//let d = un + 1;
if (typeof un === 'number'){
    let k = un+1;
}


// void => 아무것도 return 하지 않음 
function hellod(){
    console.log('kk');
}

/*
never
- 절대 return하지 않음
*/

function heoo():never{
    throw new Error("xxx");
} //error 발생 가능

function never_test(name:string|number){
    if(typeof name ==="string"){
        name
    }else if (typeof name === "number"){
        name
    }else{
        name
        /*
        여기서 name type === "never"
        왜냐하면 name === string or number 인데, else 부분은 둘 다 아니라는ㄱ ㅓ
        
        */
    }
}