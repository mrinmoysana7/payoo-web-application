     document.getElementById("login-button").addEventListener("click", function(){
     const numberInput = document.getElementById("input-number");
     const num = numberInput.value;
     console.log(num); 

     const pinNumber = document.getElementById("input-pin");
     const pin = pinNumber.value;
     console.log(pin);

     if(num === "1234567890" && pin === "1234"){
        alert("Login-Success");
        window.location.assign("/home.html")    
     }
     else{
        alert("Login-Failed");
        return;
     }
     numberInput.value = "";
     pinNumber.value = "";
     
     
     })

     