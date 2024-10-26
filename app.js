
function adddata() {
    var input1 = document.getElementById("inputname").value
    document.getElementById("inputname").value = ""; 
  
    var leftside = document.getElementById("leftside");
    var rightside = document.getElementById("rightside");
  
    var words = input1
  
      if (words.indexOf('a') !== -1 || words.indexOf('e') !== -1 || words.indexOf('i') !== -1 || words.indexOf('o') !== -1 || words.indexOf('u') !== -1) {
        leftside.innerHTML += words + "<br>"; 
      } else {
        rightside.innerHTML += words + "<br>";
      }
    }
  