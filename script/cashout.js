// This is a short form method
document.getElementById("cashout-button").addEventListener("click", function () {

    // Get the agent number
    const agentNumber = getValueFromInput("agent-number");
    // console.log(agentNumber);
    if(agentNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    // Get the amount, validate, convert to number
    const getAmount = getValueFromInput("amount");
    // console.log(getAmount);

    // Get the current balance, validate, convert to number
    const currentBalance = document.getElementById('balance');
    const balance = currentBalance.innerText;
    // console.log(balance);

    //  calculate new balance
    const newBalance = Number(balance) - Number(getAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    // Get the pin, verify
    const getPin = getValueFromInput("pin-number");
    if(getPin.length === 4){
        alert("Cashout Successful");
        currentBalance.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
        return;
    }
})

// // This is a long form method
// document.getElementById('cashout-button')
//     .addEventListener('click', function () {
//         // Get the agent number
//         const numberAgent = document.getElementById('agent-number');
//         const addNumber = numberAgent.value;
//         console.log(addNumber);
//         if(addNumber.length != 11){
//             alert('Invalid agent number');
//             return;
//         }

//         // Get the amount, validate, convert to number
//         const amount = document.getElementById('amount');
//         const addAmount = amount.value;
//         console.log(addAmount);

//         // Get the current balance, validate, convert to number
//         const currentBalance = document.getElementById('balance');
//         const balance = currentBalance.innerText;
//         console.log(balance);
        
        
//         // calculate new balance
//         const newBalance = Number(balance) - Number(addAmount);
//         if(newBalance < 0){
//             alert("Invalid Amount");
//             return;
//         }
        

//         // Get the pin, verify
//         const getPin = document.getElementById('pin-number');
//         const addPin = getPin.value;
//         if(addPin.length == '4'){
//             // True :: show an alert > set balance
//             alert('Cashout Successful');
//             console.log('new balance', newBalance);
//             currentBalance.innerText = newBalance;
//             numberAgent.value = '';
//             amount.value = '';
//             getPin.value = '';
            
//         }    
//         else{
//            // False :: show an error alert > return
//             alert('Invalid Pin');
//             return;
//         }   
        
//     })