const chalk=require("chalk");
const figlet=require("figlet");
const readline = require("readline");
const print=console.log;
print(chalk.blue(figlet.textSync("Tasker")));
print(chalk.cyan("Type a command (Type help to see the list of commands)"));
const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
        prompt:">>"
});
reader.prompt();
var storage=[];
reader.on("line",function(data){
    var cmd=data.split(" ")[0];
    var datarr=data.split(" ");
    var ndatarr=datarr.shift();
    var task=datarr.join();
        if(cmd=="help")
        console.log(`
        Available commands:
        1.add task_name
        2.ls (to list all tasks)
        3.delete id(enter task_id to delete it)`);
        else if(cmd=="add"&&task.length>0){
        storage.push(task);
        console.log(chalk.green ("One task added"));}
        else if(cmd=="ls"){
            console.log(chalk.magenta("Tasks"));
        for(var i=0;i<storage.length;i++)   
        console.log(chalk.green(`${i+1} ${storage[i]}`)); 
    }
        else if(cmd=="delete"&&task.length>0){
            const id=task.split(" ")[0];
    // console.log(id);
    // delete

    storage.splice(id-1,1);
    console.log(chalk.green("One task deleted"));
        }
        else
        console.log(chalk.red("Wrong Command"));
        reader.prompt();
});
