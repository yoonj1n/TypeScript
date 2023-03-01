// call signature
type Add = {
    (a:number, b:number):number
}

const add:Add = (a,b)=>a+b;


// overloading
type ADD = {
    (a:number, b:number):number
    (a:number, b:string, c:number):number
    // C는 추가 옵션, 추가적으로 쓰이는거는 오버로딩할때 ? 로 undefined 될 수 있음을 명시해줘야함 
}

const aDd: ADD =(a,b,c?)=>{
    if(typeof b ==="string") return a
    return a+b
}