//loginrgisration.js 

// <script type="text/javascript">
$(document).ready(function(){
  
  $("#fnamecheck").hide();
  $("#lnamecheck").hide();
  $("#mnamecheck").hide();
  $("#passcheck").hide();
  $("#conpasscheck").hide();
  $("#mailcheck").hide();



var fnam_err=true;
var mnam_err=true;
var lnam_err=true;
var passw_err=true;
var cnpassw_err=true;
var mail_err=true;


$("#firstname").keyup(function(){
 ffnamecheck();
});


function ffnamecheck() {
  var fname_val=$("#firstname").val();
if(fname_val.length=="")
{
  $("#fnamecheck").show();
  $("#fnamecheck").html("**please fill valid name ");
  $("#fnamecheck").focus();
  $("#fnamecheck").css('color','red');
  fnam_err= false;
  return false;
}
else {
  $("#fnamecheck").hide();
  } 
if(fname_val.length <9)
{
  $("#fnamecheck").show();
  $("#fnamecheck").html("**Username mst be within required range  ");
  $("# fnamecheck").focus();
  $("#fnamecheck").css('color','red');
  fnam_err=false;
  return false;
}
else {
  $("#fnamecheck").hide();
  } 
  



}


$("#middlename").keyup(function(){
  mfnamecheck();
 });
 
 
 function mfnamecheck() {
   var mname_val=$("#middlename").val();
 if(mname_val.length=="")
 {
   $("#mnamecheck").show();
   $("#mnamecheck").html("**please fill valid name ");
   $("#mnamecheck").focus();
   $("#mnamecheck").css('color','red');
   mnam_err= false;
   return false;
 }
 else {
   $("#mnamecheck").hide();
   } 
 if(mname_val.length <9)
 {
   $("#mnamecheck").show();
   $("#mnamecheck").html("**Username mst be within required range  ");
   $("#mfnamecheck").focus();
   $("#mnamecheck").css('color','red');
   mnam_err=false;
   return false;
 }
 else {
   $("#mnamecheck").hide();
   } 
   
 
 }
 
$("#lastname").keyup(function(){
  lfnamecheck();
 });
 
 
 function lfnamecheck() {
   var lname_val=$("#lastname").val();
 if(lname_val.length=="")
 {
   $("#lnamecheck").show();
   $("#lnamecheck").html("**please fill valid name ");
   $("#lnamecheck").focus();
   $("#lnamecheck").css('color','red');
   lnam_err= false;
   return false;
 }
 else {
   $("#lnamecheck").hide();
   } 
 if(lname_val.length <9)
 {
   $("#lnamecheck").show();
   $("#lnamecheck").html("**Username mst be within required range  ");
   $("# lnamecheck").focus();
   $("#lnamecheck").css('color','red');
   lnam_err=false;
   return false;
 }
 else {
   $("#lnamecheck").hide();
   } 
}
 

$("#email").keyup(function(){
mailcheck();
});

function mailcheck()
{
  var mail_val=$("#email").val();
  
    if(mail_val.length=="")
    {
      
    $("#mailcheck").show();
    $("#mailcheck").html("**please fill valid emailaddress");
    $("#mailcheck").focus();
    $("#mailcheck").css('color','red');
    mail_err= false;
    return false;
 }
else
{
  $("#mailcheck").hide();

}
if((mail_val.length <9)||(mail_val.length>20))
{
  $("#mailcheck").show();
  $("#mailcheck").html("**mail must in proper way  ");
  $("#mailcheck").focus();
  $("#mailcheck").css('color','red');
  mail_err=false;
  return false;
}
else {
  $("#mailcheck").hide();
  } 
}






$("#password").keyup(function(){
 passwcheck();
});
function passwcheck(){
var passw_val=$("#password").val();
if (passw_val.length=="")
{
$("#passcheck").show();
$("#passcheck").html("**please fill  the password ");

$("#passcheck").css ("color","red");
            passw_err = false;
            return false;
            }


            else{
                $("#passcheck").hide();
                }
if ((passw_val.length<6)||(passw_val.length <8))
{
$("#passcheck").show();
$("#passcheck").html("**please fill  the password in given range 9");

$("#passcheck").css ("color","red");
            passw_err = false;
            return false;            
          }
 else{
                $("#passcheck").hide();
                }
    
}




$("#conpass").keyup(function(){
  conpasscheck();
 });

 function conpasscheck()
 {
 var conpassw_val=$("#conpass").val();
 if (conpassw_val.length=="")
 {
 $("#conpasscheck").show();
 $("#conpasscheck").html("**please fill  the password ");
 
 $("#conpasscheck").css ("color","red");
             conpassw_err = false;
             return false;
             }
 
 
             else{
                 $("#conpasscheck").hide();
                 }
 if ((conpassw_val.length<6)||(conpassw_val.length <8))
 {
 $("#conpasscheck").show();
 $("#conpasscheck").html("**please confirm  the password in given range ");
 
 $("#conpasscheck").css ("color","red");
             passw_err = false;
             return false;            
           }
  else{
                 $("#conpasscheck").hide();
                 }
     
}

$("#btnsubmit").click(function(){

fnam_err = true;
passw_err = true;
mnam_err=true;
lnam_err=true;
cnpassw_err=true;
mail_err=true;


ffnamecheck();
mfnamecheck();
lfnamecheck();
passwcheck();
conpasscheck();
mailcheck();


if(fnam_err == true  && passw_err == true  &&lnam_err == true  && conpass_err == true &&mnam_err == true  && mail_err == true)
{
return true;
}
else
{
return false;
}


});

});
  
