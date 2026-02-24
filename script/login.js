     document.getElementById("login-button").addEventListener("click", function(){
     const numberInput = document.getElementById("input-number");
     const num = numberInput.value;
     if(num.length != '10'){
      alert('Invalid Number');
     }
     console.log(num); 

     const pinNumber = document.getElementById("input-pin");
     const pin = pinNumber.value;
     console.log(pin);

     if(pin.length == '4'){
        alert("Login-Success");
        window.location.href = "home.html";    
     }
     else{
        alert("Login-Failed");
        return;
     }
     numberInput.value = "";
     pinNumber.value = "";
     
     
     })

     