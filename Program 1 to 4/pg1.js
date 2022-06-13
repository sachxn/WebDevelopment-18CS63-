let exp = prompt("Enter an expression");

switch (exp.charAt(1)) {
  case "+":
    alert(parseInt(exp.charAt(0)) + parseInt(exp.charAt(2)));
    break;
  case "-":
    alert(parseInt(exp.charAt(0)) - parseInt(exp.charAt(2)));
    break;
  case "*":
    alert(parseInt(exp.charAt(0)) * parseInt(exp.charAt(2)));
    break;
  case "/":
    if (parseInt(exp.charAt(2) != 0)) alert("DivideByZeroError");
    else alert(parseInt(exp.charAt(0)) / parseInt(exp.charAt(2)));
    break;
  default:
    alert("Wrong Expression");
}
