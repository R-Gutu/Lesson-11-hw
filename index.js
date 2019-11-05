/* var day = prompt("Please enter day", "monday");
switch (day) {
  case "friday":
      case "sunday":
          case "tuesday":
              case "wednesday":
                   case "monday":
    alert("Working day");
    break;
    case "saturday":
        case "sunday":
    alert("Weekend");
    break;
  default:
    alert("I can not define,please try another value");
    break;
}
*/
var day = prompt("Please enter day","monday");
var result;
if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
    result = "Working day"
} else {
    if(day == "saturday" || day == "sunday"){
        result="Weekend"
    }
}    
alert(result);


