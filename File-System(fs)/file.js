const fs=require("fs");

//sync..
fs.writeFileSync("./File-System(fs)/test.txt","Hi ");

//Async
fs.writeFile("./File-System(fs)/text.txt","hello how are you",(e)=>{})

//const result=fs.readFileSync("./File-System(fs)/contact.txt","utf-8");
//console.log(result)


//Async read file in async read file it not return the value.
/*fs.readFile("./File-System(fs)/contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result)
    }
})*/
fs.appendFileSync("./File-System(fs)/test.txt",`Hey there \n`)
//fs.mkdirSync("my-docs")