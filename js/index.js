function submitForm() {
    
    var form = document.getElementById("myForm");
  
    
    var breadInput = form.elements["breadNumber"];
    var cakeInput = form.elements["cakeNumber"];
    var muffinInput = form.elements["muffinNumber"]
  
    
    var bread = breadInput.value;
    var cake = cakeInput.value;
    var muffin = muffinInput.value;
    var totalPrice = ((bread*7.35) + (cake *17.85) + (muffin*1.47));
  
 alert("Your total order price will be: $" + totalPrice + "\nYour order contains: " + "\nBread: " + bread + "\nCake(s): " + cake +"\nMuffin(s): " + muffin);
  }


