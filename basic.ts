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

