function myFun() {
    var un = document.getElementById("user").value ;
    var ps = document.getElementById("pass").value ;
    var cps = document.getElementById("conpass").value ;
    var mob = document.getElementById("mob").value ;
    var email = document.getElementById("email").value ;
    
    //Validation for User Name
    if(un == "") {
        document.getElementById("username").innerHTML = "**Please Fill Out Username Field";
        return false ;
    }
    
    if((un.length <= 4) || (un.length > 20)){
        document.getElementById("username").innerHTML = "**Username must be 5 to 20 Character long";
        return false ;
    }

    if(!isNaN(un)) {    
        document.getElementById("username").innerHTML = "**Username is not a number";
        return false ;
    }

    //******************//
    //Validation for Password
    if(ps == "") {
        document.getElementById("password").innerHTML = "**Please Fill Out Password Field";
        return false ;
    }

    if((ps.length <= 8) || (ps.length > 20)){
        document.getElementById("password").innerHTML = "**Password must be 8 to 20 Character long";
        return false ;
    }

    //******************//
    //Validation for Confirm Password
    if(cps == "") {
        document.getElementById("conpassword").innerHTML = "**Please Fill Out Confirm Password Field";
        return false ;
    }
    if(cps != ps) {
        document.getElementById("conpassword").innerHTML = "**Password are not matching";
        return false ;
    }

    //******************//
    //Validation For Mobile Number
    if(mob == "") {
        document.getElementById("mobile").innerHTML = "**Please Fill Out Mobile Number Field";
        return false ;
    }
    if(mob.length != 11){
        document.getElementById("mobile").innerHTML = "**Mobile Number must be equal to 11 digit";
        return false ;
    }

    //******************//
    //Validation For Email
    if(email == "") {
        document.getElementById("emails").innerHTML = "**Please Fill Out Email Field";
        return false ;
    }
    if(email.indexOf("@") <=0 ) {
        document.getElementById("emails").innerHTML = "**@ Position is Invalid ";
        return false ;
    }
    
}
