function validateUser()
{
    var user_name = document.registration.uname.value;
    var letters = /^[a-zA-Z0-9_\s]+$/;
    if(user_name == "" || user_name == "null")
    {
        alert("Please enter your user name");
        document.registration.uname.focus();
        return false;
    }
    if(user_name.length<6)
    {
        alert("user name must minimun 6 characters");
        document.registration.uname.focus();
        return false;
    }
    if(!un.match(letters)) 
    { 
         alert("Plz enter valid user name"); 
         document.registration.uname.focus(); 
         return false; 
   }
   alert("Successful"); 
}

function validateMobile()
{
    var mobileno = document.registration.mobile.value; 
    var mno=/^[0-9]{10}$/; 
    if(mobileno=="" || mobileno=="null") 
    { 
     alert("please enter ur mobile no"); 
     document.registration.mobile.focus(); 
     return false; 
    } 
    if(!mobileno.match(mno)) 
    { 
     alert("Please enter valid mobile number"); 
     document.registration.mobile.focus(); 
     return false; 
    } 
    alert("Successful")
}

function validateEmail()
{
    var mail = document.registration.email.value; 
    if(mail=="" || mail=="null") 
    { 
        alert("Please enter your email"); 
        document.registration.email.focus(); 
        return false; 
    } 
    var atpos = mail.indexOf("@"); 
    var dotpos = mail.lastIndexOf("."); 
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length) 
    { 
        alert("Not a valid e-mail address"); 
        return false; 
    } 
     alert("Registration successfull"); 
}

function validatePassword()
{
    var password = document.registration.password.value;
    var letters = /^(?=.*[a-zA-Z0-9_\s])(?=.*[!@#$%^&*]){8,}$/;
    if(password == "" || password == "null")
    {
        alert("Password required!");
        document.registration.password.focus();
        return false;
    }
    if(!password.match(letters)) 
    { 
         alert("Please enter a valid password!"); 
         document.registration.password.focus(); 
         return false; 
    } 
    alert("Successful");
}