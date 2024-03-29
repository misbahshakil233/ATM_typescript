import inquirer from "inquirer";

async function main() {
    //
    let againStart=true;
    while(againStart){
    let myBalance = 10000;
    let myPin = 1234;

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your Pin Number",
            type: "number",
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option?",
                type: "list",
                choices: ["Withdraw", "Check Balance"] // Corrected the array structure
            }
        ]);

        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter Amount",
                    type: "number",
                }
            ]);
            //
            if(amountAns.amount <=  myBalance){
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is : ${myBalance}`)
            }
            else if(amountAns.amount >= myBalance) {
                console.log("please enter correct amount")
            }
         
        } else if (operationAns.operation === "Check Balance") {
        
            console.log(`your current balance is : ${myBalance}`)
        }

        }

     else {
        console.log("Incorrect pin code!!");
    }

 const again=await inquirer.prompt({

    name:"restart",
    message:"Do you Want to Again ?",
    type:"input"
 })
 againStart= (again.restart.toLowerCase() === 'y')

    }
}
main();
