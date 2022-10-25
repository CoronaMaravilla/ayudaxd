
function validar() {
    let ema = document.getElementById("email").value;
  
    
   {
      sessionStorema.setItem("email", ema);
    }
  }
  
  function eema() {
    let ema = sessionStorema.getItem("email");
    if (ema >= 18) {
      document.getElementById("data").innerHTML =
        "¡Gracias por Registrarte!,".concat(
          "\n",
          "Te hemos regalado 5 monedas por tu registro."
        );
    } else if (ema < 18) {
      document.getElementById("data").innerHTML =
        "¡Gracias por Registrarte!, Te hemos regalado 15 monedas por tu registro.";
    }
  }