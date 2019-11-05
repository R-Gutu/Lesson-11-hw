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
if (day == "monday"){
    result = "Working day"
} else {
    if(day == "tuesday"){
        result = "Working day"
    } else {
        if(day == "wednesday"){
            result = "Working day"
        } else {
            if (day == "thuesday"){
                result = "Working day"
            } else {
                if (day == "friday") {
                    result = "Working day"
                } else {
                    if (day == "saturday"){
                        result = "Weekend"
                    } else {
                        if (day == "sunday") {
                            result = "Weekend"
                        }
                    }
                }
            }
        }
    }  
}
alert(result);


