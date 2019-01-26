var summation = 0;
var doubleUp = false;
var sum = 0;
var IKEA_ISO_Card_Prefix = 627598;
var IKEA_Card_Type = 0;
var Country_Code_SE = 12;
var Issuer_Media_Kiosk = 3;
var Cust_Running_number = '0115584';
var Full_num = 0;

function LuhnAlgorithm_Full_Number(){
var complete_num = IKEA_ISO_Card_Prefix + '' + IKEA_Card_Type + '' + Country_Code_SE + '' + Issuer_Media_Kiosk +  '' +  Cust_Running_number;
function LuhnAlgorithm_last_nine_Digits(){
    console.log("Complete concatenated number:",complete_num);
    let y = complete_num.length;
    
    /* from the right to left, double every other digit starting with the second to last digit.*/
    for(var i = y-1; i >= 8; i--){
      console.log("value of i:",i);
      var curDigit = parseInt(complete_num.charAt(i));
    }
        /* double every other digit starting with the second to last digit */
      if(doubleUp)
        {
            /* doubled number is greater than 9 than subtracted 9 */
            if((curDigit*2) > 9)
            {
              sum +=(curDigit*2)-9;
              console.log("curDigit value after double",curDigit);
              console.log("value of sum",sum);
            }
            else
            {
              sum += curDigit*2;
            }
        }
        else
        {
          sum += curDigit;
        }
        var doubleUp =!doubleUp
         /* sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.  */
  //return (sum % 10) == 0  ? true : false;
  sum_value = sum % 10;
  console.log("output of mod 10: ",sum_value);
 if(sum_value == 0)
  {
    console.log("checksum output:",sum_value);
  }
  else
  {
    var checksum = (10 - sum_value);
    console.log("checksum output:",checksum);
  }
  return checksum;
    }


var a = LuhnAlgorithm_last_nine_Digits();

//var eighteenth_Digit = complete_num + '' + a;
var eighteenth_Digit = a;
console.log("output of luhns with eighteenth Digit: ",eighteenth_Digit); 
/*  }
var a = LuhnAlgorithm_last_nine_Digits();

var eighteenth_Digit = complete_num + '' + sum_value;
console.log("output of luhns with eighteenth Digit: ",eighteenth_Digit);
*/

Full_num = IKEA_ISO_Card_Prefix + '' + IKEA_Card_Type + '' + Country_Code_SE + '' + Issuer_Media_Kiosk +  '' +  Cust_Running_number + '' + eighteenth_Digit;
    console.log("Full concatenated number:",Full_num);
    let z = Full_num.length;
    
    /* from the right to left, double every other digit starting with the second to last digit.*/
    for(var j = z-1; j >= 17; j--){
      console.log("value of i:",j);
      var currentDigit = parseInt(Full_num.charAt(j));
    }
        /* double every other digit starting with the second to last digit */
      if(doubleUp)
        {
            /* doubled number is greater than 9 than subtracted 9 */
            if((currentDigit*2) > 9)
            {
              summation +=(currentDigit*2)-9;
              console.log("currentDigit value after double",currentDigit);
              console.log("value of summation",summation);
            }
            else
            {
              summation += currentDigit*2;
            }
        }
        else
        {
          summation += currentDigit;
        }
        var doubleUp =!doubleUp
         /* summation and divide it by 10. If the remainder equals zero, the original credit card number is valid.  */
  //return (summation % 10) == 0  ? true : false;
  summation_value = summation % 10;
  console.log("output of mod 10: ",summation_value);
 if(summation_value == 0)
  {
    console.log("checksummation output:",summation_value);
  }
  else
  {
    var checksummation = (10 - summation_value);
    console.log("checksummation output:",checksummation);
  }
  return checksummation;
    }


var a = LuhnAlgorithm_Full_Number();

var ninteenth_Digit = Full_num + '' + a;
console.log("output of luhns with eighteenth Digit: ",ninteenth_Digit); 

/*  }
var a = LuhnAlgorithm_last_nine_Digits();

var ninteenth_Digit = Full_num + '' + summation_value;
console.log("output of luhns with eighteenth Digit: ",ninteenth_Digit);
*/
