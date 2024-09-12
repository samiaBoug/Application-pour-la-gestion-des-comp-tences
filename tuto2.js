// 
let table = [
    "first name", "second_name", "age"
]
const data = JSON.stringify(table);
const fs = require('fs');

const writefile = ()=>{
    data = js.writefile('table', data , (err)=>{
        if(err){
            console.log(err)
        }else{
            
        }
    } )
}