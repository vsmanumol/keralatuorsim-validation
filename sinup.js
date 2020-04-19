
function validation()
{

  var phone=document.getElementById("phoneNum").value;    

  //var eric = true;
  //var id=document.getElementById("inputUserame").value;
  //var email = document.getElementById('inputEmail').value;
  //hideAllErrors();
    // if (id== "") {
    //     document.getElementById("Unameshow").style.display = "inline";
    //     if (bFocus) {
    //         document.getElementById("id").select();
    //         document.getElementById("id").focus();
    //     }
    //     eric = false;
    // }     
        
     var password = document.getElementById("inputPassword").value; 
         
       if(val_unam())
       {
       if (valemail())
       {
       if(valphone())
       {
       if(val(password))
       {
       if(valconpsw())
       {    

      }
      }                    
      }        
      }
      }  
    return false;    
}
 //username vallidatin//
      function val_uname(username)
      {
        var error =document.getElementById('Unameshow');
        var id=document.getElementById("inputUserame").value;
        var upatten = /^[a-zA-Z\-]+$/;    
        if(!id.match(upatten))
          {    
            
            document.getElementById('Unameshow').innerHTML="Invallid User Name";
            error.style.color="red";
            id.focus();                      
            return false;
          }
        else
        {   

          document.getElementById("Unameshow").innerHTML="plse enter correct username";
          error.style.color="green";         
           
            return true;  

          
        }
      }   
//email validation function//    
     function valemail(email)
     {
       var inemail =document.getElementById('email-showing');
       var email = document.getElementById('inputEmail').value;
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if(!email.match(filter))
         {             
            document.getElementById('email-showing').innerHTML="Please provide a valid email address";
            inemail.style.color="red";
           return false;
           // eric = false;
          }
          else
          {
            document.getElementById('email-showing').innerHTML="Valid E-mail Address";
            inemail.style.color="green";         
            // return eric;
            return true;            
          }
     }  
 //phone number vallidation//     
         
     function valphone(phone)
     {
           var invalidphone=document.getElementById('phoneshow');
           var phone=document.getElementById("phoneNum").value;    
           var phonePatten=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
           var numbers = /^[0-9]+$/;  
           var mobile = /^[1-9]\d{9}$/;
           
           if(isNaN(phone))

           {
            document.getElementById('phoneshow').innerHTML="Please Enter Only Number";
            invalidphone.style.color="red";
            return false;
          }
          if(phone.length!=10)

          {
            document.getElementById('phoneshow').innerHTML="invalid phone number";
            invalidphone.style.color="red";
            return false;

          }
          
          if(!phone.match(mobile))
             {
              
            document.getElementById('phoneshow').innerHTML="Please enter a valid 10 digit mobile number";
            invalidphone.style.color="red";
            return false;

             }

          if(!phone.match(phonePatten))
          {               
           document.getElementById('phoneshow').innerHTML="invalid phone number";
            invalidphone.style.color="red";
            return false;
          }                        
      
   }
     
 
         
        //password validation//
   function val(password)
     {

          var password = document.getElementById("inputPassword").value;
          document.getElementById("msg").innerHTML = password; 
          var matchedCase = new Array()
          matchedCase.push("[$@$!%*#?&]"); // Special Charector
          matchedCase.push("[A-Z]");      // Uppercase Alpabates
          matchedCase.push("[0-9]");      // Numbers
          matchedCase.push("[a-z]");     // Lowercase Alphabates
          //document.write(matchedCase);
          // Check the conditions
          var ctr = 0;
              for (var i = 0; i < matchedCase.length; i++)
              {
            // document.write(password);
                if (new RegExp(matchedCase[i]).test(password)) 
                {
                  ctr++;
                }
               }
        
         // Display it
         var color = "";
         var strength = "";
         switch (ctr) 
         {
             case 0:
             case 1:
             case 2:
                 strength = "Very Weak";
                 color = "red";
                 break;
             case 3:
                 strength = "Medium";
                 color = "orange";
                 break;
             case 4:
                 strength = "Strong";
                 color = "green";
                   break;
         }
         document.getElementById("msg").innerHTML = strength;
         document.getElementById("msg").style.color = color;
      }


         //cofirm validatin//
         function valconpsw()
         {
            var password = document.getElementById("inputPassword").value;
            var conpswshow = document.getElementById('conpswshow');
            var confirm_password =document.getElementById("inputConfirmPassword").value;
            if(!password.match(confirm_password))
            {             
             document.getElementById('conpswshow').innerHTML="Passwords do not match.";
             conpswshow.style.color="red";
             return false;
            }
            else
             {
              document.getElementById('conpswshow').disabled = true;
             //document.getElementById('conpswshow').innerHTML="Passwords match";
             //conpswshow.style.color="green";         
            //   //return eric;
              //return true;
              return false;
  
            }
           
         }
                
       
 
        
 //}//end validation//

      // function hideAllErrors() {
//   document.getElementById("Unameshow").style.display = "none"
//   document.getElementById("email-showing").style.display = "none"
 
// }  
